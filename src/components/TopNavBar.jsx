"use client"; // 1. MANDATORY for Next.js when using click handlers or navigation hooks

import Link from "next/link"; // 2. Use the official Next.js link component
import { useRouter } from "next/navigation"; // 3. Use the official Next.js router hook

export default function TopNavBar({ title = "Study Buddy", hideBack = false }) {
  const router = useRouter(); // 4. Next.js uses router.back() instead of navigate(-1)

  return (
    <header className="bg-white dark:bg-slate-900 font-lexend docked top-0 z-40 border-b border-indigo-50 dark:border-slate-800 shadow-sm sticky w-full">
      <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {!hideBack && (
            <button 
              onClick={() => router.back()} // 5. Back navigation in Next.js
              className="text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          {/* 6. Changed 'to' attributes to 'href' for Next.js */}
          <Link href="/dashboard" className="text-xl font-bold text-indigo-900 dark:text-white">
            {title}
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-slate-500 hover:bg-slate-50 p-2 rounded-lg">Home</Link>
          <Link href="/library" className="text-slate-500 hover:bg-slate-50 p-2 rounded-lg">Library</Link>
          <Link href="/quiz-select" className="text-slate-500 hover:bg-slate-50 p-2 rounded-lg">Quizzes</Link>
          <Link href="/progress" className="text-slate-500 hover:bg-slate-50 p-2 rounded-lg">Progress</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-indigo-900 dark:text-indigo-100 p-2 rounded-full hover:bg-slate-50">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-indigo-900 dark:text-indigo-100 p-2 rounded-full hover:bg-slate-50">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
