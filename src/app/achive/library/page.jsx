'use client'

export default function library() {
            return (
                <div className="bg-background text-on-background min-h-screen pb-[80px] md:pb-0">
                    <TopAppBar hideBack />
                    <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-lg space-y-xl">
                        <section className="space-y-md">
                            <h1 className="font-h1 text-h1 text-on-surface">Course Library</h1>
                            <div className="relative w-full max-w-2xl">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                                <input className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container focus:border-transparent font-body-md text-body-md text-on-surface shadow-sm transition-all outline-none" placeholder="Search courses, departments, or keywords..." type="text"/>
                            </div>
                            <nav className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md overflow-x-auto pb-2">
                                <span className="whitespace-nowrap">Science Faculty</span>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="whitespace-nowrap">Computer Science</span>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="text-on-surface font-semibold whitespace-nowrap">Level 300</span>
                            </nav>
                        </section>
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                                {[
                                    { code: "CS301", title: "Data Structures & Algorithms", prof: "Prof. Alan Turing", prog: 65, color: "bg-secondary-container" },
                                    { code: "CS305", title: "Database Systems", prof: "Prof. Grace Hopper", prog: 12, color: "bg-tertiary-container" },
                                    { code: "CS310", title: "Operating Systems", prof: "Prof. Linus Torvalds", prog: 89, color: "bg-primary-container" }
                                ].map((c, i) => (
                                    <Link key={i} to="/course-detail" className="bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-[0_4px_20px_rgba(26,35,126,0.05)] hover:shadow-[0_10px_30px_rgba(124,77,255,0.1)] transition-all relative overflow-hidden flex flex-col h-full text-left">
                                        <div className={`absolute left-0 top-0 bottom-0 w-unit ${c.color}`}></div>
                                        <div className="flex justify-between items-start mb-4 pl-sm">
                                            <div className="flex-1 pr-4">
                                                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-1 block">{c.code}</span>
                                                <h3 className="font-h3 text-h3 text-on-surface line-clamp-2">{c.title}</h3>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-11 h-6 bg-secondary-container rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                                                <span className="text-[10px] text-on-surface-variant font-medium">Offline</span>
                                            </div>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 pl-sm">{c.prof}</p>
                                        <div className="mt-auto pl-sm space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="font-body-md text-on-surface-variant">Progress</span>
                                                <span className="font-body-md text-on-surface font-semibold">{c.prog}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-primary-fixed rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-secondary-container to-[#00B0FF] rounded-full" style={{width: `${c.prog}%`}}></div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </main>
                    <FloatingAI />
                    <BottomNavBar />
                </div>
            );
        };
