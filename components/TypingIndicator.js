export default function TypingIndicator() {
  return (
    <div className="flex gap-1 px-2 py-1">
      <span className="typing-dot h-2 w-2 rounded-full bg-neutral-400" />
      <span className="typing-dot h-2 w-2 rounded-full bg-neutral-400 [animation-delay:120ms]" />
      <span className="typing-dot h-2 w-2 rounded-full bg-neutral-400 [animation-delay:240ms]" />
    </div>
  );
}
