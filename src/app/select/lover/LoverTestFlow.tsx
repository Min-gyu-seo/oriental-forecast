"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TestForm from "../../test/TestForm";
import type { Question } from "../../test/questions";

const LOVER_ANSWERS_KEY = "lover-test-answers";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface LoverTestFlowProps {
  myQuestions: Question[];
  partnerQuestions: Question[];
}

export default function LoverTestFlow({
  myQuestions,
  partnerQuestions,
}: LoverTestFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const shuffledMy = useMemo(() => shuffle(myQuestions), [myQuestions]);
  const shuffledPartner = useMemo(() => shuffle(partnerQuestions), [partnerQuestions]);

  const currentQuestions = step === 1 ? shuffledMy : shuffledPartner;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleShowResult = () => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(LOVER_ANSWERS_KEY, JSON.stringify(answers));
      } catch {
        // ignore
      }
    }
    router.push("/select/lover/result");
  };

  return (
    <>
      <div className="pb-20 pt-8">
        {step === 1 && (
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-6 text-center font-nanum-myeongjo">
            나는 어떤 사람인가요?
          </h1>
        )}
        {step === 2 && (
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-6 text-center font-nanum-myeongjo">
            그 사람은 어떤 사람인가요?
          </h1>
        )}
        <div className="mb-2 py-5 px-5 text-[#2D2D2D] font-nanum-myeongjo text-base leading-relaxed bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm">
          <p>1. 나에 대한 질문에 솔직하게 답변해주세요</p>
          <p className="mt-1">2. 상대방에 대한 질문에는 내가 생각하는 상대방에 대해 답변해주세요</p>
        </div>
        <div className="flex justify-end mb-8">
          <span className="text-[#2D2D2D] font-nanum-myeongjo text-sm opacity-80">
            {step}/2페이지
          </span>
        </div>
        <TestForm
          questions={currentQuestions}
          value={answers}
          onChange={setAnswers}
        />
      </div>

      {step === 1 && (
        <div className="fixed bottom-6 right-6">
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 text-base font-semibold rounded-xl shadow-sm bg-white text-[#2D2D2D] hover:bg-[#F5F3ED] transition-colors border border-[#E8E5DD]"
          >
            다음
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="fixed bottom-6 right-6">
          <button
            type="button"
            onClick={handleShowResult}
            className="px-6 py-3 text-base font-semibold rounded-xl shadow-sm bg-white text-[#2D2D2D] hover:bg-[#F5F3ED] transition-colors border border-[#E8E5DD]"
          >
            결과보기
          </button>
        </div>
      )}
    </>
  );
}
