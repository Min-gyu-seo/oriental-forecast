import Link from "next/link";

export default function SelectPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h2 className="text-xl font-semibold text-[#2D2D2D] mb-2">
        궁합 유형 선택
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/select/lover"
          className="px-8 py-4 text-lg font-semibold text-[#2D2D2D] bg-white rounded-xl hover:bg-[#F5F3ED] transition-colors shadow-sm border border-[#E8E5DD] text-center"
        >
          연인과의 궁합
        </Link>
        <Link
          href="/select/friend"
          className="px-8 py-4 text-lg font-semibold text-[#2D2D2D] bg-white rounded-xl hover:bg-[#F5F3ED] transition-colors shadow-sm border border-[#E8E5DD] text-center"
        >
          친구와의 궁합
        </Link>
      </div>
    </main>
  );
}
