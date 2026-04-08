import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex text-center mb-8">
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Next.js 14 AI SaaS
        </h1>
      </div>
      
      <p className="text-xl text-zinc-400 mt-4 text-center max-w-2xl">
        The ultimate starter kit for shipping AI-powered applications with Next.js, Stripe, Supabase, and OpenAI.
      </p>

      <div className="mt-12 flex gap-4">
        <Link href="/login">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
            Get Started
          </Button>
        </Link>
        <Link href="/docs">
          <Button size="lg" variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900">
            Read Documentation
          </Button>
        </Link>
      </div>
    </main>
  );
}
