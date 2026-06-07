import { Download, FileText, Menu, Moon, RefreshCw, Sun } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatComposer from "@/components/ChatComposer";
import LanguageSelector from "@/components/LanguageSelector";
import MessageBubble from "@/components/MessageBubble";
import TypingIndicator from "@/components/TypingIndicator";
import useAutoScroll from "@/hooks/useAutoScroll";
import AppLayout from "@/layouts/AppLayout";
import { exportPdf, exportTxt } from "@/services/exportService";
import { fetchHistory, regenerate } from "@/store/slices/chatSlice";
import { setSidebarOpen, toggleDarkMode } from "@/store/slices/uiSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { messages, activeChat, streaming, languageMode } = useSelector((state) => state.chat);
  const { darkMode } = useSelector((state) => state.ui);
  const bottomRef = useAutoScroll([messages.length, streaming]);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch, activeChat]);

  return (
    <AppLayout>
      <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-3 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex items-center gap-2">
          <button title="Open sidebar" onClick={() => dispatch(setSidebarOpen(true))} className="rounded-md p-2 lg:hidden">
            <Menu size={22} />
          </button>
          <h1 className="text-lg font-semibold">Aman GPT</h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <button title="Regenerate response" disabled={!activeChat || streaming} onClick={() => dispatch(regenerate(activeChat))} className="rounded-md p-2 hover:bg-neutral-100 disabled:opacity-40 dark:hover:bg-neutral-800">
            <RefreshCw size={19} />
          </button>
          <button title="Export TXT" onClick={() => exportTxt(messages)} className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <FileText size={19} />
          </button>
          <button title="Export PDF" onClick={() => exportPdf(messages)} className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Download size={19} />
          </button>
          <button title="Toggle dark mode" onClick={() => dispatch(toggleDarkMode())} className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </header>
      <section className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
          {messages.length === 0 ? (
            <div className="grid min-h-[60vh] place-items-center text-center">
              <div>
                <h2 className="text-3xl font-semibold">Aman GPT</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {languageMode === "bhojpuri"
                    ? "🗣️ Bhojpuri mode ready — बोलीं, हम सुनत बानी!"
                    : languageMode === "english"
                    ? "🇬🇧 English mode ready — How can I help you today?"
                    : languageMode === "professional_hindi"
                    ? "🇮🇳 Hindi mode ready — आज मैं आपकी कैसे मदद करूँ?"
                    : "🌐 Auto-detect mode — Write in any language and I'll reply in the same!"}
                </p>
              </div>
            </div>
          ) : (
            messages.map((message, index) => <MessageBubble key={message._id || index} message={message} />)
          )}
          {streaming && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </section>
      <ChatComposer />
    </AppLayout>
  );
}
