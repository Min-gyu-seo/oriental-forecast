"use client";

import { useState } from "react";
import type { Question } from "./questions";
import { ANSWER_OPTIONS } from "./options";

/** 문항별 선택값: questionId -> 1~7 (노출 안 함) */
export type Answers = Record<string, number>;

interface TestFormProps {
  questions: Question[];
  /** controlled 모드: 부모에서 답변 상태 관리 */
  value?: Answers;
  onChange?: (answers: Answers) => void;
}

export default function TestForm({
  questions,
  value,
  onChange,
}: TestFormProps) {
  const [internalAnswers, setInternalAnswers] = useState<Answers>({});
  const answers = value !== undefined ? value : internalAnswers;

  const handleOptionClick = (questionId: string, value: number) => {
    const prev = answers;
    if (prev[questionId] === value) {
      const next = { ...prev };
      delete next[questionId];
      if (onChange) {
        onChange(next);
      } else {
        setInternalAnswers(next);
      }
    } else {
      const next = { ...prev, [questionId]: value };
      if (onChange) {
        onChange(next);
      } else {
        setInternalAnswers(next);
      }
    }
  };

  const getCircleBorderColor = (value: number) => {
    if (value <= 3) return "#C85D5D"; // 1~3점: 빨간색 계열
    if (value === 4) return "#D4CCC0"; // 4점: 회색
    return "#7A9D8C"; // 5~7점: 초록색 계열
  };

  return (
    <ul className="space-y-8">
      {questions.map((q, index) => (
        <li key={q.id} className="flex flex-col gap-3">
          <div className="flex gap-3">
            <span className="text-[#2D2D2D] font-medium shrink-0 opacity-60">
              {index + 1}.
            </span>
            <span className="text-[#2D2D2D] font-nanum-myeongjo">{q.text}</span>
          </div>
          <div className="flex flex-col gap-2 pl-6 w-full min-w-0">
            {/* 양 끝 글자만: 매우 아니다 / 매우 그렇다 (항상 양쪽 극단) */}
            <div className="flex items-end justify-between text-sm text-[#2D2D2D] font-medium w-full opacity-80">
              <span>매우 아니다</span>
              <span>매우 그렇다</span>
            </div>
            <div className="flex items-center justify-between w-full">
              {ANSWER_OPTIONS.map((opt) => {
                const isSelected = answers[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleOptionClick(q.id, opt.value)}
                    className="cursor-pointer touch-manipulation select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85D5D] focus-visible:ring-offset-2 rounded-full transition-all duration-200 active:scale-95 hover:scale-105 w-8 h-8 flex items-center justify-center border-2 shrink-0"
                    style={{
                      borderColor: getCircleBorderColor(opt.value),
                      backgroundColor: isSelected ? "#F7E6C4" : "white",
                      boxShadow: isSelected
                        ? "0 0 8px rgba(247,230,196,0.6), inset 0 0 4px rgba(247,230,196,0.3)"
                        : "0 1px 2px rgba(0,0,0,0.05)",
                    }}
                    aria-pressed={isSelected}
                    aria-label={`${opt.value}점`}
                  />
                );
              })}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
