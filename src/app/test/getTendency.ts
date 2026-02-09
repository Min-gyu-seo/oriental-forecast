import type { Question, QuestionType } from "./questions";

/** 문항별 답변 (문항 id → 1~7 점수) */
export type Answers = Record<string, number>;

/**
 * 유형별 점수 합을 구한 뒤, 최대 점수인 유형(들)을 반환.
 * 동점이면 모두 반환.
 */
export function getTendencyTypes(
  questions: Question[],
  answers: Answers
): QuestionType[] {
  const typeSums: Partial<Record<QuestionType, number>> = {};

  for (const q of questions) {
    const score = answers[q.id] ?? 0;
    typeSums[q.type] = (typeSums[q.type] ?? 0) + score;
  }

  const types = Object.keys(typeSums) as QuestionType[];
  if (types.length === 0) return [];

  const maxSum = Math.max(...types.map((t) => typeSums[t] ?? 0));
  return types.filter((t) => (typeSums[t] ?? 0) === maxSum);
}
