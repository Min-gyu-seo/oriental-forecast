import type { Question, QuestionType } from "./questions";
import type { Answers } from "./getTendency";

/**
 * 십간별 점수 계산 (갑, 을, 병, 정, 무, 기, 경, 신, 임, 계)
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
