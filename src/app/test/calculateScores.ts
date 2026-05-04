import type { Question, QuestionType } from "./questions";
import type { Answers } from "./getTendency";
import { calculateTenGods } from "./calculateTenGods";

const ALL_TYPES: QuestionType[] = [
  "갑", "을", "병", "정", "무", "기", "경", "신", "임", "계",
];

/** 유형 T에 대해 정재/정관 관계인 유형 찾기 (T가 일간일 때) */
function getJeongJaeAndJeongGwan(type: QuestionType): {
  정재: QuestionType | null;
  정관: QuestionType | null;
} {
  let 정재: QuestionType | null = null;
  let 정관: QuestionType | null = null;
  for (const other of ALL_TYPES) {
    const rel = calculateTenGods(type, other);
    if (rel === "정재") 정재 = other;
    if (rel === "정관") 정관 = other;
  }
  return { 정재, 정관 };
}

/** 1~7 응답에 대한 역배점 (8 - score) */
function inverseScore(score: number): number {
  return 8 - score;
}

/**
 * 십간별 점수 계산 (갑, 을, 병, 정, 무, 기, 경, 신, 임, 계)
 * - 질문 유형에는 응답 점수 그대로 부여
 * - 해당 유형과 정재/정관 관계인 유형에는 0.5 * 역배점 추가
 */
export function getTenStemScores(
  questions: Question[],
  answers: Answers
): Record<QuestionType, number> {
  const scores: Record<QuestionType, number> = {
    갑: 0,
    을: 0,
    병: 0,
    정: 0,
    무: 0,
    기: 0,
    경: 0,
    신: 0,
    임: 0,
    계: 0,
  };

  for (const q of questions) {
    const score = answers[q.id] ?? 0;
    // 답하지 않은 문항(0)은 점수/보너스 모두 반영하지 않음
    if (score < 1 || score > 7) continue;

    scores[q.type] = (scores[q.type] ?? 0) + score;

    const 역배점 = inverseScore(score);
    const bonus = 0.5 * 역배점;
    const { 정재, 정관 } = getJeongJaeAndJeongGwan(q.type);
    if (정재) scores[정재] = (scores[정재] ?? 0) + bonus;
    if (정관) scores[정관] = (scores[정관] ?? 0) + bonus;
  }

  return scores;
}

/**
 * 십간별 점수 계산 (심플) — 질문 유형에 응답 점수만 그대로 부여. 정재/정관 보너스 없음.
 */
export function getTenStemScoresSimple(
  questions: Question[],
  answers: Answers
): Record<QuestionType, number> {
  const scores: Record<QuestionType, number> = {
    갑: 0,
    을: 0,
    병: 0,
    정: 0,
    무: 0,
    기: 0,
    경: 0,
    신: 0,
    임: 0,
    계: 0,
  };

  for (const q of questions) {
    const score = answers[q.id] ?? 0;
    if (score < 1 || score > 7) continue;
    scores[q.type] = (scores[q.type] ?? 0) + score;
  }

  return scores;
}

/**
 * 오행별 점수 계산 (목=갑+을, 화=병+정, 토=무+기, 금=경+신, 수=임+계)
 */
export function getFiveElementScores(
  tenStemScores: Record<QuestionType, number>
): Record<"목" | "화" | "토" | "금" | "수", number> {
  return {
    목: tenStemScores.갑 + tenStemScores.을,
    화: tenStemScores.병 + tenStemScores.정,
    토: tenStemScores.무 + tenStemScores.기,
    금: tenStemScores.경 + tenStemScores.신,
    수: tenStemScores.임 + tenStemScores.계,
  };
}

/** 한 문항에서 특정 천간이 받을 수 있는 직접·보너스 점수의 이론상 최소 (응답 1~7 가정) */
function minContributionFromQuestion(q: Question, stem: QuestionType): number {
  const T = q.type;
  if (stem === T) return 1;
  const { 정재, 정관 } = getJeongJaeAndJeongGwan(T);
  if (정재 === stem || 정관 === stem) return 0.5;
  return 0;
}

/** 한 문항에서 특정 천간이 받을 수 있는 직접·보너스 점수의 이론상 최대 */
function maxContributionFromQuestion(q: Question, stem: QuestionType): number {
  const T = q.type;
  if (stem === T) return 7;
  const { 정재, 정관 } = getJeongJaeAndJeongGwan(T);
  if (정재 === stem || 정관 === stem) return 3.5;
  return 0;
}

/**
 * 주어진 문항 세트에서 십간·오행 점수가 가질 수 있는 이론상 전역 최소·최대(그래프 스케일용).
 * - 십간: 각 천간별 합산 최소·최대 후, 축 전체에 쓸 min = 그중 최소, max = 그중 최대
 * - 오행: (천간1 최소+천간2 최소) 등 하한·상한 후 동일
 */
export function getTheoreticalScoreBoundsForQuestions(questions: Question[]): {
  tenStem: { min: number; max: number };
  fiveElement: { min: number; max: number };
} {
  const perStemMin: Record<QuestionType, number> = {
    갑: 0,
    을: 0,
    병: 0,
    정: 0,
    무: 0,
    기: 0,
    경: 0,
    신: 0,
    임: 0,
    계: 0,
  };
  const perStemMax: Record<QuestionType, number> = {
    갑: 0,
    을: 0,
    병: 0,
    정: 0,
    무: 0,
    기: 0,
    경: 0,
    신: 0,
    임: 0,
    계: 0,
  };

  for (const q of questions) {
    for (const stem of ALL_TYPES) {
      perStemMin[stem] += minContributionFromQuestion(q, stem);
      perStemMax[stem] += maxContributionFromQuestion(q, stem);
    }
  }

  const tenStemValuesMin = Object.values(perStemMin);
  const tenStemValuesMax = Object.values(perStemMax);
  let tenMin = Math.min(...tenStemValuesMin);
  let tenMax = Math.max(...tenStemValuesMax);
  if (tenMax <= tenMin) {
    tenMin = 0;
    tenMax = 1;
  }

  const lower목 = perStemMin.갑 + perStemMin.을;
  const upper목 = perStemMax.갑 + perStemMax.을;
  const lower화 = perStemMin.병 + perStemMin.정;
  const upper화 = perStemMax.병 + perStemMax.정;
  const lower토 = perStemMin.무 + perStemMin.기;
  const upper토 = perStemMax.무 + perStemMax.기;
  const lower금 = perStemMin.경 + perStemMin.신;
  const upper금 = perStemMax.경 + perStemMax.신;
  const lower수 = perStemMin.임 + perStemMin.계;
  const upper수 = perStemMax.임 + perStemMax.계;

  const fiveMins = [lower목, lower화, lower토, lower금, lower수];
  const fiveMaxs = [upper목, upper화, upper토, upper금, upper수];
  let fiveMin = Math.min(...fiveMins);
  let fiveMax = Math.max(...fiveMaxs);
  if (fiveMax <= fiveMin) {
    fiveMin = 0;
    fiveMax = 1;
  }

  return {
    tenStem: { min: tenMin, max: tenMax },
    fiveElement: { min: fiveMin, max: fiveMax },
  };
}
