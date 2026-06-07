import { useDispatch, useSelector } from "react-redux";
import { setLanguageMode } from "@/store/slices/chatSlice";

const options = [
  { value: "auto_detect", label: "🌐 Auto Detect" },
  { value: "english", label: "🇬🇧 English" },
  { value: "professional_hindi", label: "🇮🇳 Hindi" },
  { value: "bhojpuri", label: "🗣️ Bhojpuri" }
];

export default function LanguageSelector() {
  const dispatch = useDispatch();
  const languageMode = useSelector((state) => state.chat.languageMode);

  return (
    <select
      value={languageMode}
      onChange={(event) => dispatch(setLanguageMode(event.target.value))}
      title="Select language mode"
      className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-brand dark:border-neutral-700 dark:bg-neutral-900"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
