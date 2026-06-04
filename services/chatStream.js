export async function streamMessage({ chatId, prompt, languageMode, onMeta, onToken, onDone }) {
  const token = localStorage.getItem("aman_token");
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ chatId, prompt, languageMode, stream: true })
  });

  if (!response.ok || !response.body) throw new Error("Unable to stream response");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split("\n\n");
    buffer = chunks.pop() || "";

    chunks.forEach((chunk) => {
      const event = chunk.match(/^event: (.+)$/m)?.[1];
      const rawData = chunk.match(/^data: (.+)$/m)?.[1];
      if (!event || !rawData) return;
      const data = JSON.parse(rawData);
      if (event === "meta") onMeta(data);
      if (event === "token") onToken(data.token);
      if (event === "done") onDone(data);
    });
  }
}
