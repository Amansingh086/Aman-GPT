import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/authSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  async function submit(event) {
    event.preventDefault();
    const result = await dispatch(login(form));
    if (result.type.endsWith("fulfilled")) router.replace("/");
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h1 className="text-2xl font-semibold">Aman GPT</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Sign in to continue</p>
        <input className="mt-6 h-11 w-full rounded-md border px-3 dark:border-neutral-700 dark:bg-neutral-950" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="mt-3 h-11 w-full rounded-md border px-3 dark:border-neutral-700 dark:bg-neutral-950" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button className="mt-5 h-11 w-full rounded-md bg-brand font-medium text-white" disabled={status === "loading"}>
          {status === "loading" ? "Signing in..." : "Sign In"}
        </button>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          New here? <Link className="text-brand" href="/register">Create account</Link>
        </p>
      </form>
    </main>
  );
}
