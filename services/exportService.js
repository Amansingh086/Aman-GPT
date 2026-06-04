import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

function transcript(messages) {
  return messages.map((m) => `${m.role.toUpperCase()}\n${m.content || m.prompt || m.response}`).join("\n\n");
}

export function exportTxt(messages) {
  const blob = new Blob([transcript(messages)], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `aman-gpt-chat-${Date.now()}.txt`);
}

export function exportPdf(messages) {
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(transcript(messages), 180);
  let y = 12;
  lines.forEach((line) => {
    if (y > 280) {
      doc.addPage();
      y = 12;
    }
    doc.text(line, 12, y);
    y += 7;
  });
  doc.save(`aman-gpt-chat-${Date.now()}.pdf`);
}
