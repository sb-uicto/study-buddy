'use client'
import { usePathname } from "next/navigation";

import { usePathname } from "next/navigation";

export default function QuizModeSelect(){
            const pathname = usePathname();
            return (
                <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased pb-[100px] md:pb-0">
                    <TopAppBar hideBack />
                    <main className="flex-1 px-margin-mobile md:px-lg max-w-container-max mx-auto w-full flex flex-col pt-lg">
                        <div className="mb-xl text-center md:text-left">
                            <h1 className="font-h2 text-h2 text-primary-container mb-xs">Select Mode</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Choose how you want to approach your next session.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl w-full max-w-4xl mx-auto md:mx-0">
                            <button onClick={() => navigate('/active-quiz')} className="group relative flex flex-col items-start text-left bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-surface-variant hover:shadow-[0_10px_30px_rgba(124,77,255,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full h-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
                                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-lg group-hover:bg-secondary-container group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined text-[28px] fill-1">psychology</span>
                                </div>
                                <h2 className="font-h3 text-h3 text-on-surface mb-sm">Practice Mode</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant flex-1">No pressure, instant feedback on every answer. Take your time and learn the concepts thoroughly.</p>
                                <div className="mt-lg flex items-center text-secondary-container font-button text-button group-hover:translate-x-1 transition-transform duration-300">
                                    Start Practice
                                    <span className="material-symbols-outlined ml-xs text-[18px]">arrow_forward</span>
                                </div>
                            </button>
                            <button className="group relative flex flex-col items-start text-left bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-surface-variant hover:shadow-[0_10px_30px_rgba(124,77,255,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full h-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined text-[28px] fill-1">timer</span>
                                </div>
                                <h2 className="font-h3 text-h3 text-on-surface mb-sm">Exam Simulator</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant flex-1">Timed session, results revealed at the end. Test your knowledge under real exam constraints.</p>
                                <div className="mt-lg flex items-center text-primary font-button text-button group-hover:translate-x-1 transition-transform duration-300">
                                    Start Simulator
                                    <span className="material-symbols-outlined ml-xs text-[18px]">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </main>
                    <BottomNavBar />
                </div>
            );
        };