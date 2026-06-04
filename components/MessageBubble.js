import { Check, Copy, Volume2 } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import useSpeech from "@/hooks/useSpeech";

export default function MessageBubble({ message }) {
  const [copied, setCopied] = useState(false);
  const { speak } = useSpeech();
  const isUser = message.role === "user";
  const content = message.content || message.prompt || message.response || "";

  async function copy() {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <article className={`group flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-3xl px-2 py-3 text-black dark:text-neutral-100">
        <div className="prose prose-sm max-w-none text-black prose-p:text-black prose-li:text-black prose-headings:text-black dark:prose-invert dark:text-neutral-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {content || " "}
          </ReactMarkdown>
        </div>
        <div className={`mt-2 flex gap-1 opacity-0 transition group-hover:opacity-100 ${isUser ? "justify-end" : "justify-start"}`}>
          <button title="Copy message" onClick={copy} className="rounded p-1 text-black hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          {!isUser && (
            <button title="Speak message" onClick={() => speak(content)} className="rounded p-1 text-black hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800">
              <Volume2 size={16} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
