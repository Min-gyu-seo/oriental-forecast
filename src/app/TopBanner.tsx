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
      <nav className="mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center gap-10 py-2 pl-2 pr-4 sm:gap-20 sm:pl-3 sm:pr-6">
        <Link href="/" className="flex w-fit items-center -ml-0.5" aria-label="홈">
          <Image
            src="/logo.png?v=2"
            alt="FORECAST Logo"
            width={88}
            height={88}
            className="object-contain w-12 h-12 sm:w-14 sm:h-14"
          />
        </Link>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 min-w-0">
          <Link
            href="/"
            className="shrink-0 text-base font-semibold text-[#2D2D2D] hover:text-[#C85D5D] transition-colors sm:text-lg whitespace-nowrap"
          >
            홈
          </Link>
          {MENU_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 text-base font-semibold text-[#2D2D2D] hover:text-[#C85D5D] transition-colors sm:text-lg whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
        <div aria-hidden className="w-12 sm:w-14" />
      </nav>
    </header>
  );
}
