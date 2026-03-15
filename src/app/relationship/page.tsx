import Link from "next/link";
import { type TenGodName } from "../test/calculateTenGods";

const TEN_GODS: TenGodName[] = [
  "비견",
  "겁재",
  "식신",
  "상관",
  "편재",
  "정재",
  "편관",
  "정관",
  "편인",
  "정인",
];

/** 십신별 별명 */
const TEN_GOD_NICKNAMES: Record<TenGodName, string> = {
  비견: "소울메이트",
  겁재: "발전적 라이벌",
  식신: "성과물 창작자",
  상관: "자유로운 표현가",
  편재: "신사업 개척자",
  정재: "안정적 기획자",
  편관: "전투적 수호자",
  정관: "원칙적 운영자",
  편인: "직관적 동기부여자",
  정인: "지혜로운 보호자",
};

export default function RelationshipPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 gap-8">
      <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2 text-center">
        관계유형
      </h1>
      <p className="text-[#2D2D2D] font-nanum-myeongjo text-base opacity-90 text-center max-w-xl mb-6 leading-relaxed">
        어떤 사람과 관계를 맺는 지에 따라서 다양한 성향이 드러나게 됩니다. 상대방과 함께 있을 때 어떤 성향을 갖게 되는지 알아보세요.
      </p>
      <hr className="w-full max-w-4xl border-[#E8E5DD] mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-4xl">
        {TEN_GODS.map((name) => {
          const detailHref =
            name === "비견" ? "/relationship/biyeon" : name === "겁재" ? "/relationship/geopjae" : name === "식신" ? "/relationship/siksin" : name === "상관" ? "/relationship/sangwan" : name === "편재" ? "/relationship/pyeonjae" : name === "정재" ? "/relationship/jeongjae" : name === "편관" ? "/relationship/pyeongwan" : name === "정관" ? "/relationship/jeonggwan" : name === "편인" ? "/relationship/pyeonin" : name === "정인" ? "/relationship/jeongin" : null;
          const isClickable = detailHref != null;
          const boxClass =
            "py-5 px-4 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-[#2D2D2D]/15 shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] text-center" +
            (isClickable ? " cursor-pointer hover:bg-white/50 transition-colors" : "");
          const content = (
            <>
              <p className="text-[#2D2D2D] font-nanum-myeongjo font-semibold text-xl mb-2 leading-snug">
                {name}
              </p>
              <p className="text-[#2D2D2D] font-nanum-myeongjo text-sm opacity-80">
                {TEN_GOD_NICKNAMES[name]}
              </p>
            </>
          );
          return detailHref ? (
            <Link key={name} href={detailHref} className={boxClass}>
              {content}
            </Link>
          ) : (
            <div key={name} className={boxClass}>
              {content}
            </div>
          );
        })}
      </div>
    </main>
  );
}
