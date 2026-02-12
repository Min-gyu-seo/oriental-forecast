import type { Question, QuestionType } from "./questions";
import { getTenStemScores } from "./calculateScores";

/** 문항별 답변 (문항 id → 1~7 점수) */
export type Answers = Record<string, number>;

/**
 * 유형별 점수 합을 구한 뒤, 최대 점수인 유형(들)을 반환.
 * 동점이면 모두 반환.
 * (getTenStemScores와 동일한 로직: 본 유형 점수 + 정재/정관에 0.5*역배점)
 */
export function getTendencyTypes(
  questions: Question[],
  answers: Answers
): QuestionType[] {
  const scores = getTenStemScores(questions, answers);
  const types = (Object.keys(scores) as QuestionType[]).filter(
    (t) => scores[t] > 0
  );
  if (types.length === 0) return [];

  const maxSum = Math.max(...types.map((t) => scores[t]));
  return types.filter((t) => scores[t] === maxSum);
}
