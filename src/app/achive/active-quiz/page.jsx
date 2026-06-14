'use client'
import { usePathname } from 'next/navigate'

export default function ActiveQuiz(){
            const pathname = usePathname();
            return (
                <div className="bg-background min-h-screen flex flex-col antialiased">
                    <header className="bg-surface-container-lowest border-b border-surface-variant sticky top-0 z-40">
                        <div className="max-w-3xl mx-auto flex items-center justify-between px-margin-mobile py-sm md:py-md">
                            <button onClick={() => navigate(-1)} className="p-xs text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-surface-container">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <div className="font-h3 text-h3 text-on-surface flex-1 text-center truncate px-md">Cellular Biology</div>
                            <div className="flex items-center gap-xs px-sm py-xs bg-error-container rounded-full text-on-error-container font-label-caps text-label-caps whitespace-nowrap shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">timer</span>
                                <span>14:59</span>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 w-full max-w-3xl mx-auto px-margin-mobile pb-xl">
                        <div className="py-lg">
                            <div className="flex justify-between items-end mb-sm">
                                <span className="font-body-md text-body-md text-on-surface-variant font-medium">Question 4 of 10</span>
                                <span className="font-label-caps text-label-caps text-secondary-container bg-secondary-fixed px-sm py-xs rounded-full">Practice Mode</span>
                            </div>
                            <div className="h-[8px] w-full bg-primary-fixed rounded-full overflow-hidden">
                                <div className="h-full bg-secondary-container w-2/5 rounded-full transition-all duration-300"></div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-outline-variant mb-lg relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-secondary-container"></div>
                            <h2 className="font-h2 text-h2 text-on-surface mb-md">Which organelle is universally recognized as the powerhouse of the cell?</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Consider the primary site of cellular respiration and ATP production within eukaryotic organisms.</p>
                        </div>
                        <div className="flex flex-col gap-sm">
                            <button className="w-full flex items-center p-md rounded-lg border border-outline-variant bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors group">
                                <div className="w-10 h-10 rounded flex items-center justify-center bg-surface-container font-button text-button text-on-surface-variant mr-md group-hover:bg-surface-variant transition-colors">A</div>
                                <span className="font-body-lg text-body-lg text-on-surface flex-1">Nucleus</span>
                            </button>
                            <div className="w-full flex items-center p-md rounded-lg border-2 border-error bg-error-container/30 text-left">
                                <div className="w-10 h-10 rounded flex items-center justify-center bg-error text-on-error font-button text-button mr-md">B</div>
                                <span className="font-body-lg text-body-lg text-on-surface flex-1">Golgi Apparatus</span>
                                <span className="material-symbols-outlined text-error fill-1">cancel</span>
                            </div>
                            <div className="w-full flex items-center p-md rounded-lg border-2 border-secondary-container bg-secondary-fixed text-left shadow-[0_10px_30px_rgba(124,77,255,0.05)]">
                                <div className="w-10 h-10 rounded flex items-center justify-center bg-secondary-container text-on-primary font-button text-button mr-md">C</div>
                                <span className="font-body-lg text-body-lg text-on-surface flex-1 font-semibold">Mitochondria</span>
                                <span className="material-symbols-outlined text-secondary-container fill-1">check_circle</span>
                            </div>
                        </div>
                        <div className="mt-lg p-lg bg-primary-fixed rounded-xl border border-inverse-primary shadow-sm">
                            <div className="flex items-start gap-md">
                                <div className="p-sm bg-primary-container rounded-full text-on-primary mt-xs">
                                    <span className="material-symbols-outlined text-[20px] fill-1">lightbulb</span>
                                </div>
                                <div>
                                    <h4 className="font-button text-button text-primary-container mb-xs uppercase tracking-wider">Explanation</h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Mitochondria generate most of the cell's supply of ATP. The Golgi apparatus is primarily involved in modifying, sorting, and packaging proteins.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-xl">
                            <button onClick={() => navigate('/quiz-results')} className="w-full py-md bg-secondary-container text-on-secondary rounded-lg font-button text-button shadow-[0_10px_30px_rgba(124,77,255,0.2)] hover:bg-secondary hover:-translate-y-[1px] transition-all duration-200 flex justify-center items-center gap-xs">
                                Next Question
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </div>
                    </main>
                </div>
            );
        };
