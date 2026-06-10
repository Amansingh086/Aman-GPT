import axios from "axios";

// Use a relative URL so the Next.js rewrite proxy forwards the request
// to the real backend. This eliminates CORS issues on Vercel because the
// browser always calls the same Vercel origin — Next.js proxies it server-side.
// For local dev, NEXT_PUBLIC_API_URL can still be set if you want direct calls,
// but /api is recommended for consistency.
const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("aman_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Provide a user-friendly message instead of raw "Network Error"
    const message =
      error.response?.data?.message ||
      (error.message === "Network Error"
        ? "Unable to reach the server. Please check your connection or try again later."
        : error.message);
    return Promise.reject(new Error(message));
  }
);

export default api;
