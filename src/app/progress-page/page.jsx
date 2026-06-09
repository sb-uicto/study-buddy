'use client'
import { usePathname } from "next/navigation"

export default function ProgressPage(){
            return (
                <div className="bg-background text-on-background font-body-md antialiased pb-24 md:pb-0">
                    <TopAppBar hideBack />
                    <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg pt-lg pb-xl space-y-xl">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
                            <div>
                                <h1 className="font-h1 text-h1 text-primary-container">Your Progress</h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Track your study momentum and readiness.</p>
                            </div>
                            <button className="bg-secondary-container text-white px-lg py-sm rounded-lg font-button text-button shadow-[0_10px_30px_rgba(124,77,255,0.1)]">Download Report</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg">
                            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-lg border border-[#E8EAF6] shadow-[0_4px_20px_rgba(26,35,126,0.05)] flex flex-col items-center justify-center relative overflow-hidden">
                                <h2 className="font-h3 text-h3 text-on-surface absolute top-lg left-lg">Readiness Score</h2>
                                <div className="relative w-48 h-48 mt-xl flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle className="text-secondary-fixed opacity-50" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="8"></circle>
                                        <circle className="text-secondary-container" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" strokeWidth="8"></circle>
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="font-h1 text-h1 text-primary-container">85</span>
                                        <span className="font-label-caps text-label-caps text-on-surface-variant">Very Good</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-lg border border-[#E8EAF6] shadow-[0_4px_20px_rgba(26,35,126,0.05)]">
                                <div className="flex justify-between items-center mb-md">
                                    <h2 className="font-h3 text-h3 text-on-surface">Study Streak</h2>
                                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-caps text-label-caps px-sm py-xs rounded-full">14 Days Fire</span>
                                </div>
                                <div className="grid grid-cols-7 gap-xs text-center font-body-md text-body-md">
                                    {['M','T','W','T','F','S','S'].map(d => <div key={d} className="text-on-surface-variant text-sm py-xs">{d}</div>)}
                                    {Array.from({length: 14}).map((_, i) => (
                                        <div key={i} className={`py-sm rounded-md font-bold ${i === 11 ? 'bg-secondary-container text-white' : 'bg-secondary-fixed text-on-secondary-fixed-variant'}`}>{i+1}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                    <FloatingAI />
                    <BottomNavBar />
                </div>
            );
        };
