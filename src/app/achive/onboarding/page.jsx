'use client'
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function onboarding() {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState(0);
    const faculties = [
        { id: 0, name: "Engineering", desc: "Building the future.", icon: "engineering" },
        { id: 1, name: "Science", desc: "Discovering the unknown.", icon: "science" },
        { id: 2, name: "Arts", desc: "Expressing creativity.", icon: "palette" },
        { id: 3, name: "Business", desc: "Managing the world.", icon: "business_center" }
    ];

    return (
        <div className="bg-background min-h-screen flex items-center justify-center p-margin-mobile">
            <main className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(26,35,126,0.05)] border border-[#E8EAF6] overflow-hidden flex flex-col min-h-[600px]">
                <div className="px-lg pt-xl pb-md text-center">
                    <h1 className="font-h2 text-h2 text-primary mb-sm">Let's get started</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">Step 1 of 3: Select your Faculty</p>
                </div>
                <div className="px-lg mb-lg">
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-secondary-container to-[rgb(0,176,255)] h-full w-1/3 rounded-full"></div>
                    </div>
                </div>
                <div className="flex-grow px-lg pb-xl overflow-y-auto space-y-md">
                    {faculties.map((f) => (
                        <button key={f.id} onClick={() => setSelected(f.id)} className={`w-full flex items-center p-md bg-surface-container-lowest border rounded-lg transition-all duration-200 text-left relative group ${selected === f.id ? 'border-secondary-container shadow-[0_10px_30px_rgba(124,77,255,0.1)]' : 'border-[#E8EAF6]'}`}>
                        {selected === f.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container rounded-l-lg"></div>}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-md ${selected === f.id ? 'bg-secondary-fixed/50 text-secondary-container' : 'bg-surface-container-low text-on-surface-variant group-hover:text-secondary-container'}`}>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: `'FILL' ${selected === f.id ? 1 : 0}`}}>{f.icon}</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className={`font-h3 text-body-lg mb-1 ${selected === f.id ? 'text-primary' : 'text-on-surface'}`}>{f.name}</h3>
                                <p className="font-body-md text-sm text-on-surface-variant">{f.desc}</p>
                            </div>
                            <div className={selected === f.id ? 'text-secondary-container' : 'text-surface-container-high'}>
                                <span className="material-symbols-outlined">{selected === f.id ? 'check_circle' : 'radio_button_unchecked'} </span>
                            </div>
                        </button>
                    ))};
                </div>
                <div className="p-lg bg-surface-container-lowest border-t border-surface-container-high mt-auto">
                    <button onClick={() => router.push('/dashboard')} className="w-full py-md px-lg bg-secondary-container text-white font-button text-button rounded-lg shadow-md hover:bg-[#651fff] transition-all duration-200 flex items-center justify-center">
                                Continue
                        <span className="material-symbols-outlined ml-sm text-sm">arrow_forward</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

