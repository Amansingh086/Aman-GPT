import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services/api";

export const fetchHistory = createAsyncThunk("chat/history", async (q = "") => {
  const { data } = await api.get(`/chat/history${q ? `?q=${encodeURIComponent(q)}` : ""}`);
  return data.chats;
});

export const fetchChat = createAsyncThunk("chat/fetch", async (id) => {
  const { data } = await api.get(`/chat/${id}`);
  return data;
});

export const createChat = createAsyncThunk("chat/new", async (languageMode) => {
  const { data } = await api.post("/chat/new", { languageMode });
  return data.chat;
});

export const updateChat = createAsyncThunk("chat/update", async ({ id, patch }) => {
  const { data } = await api.patch(`/chat/${id}`, patch);
  return data.chat;
});

export const deleteChat = createAsyncThunk("chat/delete", async (id) => {
  await api.delete(`/chat/${id}`);
  return id;
});

export const regenerate = createAsyncThunk("chat/regenerate", async (chatId) => {
  const { data } = await api.post("/chat/regenerate", { chatId });
  return data.message;
});

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    activeChat: null,
    messages: [],
    languageMode: typeof window !== "undefined" ? localStorage.getItem("aman_language") || "professional_hindi" : "professional_hindi",
    loading: false,
    streaming: false,
    error: null
  },
  reducers: {
    setLanguageMode(state, action) {
      state.languageMode = action.payload;
      localStorage.setItem("aman_language", action.payload);
    },
    addUserMessage(state, action) {
      state.messages.push(action.payload);
    },
    startAssistantMessage(state) {
      state.streaming = true;
      state.messages.push({ role: "assistant", content: "", createdAt: new Date().toISOString(), streaming: true });
    },
    appendAssistantToken(state, action) {
      const last = state.messages[state.messages.length - 1];
      if (last?.role === "assistant") last.content += action.payload;
    },
    finishAssistantMessage(state, action) {
      const last = state.messages[state.messages.length - 1];
      if (last?.role === "assistant") {
        last.streaming = false;
        last._id = action.payload.messageId;
        last.content = action.payload.response || last.content;
      }
      state.streaming = false;
      state.activeChat = action.payload.chatId;
      if (action.payload.chatId) {
        const exists = state.chats.some((chat) => chat._id === action.payload.chatId);
        if (!exists) {
          state.chats.unshift({
            _id: action.payload.chatId,
            title: "New Chat",
            languageMode: state.languageMode,
            lastMessageAt: new Date().toISOString()
          });
        }
      }
    },
    failStream(state, action) {
      state.streaming = false;
      state.error = action.payload;
      const last = state.messages[state.messages.length - 1];
      if (last?.role === "assistant" && !last.content) {
        last.streaming = false;
        last.content = action.payload || "Unable to get response.";
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.chats = action.payload;
      })
      .addCase(fetchChat.fulfilled, (state, action) => {
        state.activeChat = action.payload.chat._id;
        state.languageMode = action.payload.chat.languageMode;
        state.messages = action.payload.messages;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chats.unshift(action.payload);
        state.activeChat = action.payload._id;
        state.messages = [];
      })
      .addCase(updateChat.fulfilled, (state, action) => {
        state.chats = state.chats.map((chat) => (chat._id === action.payload._id ? action.payload : chat));
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.chats = state.chats.filter((chat) => chat._id !== action.payload);
        if (state.activeChat === action.payload) {
          state.activeChat = null;
          state.messages = [];
        }
      })
      .addCase(regenerate.fulfilled, (state, action) => {
        const index = [...state.messages].reverse().findIndex((m) => m.role === "assistant");
        const actualIndex = index >= 0 ? state.messages.length - 1 - index : -1;
        if (actualIndex >= 0) state.messages[actualIndex] = action.payload;
        else state.messages.push(action.payload);
      })
      .addMatcher((action) => action.type.startsWith("chat/") && action.type.endsWith("/pending"), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((action) => action.type.startsWith("chat/") && action.type.endsWith("/fulfilled"), (state) => {
        state.loading = false;
      })
      .addMatcher((action) => action.type.startsWith("chat/") && action.type.endsWith("/rejected"), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  setLanguageMode,
  addUserMessage,
  startAssistantMessage,
  appendAssistantToken,
  finishAssistantMessage,
  failStream
} = chatSlice.actions;
export default chatSlice.reducer;
