import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { setSidebarOpen } from "@/store/slices/uiSlice";

export default function AppLayout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { darkMode, sidebarOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (!token) router.replace("/login");
  }, [token, router]);

  if (!token) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-surface dark:bg-neutral-950">
      <Sidebar open={sidebarOpen} onClose={() => dispatch(setSidebarOpen(false))} />
      <main className="flex min-w-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
