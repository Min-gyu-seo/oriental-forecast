"use client";

import { MYEONGRI_HTML } from "./myeongri-content";

const contentClass =
  "font-malgun prose prose-slate max-w-none text-[#2D2D2D] text-[11pt] [&_.myeongri-p]:mb-3 [&_.myeongri-p]:leading-relaxed [&_strong]:font-bold [&_.myeongri-ul]:my-3 [&_.myeongri-ul]:list-disc [&_.myeongri-ul]:pl-6 [&_.myeongri-ul]:space-y-1 [&_.myeongri-ul_ul]:mt-1 [&_.myeongri-ul_ul]:pl-5";

export default function MyeongriPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-6 sm:p-8 overflow-hidden">
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,70rem)] h-[min(80vh,50rem)] bg-contain bg-center bg-no-repeat opacity-25 blur-[6px]"
          style={{ backgroundImage: "url(/five-elements-bg.png)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center">
          명리학 개요
        </h1>
        <div
          className={`rounded-2xl bg-white/95 shadow-[0_4px_14px_rgba(0,0,0,0.08)] p-6 sm:p-8 ${contentClass}`}
          dangerouslySetInnerHTML={{ __html: MYEONGRI_HTML }}
        />
      </div>
    </main>
  );
}
