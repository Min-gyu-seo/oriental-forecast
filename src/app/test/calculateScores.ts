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
