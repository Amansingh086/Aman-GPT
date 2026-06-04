import { useEffect, useRef } from "react";

export default function useAutoScroll(dependencies) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, dependencies);

  return ref;
}
