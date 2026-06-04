import { Mic, Send, Square } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSpeech from "@/hooks/useSpeech";
import { streamMessage } from "@/services/chatStream";
import {
  addUserMessage,
  appendAssistantToken,
  failStream,
  finishAssistantMessage,
  startAssistantMessage
} from "@/store/slices/chatSlice";

export default function ChatComposer() {
  const dispatch = useDispatch();
  const { activeChat, languageMode, streaming } = useSelector((state) => state.chat);
  const [prompt, setPrompt] = useState("");
  const speech = useSpeech({ onTranscript: (text) => setPrompt((prev) => `${prev} ${text}`.trim()) });

  async function submit(event) {
    event.preventDefault();
    const cleanPrompt = prompt.trim();
    if (!cleanPrompt || streaming) return;
    setPrompt("");
    dispatch(addUserMessage({ role: "user", content: cleanPrompt, createdAt: new Date().toISOString() }));
    dispatch(startAssistantMessage());

    try {
      await streamMessage({
        chatId: activeChat,
        prompt: cleanPrompt,
        languageMode,
        onMeta: () => {},
        onToken: (token) => dispatch(appendAssistantToken(token)),
        onDone: (data) => dispatch(finishAssistantMessage(data))
      });
    } catch (error) {
      dispatch(failStream(error.message));
    }
  }

  return (
    <form onSubmit={submit} className="border-t border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-4xl items-end gap-2 rounded-lg border border-neutral-300 bg-white p-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) submit(event);
          }}
          rows={1}
          placeholder="Message Aman GPT"
          className="max-h-40 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 outline-none"
        />
        <button
          type="button"
          title="Voice input"
          onClick={speech.listening ? speech.stop : speech.start}
          className="grid h-10 w-10 place-items-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          {speech.listening ? <Square size={18} /> : <Mic size={18} />}
        </button>
        <button
          type="submit"
          title="Send"
          disabled={!prompt.trim() || streaming}
          className="grid h-10 w-10 place-items-center rounded-md bg-brand text-white disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
}
