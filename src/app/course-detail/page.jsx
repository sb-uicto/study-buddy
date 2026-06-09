'use client'

export default function CourseDetail() {
            return (
                <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col pb-24 md:pb-0">
                    <TopAppBar />
                    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-xl py-lg">
                        <section className="mb-lg bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-indigo-50 p-md md:p-lg relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
                                <div>
                                    <h1 className="font-h1 text-h1 text-primary-container mb-xs">Advanced Macroeconomics</h1>
                                    <p className="font-body-md text-body-md text-surface-variant flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">person</span> Prof. J. Smith • ECO401
                                    </p>
                                </div>
                                <div className="w-full md:w-64">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-label-caps text-label-caps text-outline">Module Progress</span>
                                        <span className="font-label-caps text-label-caps text-secondary-container">75%</span>
                                    </div>
                                    <div className="h-2 w-full bg-primary-fixed rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-secondary-container to-[#00B0FF] w-[75%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                            <div className="lg:col-span-1 space-y-md">
                                <div className="bg-surface-container-lowest rounded-xl border border-indigo-50 shadow-[0_4px_20px_rgba(26,35,126,0.05)] p-md flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
                                    <button className="flex items-center gap-3 p-3 w-full rounded-lg bg-secondary-fixed text-on-secondary-fixed-variant transition-colors whitespace-nowrap">
                                        <span className="material-symbols-outlined fill-1">description</span>
                                        <span className="font-button text-button">Notes</span>
                                    </button>
                                    <button className="flex items-center gap-3 p-3 w-full rounded-lg text-outline hover:bg-surface-container-low transition-colors whitespace-nowrap">
                                        <span className="material-symbols-outlined">picture_as_pdf</span>
                                        <span className="font-button text-button">PDF Reader</span>
                                    </button>
                                    <button className="flex items-center gap-3 p-3 w-full rounded-lg text-outline hover:bg-surface-container-low transition-colors whitespace-nowrap">
                                        <span className="material-symbols-outlined">play_circle</span>
                                        <span className="font-button text-button">Lecture Video</span>
                                    </button>
                                    <hr className="border-surface-variant my-2 hidden lg:block"/>
                                    <Link to="/quiz-select" className="flex items-center justify-center lg:justify-start gap-3 p-3 w-full rounded-lg border border-primary-container text-primary-container hover:bg-primary-container hover:text-white transition-colors whitespace-nowrap mt-auto">
                                        <span className="material-symbols-outlined">timer</span>
                                        <span className="font-button text-button">Start Session</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="bg-surface-container-lowest rounded-xl border border-indigo-50 shadow-[0_4px_20px_rgba(26,35,126,0.05)] p-md md:p-xl h-full min-h-[500px]">
                                    <article className="prose prose-slate max-w-none">
                                        <h2 className="font-h2 text-h2 text-primary-container mb-4">Chapter 4: Monetary Policy Transmissions</h2>
                                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">The central bank influences the economy through various channels. The most direct is the interest rate channel, but expectations and asset prices also play crucial roles.</p>
                                        <div className="bg-surface-container-low border-l-4 border-secondary-container p-4 rounded-r-lg mb-6">
                                            <p className="font-body-md text-body-md text-on-surface m-0"><strong>Key Concept:</strong> The Taylor Rule proposes that the central bank should adjust interest rates in response to divergence of actual inflation rates from target inflation rates and actual GDP from potential GDP.</p>
                                        </div>
                                        <h3 className="font-h3 text-h3 text-tertiary-container mt-6 mb-3">The Channels</h3>
                                        <ul className="list-disc list-inside space-y-2 font-body-md text-body-md text-on-surface-variant mb-6">
                                            <li><strong>Interest Rate Channel:</strong> Policy rate changes affect short-term market rates.</li>
                                            <li><strong>Credit Channel:</strong> Affects bank lending volume and finance premiums.</li>
                                            <li><strong>Exchange Rate Channel:</strong> Affects currency value and net exports.</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                        </section>
                    </main>
                    <FloatingAI />
                    <BottomNavBar />
                </div>
            );
        };