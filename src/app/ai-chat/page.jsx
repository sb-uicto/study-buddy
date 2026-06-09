'use client'
import { usePathname } from 'next/navigation'

const AIChat = () => {
            const navigate = useNavigate();
            return (
                <div className="bg-surface-dim min-h-screen flex items-center justify-center antialiased">
                    <main className="w-full h-screen md:w-[420px] md:h-[870px] md:max-h-[800px] bg-surface-container-lowest flex flex-col md:rounded-xl md:shadow-[0_10px_30px_rgba(124,77,255,0.15)] overflow-hidden relative">
                        <header className="flex items-center justify-between p-md border-b border-surface-variant bg-surface-container-lowest/95 backdrop-blur-sm z-10 shrink-0">
                            <button onClick={() => navigate(-1)} className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                            </button>
                            <div className="flex flex-col items-center">
                                <h2 className="font-h3 text-[18px] text-on-surface leading-tight">Study Buddy</h2>
                                <div className="flex items-center gap-xs mt-1">
                                    <span className="w-[6px] h-[6px] rounded-full bg-secondary-container"></span>
                                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">CS201 Context</span>
                                </div>
                            </div>
                            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                                <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                        </header>
                        <div className="flex-1 overflow-y-auto no-scrollbar p-md flex flex-col gap-lg bg-surface">
                            <div className="flex justify-center mt-sm mb-sm"><span className="font-label-caps text-[11px] text-outline uppercase bg-surface-container-highest px-3 py-1 rounded-full">Today, 2:45 PM</span></div>
                            <div className="flex justify-start items-end gap-sm w-full">
                                <div className="w-[32px] h-[32px] rounded-full bg-secondary-container flex items-center justify-center shrink-0 mb-1"><span className="material-symbols-outlined text-white text-[18px] fill-1">smart_toy</span></div>
                                <div className="bg-surface-container-lowest border border-surface-variant p-md rounded-xl rounded-bl-sm max-w-[85%] shadow-sm"><p className="font-body-md text-on-surface">Hi! I'm ready to help you with Data Structures. What are we focusing on today?</p></div>
                            </div>
                            <div className="flex justify-end items-end gap-sm w-full">
                                <div className="bg-primary-fixed border border-primary-fixed-dim p-md rounded-xl rounded-br-sm max-w-[85%] shadow-sm"><p className="font-body-md text-on-primary-fixed">Can you explain the main difference between an AVL tree and a Red-Black tree?</p></div>
                            </div>
                            <div className="flex justify-start items-end gap-sm w-full">
                                <div className="w-[32px] h-[32px] rounded-full bg-secondary-container flex items-center justify-center shrink-0 mb-1"><span className="material-symbols-outlined text-white text-[18px] fill-1">smart_toy</span></div>
                                <div className="bg-surface-container-lowest border border-surface-variant p-md rounded-xl rounded-bl-sm max-w-[88%] shadow-sm flex flex-col gap-md">
                                    <p className="font-body-md text-on-surface">AVL Trees are more strictly balanced (height diff ≤ 1). Red-Black trees have looser rules making inserts faster.</p>
                                    <div className="flex flex-wrap gap-xs pt-sm border-t border-surface-variant">
                                        <button className="inline-flex items-center gap-xs bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md border border-secondary-fixed-dim"><span className="material-symbols-outlined text-[14px]">description</span><span className="font-button text-[11px]">Lec 4: Balanced BSTs</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-md bg-surface-container-lowest border-t border-surface-variant flex flex-col gap-sm shrink-0 pb-safe">
                            <div className="flex items-end gap-sm relative">
                                <button className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-outline hover:bg-surface-container shrink-0 mb-[2px]"><span className="material-symbols-outlined text-[22px]">attach_file</span></button>
                                <div className="flex-1 bg-surface-container rounded-xl border border-outline-variant p-sm"><textarea className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md resize-none" placeholder="Ask a question..." rows="1"></textarea></div>
                                <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-secondary-container text-white shadow-md shrink-0"><span className="material-symbols-outlined text-[20px] ml-1 fill-1">send</span></button>
                            </div>
                            <p className="text-center font-label-caps text-[9px] text-outline normal-case">Study Buddy can make mistakes. Verify important info.</p>
                        </div>
                    </main>
                </div>
            );
        };
