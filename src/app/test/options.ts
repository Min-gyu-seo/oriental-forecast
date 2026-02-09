/**
 * 7점 척도. 동그라미는 7개, 화면에는 양 끝만 글자로 노출 (매우 아니다 / 매우 그렇다).
 */
export const ANSWER_OPTIONS = [
  { value: 1, label: "매우 아니다" },
  { value: 2, label: "" },
  { value: 3, label: "" },
  { value: 4, label: "" },
  { value: 5, label: "" },
  { value: 6, label: "" },
  { value: 7, label: "매우 그렇다" },
] as const;

export type AnswerValue = (typeof ANSWER_OPTIONS)[number]["value"];
