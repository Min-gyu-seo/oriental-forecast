import Image from "next/image";
import { TYPE_DISPLAY_NAMES, TYPE_CHARACTER_IMAGES } from "../test/questions";
import type { QuestionType } from "../test/questions";

/** 오행별 유형: 목·화·토·금·수 */
const ELEMENT_GROUPS: { element: string; types: [QuestionType, QuestionType] }[] = [
  { element: "나무", types: ["갑", "을"] },
  { element: "불", types: ["병", "정"] },
  { element: "흙", types: ["무", "기"] },
  { element: "쇠", types: ["경", "신"] },
  { element: "물", types: ["임", "계"] },
];

/** 속성별 캐릭터 영역 배경 - 위에서 내려오며 2/3 지점에서 완전히 fade out */
const ELEMENT_BG: Record<string, string> = {
  나무: "linear-gradient(to bottom, rgba(129, 199, 132, 0.12) 0%, rgba(129, 199, 132, 0) 66.67%)",
  불: "linear-gradient(to bottom, rgba(239, 154, 154, 0.12) 0%, rgba(239, 154, 154, 0) 66.67%)",
  흙: "linear-gradient(to bottom, rgba(161, 136, 127, 0.12) 0%, rgba(161, 136, 127, 0) 66.67%)",
  쇠: "linear-gradient(to bottom, rgba(158, 158, 158, 0.12) 0%, rgba(158, 158, 158, 0) 66.67%)",
  물: "linear-gradient(to bottom, rgba(100, 181, 246, 0.12) 0%, rgba(100, 181, 246, 0) 66.67%)",
};

/** 속성별 한 줄 설명 */
const ELEMENT_DESCRIPTIONS: Record<string, string> = {
  나무: "어질고 자비로운 마음을 바탕으로, 멈추지 않고 위로 뻗어 나가려는 생명력이 돋보입니다.",
  불: "주변을 환하게 밝히고 에너지를 뿜어내는 정열의 소유자로, 화끈하고 뒤끝 없는 모습이 매력적입니다.",
  흙: "변화 사이에서 균형을 잡는 완충 지대 역할을 하며, 묵직한 신뢰감을 줍니다.",
  쇠: "맺고 끊음이 확실하고 결단력이 강하며, 불필요한 것을 쳐내는 카리스마가 돋보입니다.",
  물: "지혜롭고 통찰력이 깊으며, 어디든 스며드는 유연함과 침투력을 가졌습니다.",
};

/** 갑=양목, 을=음목, ... */
const TYPE_DESCRIPTIONS: Record<QuestionType, string> = {
  갑: "양 기운의 나무",
  을: "음 기운의 나무",
  병: "양 기운의 불",
  정: "음 기운의 불",
  무: "양 기운의 흙",
  기: "음 기운의 흙",
  경: "양 기운의 쇠",
  신: "음 기운의 쇠",
  임: "양 기운의 물",
  계: "음 기운의 물",
};

/** 유형별 상세 설명 */
const TYPE_DETAIL_DESCRIPTIONS: Record<QuestionType, string> = {
  갑: "직진하는 리더. 굽히지 않는 기상과 강한 독립심을 가진 추진력의 아이콘.",
  을: "끈기 있는 외유내강. 부드러워 보이지만 어떤 환경에서도 살아남는 현실적인 적응왕.",
  병: "태양 같은 정열가. 숨김없이 밝고 화끈하며, 주변을 환하게 비추는 존재감의 중심.",
  정: "따뜻한 헌신가. 겉은 차분해 보여도 내면은 누구보다 뜨겁고 섬세한 예술가적 기질.",
  무: "든든한 중재자. 묵직한 존재감으로 타인의 고민을 들어주는 믿음직한 태산.",
  기: "내실 있는 실속파. 어머니처럼 포근하고 세심하며, 자기 사람을 챙기는 실질적인 관리자.",
  경: "강직한 원칙주의자. 시시비비를 명확히 가리고 의리를 중요시하는 불도저 같은 혁명가.",
  신: "섬세한 완벽주의자. 예리하고 깔끔하며, 자신만의 고유한 가치를 지키는 보석 같은 존재.",
  임: "지혜로운 전략가. 깊은 바다처럼 속을 알 수 없는 통찰력과 거대한 흐름을 만드는 기획자.",
  계: "유연한 아이디어맨. 끊임없이 샘솟는 생각과 임기응변, 상대의 마음을 파고드는 공감 능력자.",
};

export default function PersonalityPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-8 gap-8 overflow-hidden">
      {/* 오행 배경 이미지: 홈과 동일 조건 (가운데, 크게, 흐릿·반투명, 스크롤해도 고정) */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,70rem)] h-[min(80vh,50rem)] bg-contain bg-center bg-no-repeat opacity-25 blur-[6px]"
          style={{ backgroundImage: "url(/five-elements-bg.png)" }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2 text-center">
        성격유형
      </h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        {ELEMENT_GROUPS.map(({ element, types }) => (
          <div
            key={element}
            className="w-full rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] py-6 px-6 pb-8"
          >
            <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-2">
              {element}
            </h2>
            <p className="text-sm text-[#2D2D2D] opacity-90 text-center mb-6">
              {ELEMENT_DESCRIPTIONS[element]}
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {types.map((type) => (
                <div
                  key={type}
                  className="min-h-[420px] w-full max-w-[280px] rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden"
                >
                  <div
                    className="h-[250px] shrink-0 flex items-center justify-center border-b border-[#E8E5DD] p-3"
                    style={{ background: ELEMENT_BG[element] }}
                  >
                    <div className="relative w-full h-full min-h-[140px]">
                      <Image
                        src={TYPE_CHARACTER_IMAGES[type]}
                        alt={TYPE_DISPLAY_NAMES[type]}
                        fill
                        className="object-contain"
                        sizes="(max-width: 280px) 240px, 240px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col shrink-0 items-center text-center gap-2 py-4 px-5">
                    <span className="text-base font-bold text-[#2D2D2D]">
                      {TYPE_DISPLAY_NAMES[type]}
                    </span>
                    <p className="text-xs text-[#2D2D2D] opacity-90">
                      {TYPE_DESCRIPTIONS[type]}
                    </p>
                  </div>
                  <div className="flex-1 min-h-0 flex items-center justify-center px-5 pb-5">
                    <p className="text-sm text-[#2D2D2D] opacity-90 leading-relaxed text-center">
                      {TYPE_DETAIL_DESCRIPTIONS[type]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
