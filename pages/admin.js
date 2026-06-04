import { useEffect, useState } from "react";
import api from "@/services/api";
import AppLayout from "@/layouts/AppLayout";

export default function Admin() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/admin/metrics").then(({ data }) => setMetrics(data)).catch((err) => setError(err.message));
  }, []);

  return (
    <AppLayout>
      <header className="border-b border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </header>
      <main className="grid gap-4 p-4 md:grid-cols-4">
        {error && <p className="text-red-600">{error}</p>}
        {[
          ["Total Users", metrics?.totalUsers],
          ["Total Chats", metrics?.totalChats],
          ["API Usage", metrics?.apiUsage?.totalMessages],
          ["Active Sessions", metrics?.activeSessions]
        ].map(([label, value]) => (
          <section key={label} className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-sm text-neutral-500">{label}</p>
            <p className="mt-2 text-3xl font-semibold">{value ?? "-"}</p>
          </section>
        ))}
      </main>
    </AppLayout>
  );
}
