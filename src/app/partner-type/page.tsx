"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TestForm from "../test/TestForm";
import { PARTNER_TYPE_QUESTIONS } from "./partnerTypeQuestions";

const PARTNER_TYPE_ANSWERS_KEY = "partner-type-answers";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function PartnerTypeTestPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const shuffledQuestions = useMemo(() => shuffle(PARTNER_TYPE_QUESTIONS), []);

  const handleShowResult = () => {
    if (Object.keys(answers).length !== shuffledQuestions.length) return;
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(
          PARTNER_TYPE_ANSWERS_KEY,
          JSON.stringify(answers)
        );
      } catch {
        // ignore
      }
    }
    router.push("/partner-type/result");
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === shuffledQuestions.length;

  return (
    <main className="min-h-screen p-6 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-6 text-center font-nanum-myeongjo">
          상대방의 성격유형 테스트
        </h1>

        <div className="mb-6 py-5 px-5 text-[#2D2D2D] font-nanum-myeongjo text-base leading-relaxed bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm">
          <p>각 문장이 상대방을 얼마나 잘 설명하는지 솔직하게 답해 주세요.</p>
        </div>

        <div className="flex justify-end mb-6">
          <span className="text-[#2D2D2D] font-nanum-myeongjo text-sm opacity-80">
            {answeredCount} / {PARTNER_TYPE_QUESTIONS.length}문항
          </span>
        </div>

        <section className="rounded-2xl bg-white/95 shadow-[0_4px_14px_rgba(0,0,0,0.08)] p-6 sm:p-8 border border-[#E8E5DD]">
          <TestForm
            questions={shuffledQuestions}
            value={answers}
            onChange={setAnswers}
          />
        </section>

        <div className="mt-10 flex justify-center pb-20">
          <button
            type="button"
            onClick={handleShowResult}
            disabled={!allAnswered}
            className="px-8 py-4 text-lg font-semibold rounded-xl shadow-sm border border-[#E8E5DD] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent bg-white text-[#2D2D2D] hover:bg-[#F5F3ED]"
          >
            결과 보기
          </button>
        </div>
      </div>
    </main>
  );
}
