'use client'

import { usePathname } from "next/navigation"; //import the path hook

export default function BottomNavBar() {
    const pathname = usePathname() // Get the current path

            const getActive = (path) => pathname === path ? "text-purple-600 dark:text-purple-400 scale-105" : "text-slate-400";
            const getIconFill = (path) => pathname === path ? 1 : 0;

            return (
                <nav className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md fixed bottom-0 w-full z-50 border-t border-indigo-50 dark:border-slate-800 shadow-[0_-4px_20px_rgba(26,35,126,0.05)]">
                    <div className="flex justify-around items-center px-2 py-3 pb-safe">
                        <Link to="/dashboard" className={`flex flex-col items-center justify-center font-lexend text-[10px] font-medium transition-all ${getActive('/dashboard')}`}>
                            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: `'FILL' ${getIconFill('/dashboard')}`}}>dashboard</span>
                            <span>Home</span>
                        </Link>
                        <Link to="/library" className={`flex flex-col items-center justify-center font-lexend text-[10px] font-medium transition-all ${getActive('/library')}`}>
                            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: `'FILL' ${getIconFill('/library')}`}}>auto_stories</span>
                            <span>Library</span>
                        </Link>
                        <Link to="/quiz-select" className={`flex flex-col items-center justify-center font-lexend text-[10px] font-medium transition-all ${getActive('/quiz-select')}`}>
                            <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: `'FILL' ${getIconFill('/quiz-select')}`}}>quiz</span>
                            <span>Quizzes</span>
                        </Link>
                        <Link to="/progress" className={`flex flex-col items-center justify-center font-lexend text-[10px] font-medium transition-all ${getActive('/progress')}`}>
                            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: `'FILL' ${getIconFill('/progress')}`}}>analytics</span>
                            <span>Progress</span>
                        </Link>
                    </div>
                </nav>
            );
        };