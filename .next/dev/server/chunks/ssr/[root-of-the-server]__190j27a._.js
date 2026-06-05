module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/frontend/services/api.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/frontend/node_modules/axios)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const api = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return config;
});
api.interceptors.response.use((response)=>response, (error)=>Promise.reject(new Error(error.response?.data?.message || error.message)));
const __TURBOPACK__default__export__ = api;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/store/slices/authSlice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/services/api.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const initialState = {
    user: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
    token: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null,
    status: "idle",
    error: null
};
const login = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("auth/login", async (payload)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/login", payload);
    return data;
});
const register = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("auth/register", async (payload)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/register", payload);
    return data;
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        logout (state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("aman_token");
            localStorage.removeItem("aman_user");
        }
    },
    extraReducers: (builder)=>{
        builder.addMatcher((action)=>action.type.startsWith("auth/") && action.type.endsWith("/pending"), (state)=>{
            state.status = "loading";
            state.error = null;
        }).addMatcher((action)=>action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"), (state, action)=>{
            state.status = "succeeded";
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("aman_token", action.payload.token);
            localStorage.setItem("aman_user", JSON.stringify(action.payload.user));
        }).addMatcher((action)=>action.type.startsWith("auth/") && action.type.endsWith("/rejected"), (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});
const { logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/store/slices/chatSlice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "addUserMessage",
    ()=>addUserMessage,
    "appendAssistantToken",
    ()=>appendAssistantToken,
    "createChat",
    ()=>createChat,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteChat",
    ()=>deleteChat,
    "failStream",
    ()=>failStream,
    "fetchChat",
    ()=>fetchChat,
    "fetchHistory",
    ()=>fetchHistory,
    "finishAssistantMessage",
    ()=>finishAssistantMessage,
    "regenerate",
    ()=>regenerate,
    "setLanguageMode",
    ()=>setLanguageMode,
    "startAssistantMessage",
    ()=>startAssistantMessage,
    "updateChat",
    ()=>updateChat
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/services/api.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const fetchHistory = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/history", async (q = "")=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(`/chat/history${q ? `?q=${encodeURIComponent(q)}` : ""}`);
    return data.chats;
});
const fetchChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/fetch", async (id)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(`/chat/${id}`);
    return data;
});
const createChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/new", async (languageMode)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post("/chat/new", {
        languageMode
    });
    return data.chat;
});
const updateChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/update", async ({ id, patch })=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].patch(`/chat/${id}`, patch);
    return data.chat;
});
const deleteChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/delete", async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/chat/${id}`);
    return id;
});
const regenerate = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("chat/regenerate", async (chatId)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post("/chat/regenerate", {
        chatId
    });
    return data.message;
});
const chatSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createSlice"])({
    name: "chat",
    initialState: {
        chats: [],
        activeChat: null,
        messages: [],
        languageMode: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "professional_hindi",
        loading: false,
        streaming: false,
        error: null
    },
    reducers: {
        setLanguageMode (state, action) {
            state.languageMode = action.payload;
            localStorage.setItem("aman_language", action.payload);
        },
        addUserMessage (state, action) {
            state.messages.push(action.payload);
        },
        startAssistantMessage (state) {
            state.streaming = true;
            state.messages.push({
                role: "assistant",
                content: "",
                createdAt: new Date().toISOString(),
                streaming: true
            });
        },
        appendAssistantToken (state, action) {
            const last = state.messages[state.messages.length - 1];
            if (last?.role === "assistant") last.content += action.payload;
        },
        finishAssistantMessage (state, action) {
            const last = state.messages[state.messages.length - 1];
            if (last?.role === "assistant") {
                last.streaming = false;
                last._id = action.payload.messageId;
                last.content = action.payload.response || last.content;
            }
            state.streaming = false;
            state.activeChat = action.payload.chatId;
            if (action.payload.chatId) {
                const exists = state.chats.some((chat)=>chat._id === action.payload.chatId);
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
        failStream (state, action) {
            state.streaming = false;
            state.error = action.payload;
            const last = state.messages[state.messages.length - 1];
            if (last?.role === "assistant" && !last.content) {
                last.streaming = false;
                last.content = action.payload || "Unable to get response.";
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchHistory.fulfilled, (state, action)=>{
            state.chats = action.payload;
        }).addCase(fetchChat.fulfilled, (state, action)=>{
            state.activeChat = action.payload.chat._id;
            state.languageMode = action.payload.chat.languageMode;
            state.messages = action.payload.messages;
        }).addCase(createChat.fulfilled, (state, action)=>{
            state.chats.unshift(action.payload);
            state.activeChat = action.payload._id;
            state.messages = [];
        }).addCase(updateChat.fulfilled, (state, action)=>{
            state.chats = state.chats.map((chat)=>chat._id === action.payload._id ? action.payload : chat);
        }).addCase(deleteChat.fulfilled, (state, action)=>{
            state.chats = state.chats.filter((chat)=>chat._id !== action.payload);
            if (state.activeChat === action.payload) {
                state.activeChat = null;
                state.messages = [];
            }
        }).addCase(regenerate.fulfilled, (state, action)=>{
            const index = [
                ...state.messages
            ].reverse().findIndex((m)=>m.role === "assistant");
            const actualIndex = index >= 0 ? state.messages.length - 1 - index : -1;
            if (actualIndex >= 0) state.messages[actualIndex] = action.payload;
            else state.messages.push(action.payload);
        }).addMatcher((action)=>action.type.startsWith("chat/") && action.type.endsWith("/pending"), (state)=>{
            state.loading = true;
            state.error = null;
        }).addMatcher((action)=>action.type.startsWith("chat/") && action.type.endsWith("/fulfilled"), (state)=>{
            state.loading = false;
        }).addMatcher((action)=>action.type.startsWith("chat/") && action.type.endsWith("/rejected"), (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
const { setLanguageMode, addUserMessage, startAssistantMessage, appendAssistantToken, finishAssistantMessage, failStream } = chatSlice.actions;
const __TURBOPACK__default__export__ = chatSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/store/slices/uiSlice.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setSidebarOpen",
    ()=>setSidebarOpen,
    "toggleDarkMode",
    ()=>toggleDarkMode
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const initialState = {
    darkMode: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false,
    sidebarOpen: false
};
const uiSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createSlice"])({
    name: "ui",
    initialState,
    reducers: {
        toggleDarkMode (state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem("aman_theme", state.darkMode ? "dark" : "light");
        },
        setSidebarOpen (state, action) {
            state.sidebarOpen = action.payload;
        }
    }
});
const { toggleDarkMode, setSidebarOpen } = uiSlice.actions;
const __TURBOPACK__default__export__ = uiSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/store/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$authSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/store/slices/authSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$chatSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/store/slices/chatSlice.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$uiSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/store/slices/uiSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$authSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$chatSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$uiSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$authSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$chatSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$uiSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$authSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$chatSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        ui: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$slices$2f$uiSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/store/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$store$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/frontend/pages/_app.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/pages/_app.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("react-redux-33e98ae3dc8fa36d");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@reduxjs/toolkit-aacda947045aa45b");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/axios [external] (axios, esm_import, [project]/frontend/node_modules/axios)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("axios-35209a1ae3b406d3");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__190j27a._.js.map