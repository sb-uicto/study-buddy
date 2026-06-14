export default function dashboard() {
            return (
                <div className="min-h-screen flex flex-col pb-20 md:pb-0">
                    <TopAppBar hideBack title="Study Buddy" />
                    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-lg py-md md:py-xl flex flex-col gap-xl">
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-variant shadow-[0_4px_20px_rgba(26,35,126,0.05)] flex items-center justify-between">
                                <div>
                                    <h2 className="font-h3 text-h3 text-on-surface mb-xs">Readiness</h2>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Your focus score today</p>
                                </div>
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-primary-fixed stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                                        <path className="text-secondary-container stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="78, 100" strokeWidth="3"></path>
                                    </svg>
                                    <span className="font-h2 text-h2 text-primary-container relative z-10">78<span className="text-body-md text-on-surface-variant">%</span></span>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-variant shadow-[0_4px_20px_rgba(26,35,126,0.05)] flex items-center justify-between">
                                <div>
                                    <h2 className="font-h3 text-h3 text-on-surface mb-xs">Active Streak</h2>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Keep the momentum going!</p>
                                </div>
                                <div className="flex items-center gap-sm">
                                    <span className="font-h1 text-h1 text-primary-container">12</span>
                                    <span className="font-body-md text-body-md text-on-surface-variant">days</span>
                                    <span className="text-2xl ml-xs">🔥</span>
                                </div>
                            </div>
                        </section>
                        <section className="flex justify-center md:justify-start">
                            <Link to="/course-detail" className="bg-secondary-container text-on-secondary font-button text-button py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(124,77,255,0.2)] hover:bg-secondary transition-colors flex items-center gap-sm w-full md:w-auto justify-center">
                                <span className="material-symbols-outlined fill-1">play_arrow</span>
                                Continue Studying
                            </Link>
                        </section>
                        <section>
                            <h2 className="font-h2 text-h2 text-on-surface mb-md">Current Courses</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                                {[
                                    { title: "Data Structures", prof: "Prof. Alan Turing", prog: 65, color: "bg-secondary-container", next: "Binary Trees" },
                                    { title: "Macroeconomics", prof: "Prof. Adam Smith", prog: 30, color: "bg-[#00B0FF]", next: "Fiscal Policy" },
                                    { title: "Organic Chemistry", prof: "Prof. Marie Curie", prog: 85, color: "bg-[#00E676]", next: "Aldehydes & Ketones" }
                                ].map((c, i) => (
                                    <div key={i} className="bg-surface-container-lowest rounded-xl flex overflow-hidden border border-surface-variant shadow-[0_4px_20px_rgba(26,35,126,0.05)] transition-transform hover:-translate-y-1">
                                        <div className={`w-1 shrink-0 ${c.color}`}></div>
                                        <div className="p-md flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-sm">
                                                <h3 className="font-h3 text-h3 text-on-surface line-clamp-1">{c.title}</h3>
                                                <span className="material-symbols-outlined text-outline">more_vert</span>
                                            </div>
                                            <p className="font-body-md text-body-md text-on-surface-variant mb-md">{c.prof}</p>
                                            <div className="mt-auto">
                                                <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant mb-unit">
                                                    <span>Progress</span>
                                                    <span>{c.prog}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-primary-fixed rounded-full overflow-hidden">
                                                    <div className={`h-full ${c.color} rounded-full`} style={{width: `${c.prog}%`}}></div>
                                                </div>
                                                <div className="mt-sm pt-sm border-t border-surface-variant flex items-center gap-unit text-on-surface-variant font-body-md text-body-md">
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    <span className="line-clamp-1 text-sm">Next: {c.next}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                    <FloatingAI />
                    <BottomNavBar />
                </div>
            );
        };
