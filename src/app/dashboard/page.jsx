import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col pb-24 md:pb-0">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6">
        {/* Course Header Hero */}
        <section className="mb-6 bg-surface-container-lowest rounded-xl shadow-sm border border-indigo-50 p-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900 mb-1">Advanced Macroeconomics</h1>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">person</span> Prof. J. Smith • ECO401
              </p>
            </div>
            
            <div className="w-full md:w-64">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Module Progress</span>
                <span className="text-xs font-semibold text-indigo-600">75%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-[#00B0FF] w-[75%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Workspace Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl border border-indigo-50 shadow-sm p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              <button className="flex items-center gap-3 p-3 w-full rounded-lg bg-indigo-50 text-indigo-700 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined fill-1">description</span>
                <span className="font-medium">Notes</span>
              </button>
              <button className="flex items-center gap-3 p-3 w-full rounded-lg text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined">picture_as_pdf</span>
                <span className="font-medium">PDF Reader</span>
              </button>
              <button className="flex items-center gap-3 p-3 w-full rounded-lg text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined">play_circle</span>
                <span className="font-medium">Lecture Video</span>
              </button>
              
              <hr className="border-gray-100 my-2 hidden lg:block"/>
              
              <Link href="/active-quiz" className="flex items-center justify-center lg:justify-start gap-3 p-3 w-full rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors whitespace-nowrap mt-auto">
                <span className="material-symbols-outlined">timer</span>
                <span className="font-medium">Start Session</span>
              </Link>
            </div>
          </div>

          {/* Core Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-indigo-50 shadow-sm p-6 min-h-[500px]">
              <article className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold text-indigo-950 mb-4">Chapter 4: Monetary Policy Transmissions</h2>
                <p className="text-gray-700 mb-4">The central bank influences the economy through various channels. The most direct is the interest rate channel, but expectations and asset prices also play crucial roles.</p>
                
                <div className="bg-indigo-50/50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-6">
                  <p className="text-sm text-gray-900 m-0"><strong>Key Concept:</strong> The Taylor Rule proposes that the central bank should adjust interest rates in response to divergence of actual inflation rates from target inflation rates and actual GDP from potential GDP.</p>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">The Channels</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li><strong>Interest Rate Channel:</strong> Policy rate changes affect short-term market rates.</li>
                  <li><strong>Credit Channel:</strong> Affects bank lending volume and finance premiums.</li>
                  <li><strong>Exchange Rate Channel:</strong> Affects currency value and net exports.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action AI Button */}
      <Link href="/ai-chat" className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105 z-40">
        <span className="material-symbols-outlined text-2xl fill-1">smart_toy</span>
      </Link>
    </div>
  );
}