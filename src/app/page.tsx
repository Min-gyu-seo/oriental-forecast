import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-8 overflow-hidden">
      {/* 오행 배경 이미지: 가운데, 크게, 흐릿·반투명, 스크롤해도 고정 */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,70rem)] h-[min(80vh,50rem)] bg-contain bg-center bg-no-repeat opacity-25 blur-[6px]"
          style={{ backgroundImage: "url(/five-elements-bg.png)" }}
        />
      </div>

      <div className="relative z-10 w-full flex justify-center pt-16">
        <h1 className="text-[#2D2D2D] text-5xl font-semibold text-center leading-tight">
          관계를 알아보는
          <br />
          심리 궁합
        </h1>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-md px-4 -mt-16">
        <div className="w-full py-6 px-6 text-[#2D2D2D] text-[17px] leading-relaxed text-center bg-white border-[3px] border-[#2D2D2D]/40 rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)]">
          서양에서는 &apos;나&apos;를 독립적인 존재로 인식합니다. 그러나 동양에서는 &apos;나&apos;를 타인과의 관계 속에서 존재하는 것으로 인식합니다.
          <br />
          이 차이점에서 시작한 명리학 기반의 성격검사 테스트를 무료로 체험해 보세요.
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 mt-auto mb-32">
        <Link
          href="/select"
          className="px-8 py-4 text-lg font-semibold text-[#2D2D2D] bg-white rounded-xl hover:bg-[#F5F3ED] transition-colors shadow-sm border border-[#E8E5DD] sparkle-button text-center"
        >
          우리의 유형 알아보기
        </Link>
      </div>

      <a
        href="https://www.instagram.com/orientalforecast/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity rounded-lg"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="url(#instagram-gradient)"
          />
        </svg>
      </a>
    </main>
  );
}
