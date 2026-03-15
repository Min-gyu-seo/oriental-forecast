import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "성격유형", href: "/personality" },
  { label: "관계유형", href: "/relationship" },
  { label: "궁합 계산기", href: "/job" },
  { label: "명리학", href: "/myeongri" },
] as const;

export default function TopBanner() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E5DD] bg-white/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <nav className="mx-auto flex max-w-4xl items-center gap-3 py-2 px-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:justify-items-center sm:gap-12 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center sm:justify-self-start" aria-label="홈">
          <Image
            src="/logo.png?v=2"
            alt="FORECAST Logo"
            width={88}
            height={88}
            className="object-contain w-11 h-11 sm:w-14 sm:h-14"
          />
        </Link>
        <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-center gap-3 overflow-x-auto py-1 sm:gap-8 sm:overflow-visible">
          <Link
            href="/"
            className="shrink-0 text-[15px] font-semibold text-[#2D2D2D] hover:text-[#C85D5D] transition-colors sm:text-lg whitespace-nowrap"
          >
            홈
          </Link>
          {MENU_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 text-[15px] font-semibold text-[#2D2D2D] hover:text-[#C85D5D] transition-colors sm:text-lg whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
        <div aria-hidden className="hidden w-14 shrink-0 sm:block sm:justify-self-end" />
      </nav>
    </header>
  );
}
