import { useMemo, useRef, useState } from "react";

export default function useSpeech({ onTranscript } = {}) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const supported = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const api = useMemo(() => {
    if (!supported) return null;
    return window.SpeechRecognition || window.webkitSpeechRecognition;
  }, [supported]);

  function start() {
    if (!api) return;
    const recognition = new api();
    recognition.lang = "hi-IN";
    recognition.interimResults = false;
    recognition.onresult = (event) => onTranscript?.(event.results[0][0].transcript);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }

  function stop() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  }

  return { supported, listening, start, stop, speak };
}
