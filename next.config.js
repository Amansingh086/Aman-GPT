/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Proxy all /api/* requests to the backend server.
  // This avoids CORS issues on Vercel: the browser hits the same Vercel origin
  // and Next.js forwards the request to the real backend URL server-side.
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    // Strip trailing /api from baseURL so we can append :path* correctly
    const backendBase = backendUrl.replace(/\/api\/?$/, "");
    return [
      {
        source: "/api/:path*",
        destination: `${backendBase}/api/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
