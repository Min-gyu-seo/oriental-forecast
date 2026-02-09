import type { QuestionType } from "./questions";

/** 오행: 목·화·토·금·수 */
type Element = "목" | "화" | "토" | "금" | "수";

/** 천간 데이터 (오행 + 음양). 한글 천간 기준 */
const heavenlyStems: Record<
  QuestionType,
  { element: Element; yinYang: "Yang" | "Yin" }
> = {
  갑: { element: "목", yinYang: "Yang" },
  을: { element: "목", yinYang: "Yin" },
  병: { element: "화", yinYang: "Yang" },
  정: { element: "화", yinYang: "Yin" },
  무: { element: "토", yinYang: "Yang" },
  기: { element: "토", yinYang: "Yin" },
  경: { element: "금", yinYang: "Yang" },
  신: { element: "금", yinYang: "Yin" },
  임: { element: "수", yinYang: "Yang" },
  계: { element: "수", yinYang: "Yin" },
};

/** 오행 상생: 내가 상대를 생함 (목→화, 화→토, 토→금, 금→수, 수→목) */
function isProducing(myElement: Element, youElement: Element): boolean {
  const producing: Record<Element, Element> = {
    목: "화",
    화: "토",
    토: "금",
    금: "수",
    수: "목",
  };
  return producing[myElement] === youElement;
}

/** 오행 상극: 내가 상대를 극함 (목극토, 화극금, 토극수, 금극목, 수극화) */
function isControlling(myElement: Element, youElement: Element): boolean {
  const controlling: Record<Element, Element> = {
    목: "토",
    화: "금",
    토: "수",
    금: "목",
    수: "화",
  };
  return controlling[myElement] === youElement;
}

/** 십신 종류 */
export type TenGodName =
  | "비견"
  | "겁재"
  | "식신"
  | "상관"
  | "편재"
  | "정재"
  | "편관"
  | "정관"
  | "편인"
  | "정인";

/** 십신별 직업(별명) */
export const TEN_GOD_JOB_TITLES: Record<TenGodName, string> = {
  비견: "마이웨이 리더",
  겁재: "게임 체인저",
  식신: "장인",
  상관: "아이디어 뱅크",
  편재: "기회 포착자",
  정재: "자산가",
  편관: "해결사",
  정관: "FM 가이드",
  편인: "영감의 술사",
  정인: "지식의 수호자",
};

/**
 * 내 성향(me)과 상대방 성향(you)을 받아 십신 관계를 도출합니다.
 * @returns 십신 이름 (비견, 겁재, 식신, 상관, 편재, 정재, 편관, 정관, 편인, 정인) 또는 null
 */
export function calculateTenGods(
  me: QuestionType,
  you: QuestionType
): TenGodName | null {
  const myData = heavenlyStems[me];
  const youData = heavenlyStems[you];
  const sameYinYang = myData.yinYang === youData.yinYang;

  // 같은 오행: 비견(같은 음양) / 겁재(다른 음양)
  if (myData.element === youData.element) {
    return sameYinYang ? "비견" : "겁재";
  }

  // 내가 상대를 생함: 식신(같은 음양) / 상관(다른 음양)
  if (isProducing(myData.element, youData.element)) {
    return sameYinYang ? "식신" : "상관";
  }

  // 내가 상대를 극함: 편재(같은 음양) / 정재(다른 음양)
  if (isControlling(myData.element, youData.element)) {
    return sameYinYang ? "편재" : "정재";
  }

  // 상대가 나를 극함: 편관(같은 음양) / 정관(다른 음양)
  if (isControlling(youData.element, myData.element)) {
    return sameYinYang ? "편관" : "정관";
  }

  // 상대가 나를 생함: 편인(같은 음양) / 정인(다른 음양)
  if (isProducing(youData.element, myData.element)) {
    return sameYinYang ? "편인" : "정인";
  }

  return null;
}
