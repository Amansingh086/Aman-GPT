import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/store/slices/authSlice";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function submit(event) {
    event.preventDefault();
    const result = await dispatch(register(form));
    if (result.type.endsWith("fulfilled")) router.replace("/");
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h1 className="text-2xl font-semibold">Create Aman GPT Account</h1>
        <input className="mt-6 h-11 w-full rounded-md border px-3 dark:border-neutral-700 dark:bg-neutral-950" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="mt-3 h-11 w-full rounded-md border px-3 dark:border-neutral-700 dark:bg-neutral-950" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="mt-3 h-11 w-full rounded-md border px-3 dark:border-neutral-700 dark:bg-neutral-950" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button className="mt-5 h-11 w-full rounded-md bg-brand font-medium text-white" disabled={status === "loading"}>
          {status === "loading" ? "Creating..." : "Create Account"}
        </button>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Already registered? <Link className="text-brand" href="/login">Sign in</Link>
        </p>
      </form>
    </main>
  );
}
