import { formatDistanceToNow } from "date-fns";
import { MessageSquare, PanelLeftClose, Pin, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChat, deleteChat, fetchChat, fetchHistory, updateChat } from "@/store/slices/chatSlice";

export default function Sidebar({ open, onClose }) {
  const dispatch = useDispatch();
  const { chats, activeChat, languageMode } = useSelector((state) => state.chat);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchHistory(search));
  }, [dispatch, search]);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex w-80 flex-col border-r border-neutral-200 bg-white transition-transform dark:border-neutral-800 dark:bg-neutral-950 lg:static lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-neutral-200 p-3 dark:border-neutral-800">
        <button
          onClick={() => dispatch(createChat(languageMode))}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-brand px-3 text-sm font-medium text-white"
        >
          <Plus size={18} /> New Chat
        </button>
        <button title="Close sidebar" onClick={onClose} className="ml-2 rounded-md p-2 lg:hidden">
          <PanelLeftClose size={20} />
        </button>
      </div>
      <label className="m-3 flex items-center gap-2 rounded-md border border-neutral-300 px-3 dark:border-neutral-700">
        <Search size={16} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search chats"
          className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
      </label>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        {chats.map((chat) => (
          <div
            key={chat._id}
            className={`mb-1 flex items-center gap-2 rounded-md px-2 py-2 text-sm ${
              activeChat === chat._id ? "bg-neutral-200 dark:bg-neutral-800" : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
            }`}
          >
            <button onClick={() => dispatch(fetchChat(chat._id))} className="flex min-w-0 flex-1 items-center gap-2 text-left">
              <MessageSquare size={16} />
              <span className="min-w-0 flex-1 truncate">{chat.title}</span>
              <span className="text-xs text-neutral-500">{formatDistanceToNow(new Date(chat.lastMessageAt), { addSuffix: true })}</span>
            </button>
            <button title="Pin chat" onClick={() => dispatch(updateChat({ id: chat._id, patch: { pinned: !chat.pinned } }))}>
              <Pin size={15} className={chat.pinned ? "fill-brand text-brand" : ""} />
            </button>
            <button title="Delete chat" onClick={() => dispatch(deleteChat(chat._id))}>
              <Trash2 size={15} />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
