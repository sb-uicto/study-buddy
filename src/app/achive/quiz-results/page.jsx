'use client'
import { usePathname } from 'next/navigation'

export default function QuizResults(){
            const pathname = usePathname();
            return (
                <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
                    <header className="flex items-center justify-between px-margin-mobile py-md">
                        <button onClick={() => navigate('/dashboard')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <span className="font-h3 text-[18px] font-semibold text-on-surface">Quiz Completed</span>
                        <div className="w-10"></div>
                    </header>
                    <main className="flex-1 px-margin-mobile pb-[140px] pt-sm max-w-container-max mx-auto w-full md:px-xl">
                        <section className="bg-surface-container-lowest rounded-[24px] p-lg flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-outline-variant/30 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-fixed opacity-60 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative w-32 h-32 mb-lg flex items-center justify-center z-10">
                                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-secondary-container" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="263.89" strokeDashoffset="39.59" strokeLinecap="round" strokeWidth="8"></circle>
                                </svg>
                                <span className="font-h1 text-h1 text-on-surface tracking-tight">85%</span>
                            </div>
                            <div className="text-center z-10">
                                <h2 className="font-h3 text-[28px] font-bold text-on-surface mb-xs flex items-center justify-center gap-2">
                                    Great job, Alex! <span className="material-symbols-outlined text-[#FFC107] fill-1">workspace_premium</span>
                                </h2>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px] mx-auto">You're mastering this material. A quick review of a few areas and you'll be set.</p>
                            </div>
                        </section>
                        <section className="mt-xl">
                            <div className="flex items-center justify-between mb-md">
                                <h3 className="font-h3 text-[20px] text-on-surface">Topics to Review</h3>
                                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">2 AREAS</span>
                            </div>
                            <div className="flex flex-col gap-sm">
                                <div className="bg-error-container rounded-xl p-md flex items-center justify-between border border-error-container/60 shadow-sm transition-transform active:scale-[0.98]">
                                    <div className="flex items-center gap-md">
                                        <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-error shadow-sm"><span className="material-symbols-outlined fill-1">science</span></div>
                                        <div>
                                            <h4 className="font-button text-[16px] text-on-error-container">Cellular Respiration</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="w-20 h-1.5 bg-surface-container-lowest rounded-full overflow-hidden"><div className="w-[40%] h-full bg-error"></div></div>
                                                <span className="font-label-caps text-[10px] text-on-error-container/80">40% SCORE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-lowest/50 text-on-error-container"><span className="material-symbols-outlined text-[20px]">arrow_forward</span></button>
                                </div>
                            </div>
                        </section>
                    </main>
                    <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant/30 px-margin-mobile pt-md pb-safe z-50">
                        <div className="max-w-container-max mx-auto flex flex-col md:flex-row-reverse gap-sm">
                            <button onClick={() => navigate('/active-quiz')} className="w-full md:w-auto md:flex-1 bg-secondary-container text-on-secondary py-[18px] rounded-full font-button text-button flex items-center justify-center gap-2 shadow-[0_8px_16px_rgba(124,77,255,0.2)]">Retry Weak Topics</button>
                            <button onClick={() => navigate('/dashboard')} className="w-full md:w-auto md:flex-1 bg-transparent border-2 border-primary-container text-primary-container py-[16px] rounded-full font-button text-button">Back to Home</button>
                        </div>
                    </div>
                </div>
            );
        };
