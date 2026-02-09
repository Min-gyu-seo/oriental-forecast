import {
  TEN_GOD_JOB_TITLES,
  type TenGodName,
} from "../test/calculateTenGods";

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

export default function RelationshipPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 gap-8">
      <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2 text-center">
        관계유형
      </h1>
      <p className="text-[#2D2D2D] font-nanum-myeongjo text-base opacity-90 text-center max-w-xl mb-6 leading-relaxed">
        어떤 사람과 관계를 맺는 지에 따라서 다양한 성향이 드러나게 됩니다. 상대방과 함께 있을 때 어떤 직업을 가지는지 알아보세요.
      </p>
      <hr className="w-full max-w-4xl border-[#E8E5DD] mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-4xl">
        {TEN_GODS.map((name) => (
          <div
            key={name}
            className="py-5 px-4 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-[#2D2D2D]/15 shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] text-center"
          >
            <p className="text-[#2D2D2D] font-nanum-myeongjo font-semibold text-xl mb-2 leading-snug">
              {TEN_GOD_JOB_TITLES[name]}
            </p>
            <p className="text-[#2D2D2D] font-nanum-myeongjo text-sm opacity-80">
              {name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
