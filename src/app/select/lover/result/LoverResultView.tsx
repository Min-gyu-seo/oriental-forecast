"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { QUESTIONS, TYPE_DISPLAY_NAMES, TYPE_CHARACTER_IMAGES } from "../../../test/questions";
import { getTendencyTypes } from "../../../test/getTendency";
import { getTenStemScores, getFiveElementScores } from "../../../test/calculateScores";
import type { QuestionType } from "../../../test/questions";
import RadarChart from "./RadarChart";

const LOVER_ANSWERS_KEY = "lover-test-answers";

const LOVER_MY_QUESTIONS = QUESTIONS.filter(
  (q) => q.category === "연인" && q.subject === "나"
);
const LOVER_PARTNER_QUESTIONS = QUESTIONS.filter(
  (q) => q.category === "연인" && q.subject === "상대방"
);

export default function LoverResultView() {
  const router = useRouter();
  const [myTypes, setMyTypes] = useState<QuestionType[]>([]);
  const [partnerTypes, setPartnerTypes] = useState<QuestionType[]>([]);
  const [myTenStemScores, setMyTenStemScores] = useState<
    Record<QuestionType, number>
  >({
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
  });
  const [partnerTenStemScores, setPartnerTenStemScores] = useState<
    Record<QuestionType, number>
  >({
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
  });

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LOVER_ANSWERS_KEY);
      const answers: Record<string, number> = raw ? JSON.parse(raw) : {};
      setMyTypes(getTendencyTypes(LOVER_MY_QUESTIONS, answers));
      setPartnerTypes(getTendencyTypes(LOVER_PARTNER_QUESTIONS, answers));
      setMyTenStemScores(getTenStemScores(LOVER_MY_QUESTIONS, answers));
      setPartnerTenStemScores(
        getTenStemScores(LOVER_PARTNER_QUESTIONS, answers)
      );
    } catch {
      setMyTypes([]);
      setPartnerTypes([]);
    }
  }, []);

  const myFiveElementScores = getFiveElementScores(myTenStemScores);
  const partnerFiveElementScores = getFiveElementScores(partnerTenStemScores);

  // 각 섹션별 최대 점수 계산 (해당 섹션의 점수 중 최대값)
  const myTenStemMax = Math.max(...Object.values(myTenStemScores), 1);
  const myFiveElementMax = Math.max(...Object.values(myFiveElementScores), 1);
  const partnerTenStemMax = Math.max(...Object.values(partnerTenStemScores), 1);
  const partnerFiveElementMax = Math.max(...Object.values(partnerFiveElementScores), 1);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto animate-fade-in-top">
        <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          연인과의 궁합 결과
        </h1>

        <section className="mb-20 text-center">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            나의 성향
          </h2>
          {myTypes.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              {myTypes.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <Image
                    src={TYPE_CHARACTER_IMAGES[t]}
                    alt={TYPE_DISPLAY_NAMES[t]}
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                  <span className="text-slate-700 font-medium">
                    {TYPE_DISPLAY_NAMES[t]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-700 mb-6">—</p>
          )}
          <div className="border-2 border-slate-300 rounded-lg p-6 bg-white inline-block">
            <div className="flex items-start justify-center gap-16">
              <div className="flex flex-col items-center">
                <RadarChart
                  fiveElementScores={myFiveElementScores}
                  maxScore={myFiveElementMax}
                  size={128}
                />
              </div>
              <div className="h-36 w-px bg-slate-300 self-center"></div>
              <div className="flex flex-col items-center">
                <RadarChart
                  tenStemScores={myTenStemScores}
                  maxScore={myTenStemMax}
                  size={128}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">
            연인의 성향
          </h2>
          {partnerTypes.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              {partnerTypes.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <Image
                    src={TYPE_CHARACTER_IMAGES[t]}
                    alt={TYPE_DISPLAY_NAMES[t]}
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                  <span className="text-slate-700 font-medium">
                    {TYPE_DISPLAY_NAMES[t]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-700 mb-6">—</p>
          )}
          <div className="border-2 border-slate-300 rounded-lg p-6 bg-white inline-block">
            <div className="flex items-start justify-center gap-16">
              <div className="flex flex-col items-center">
                <RadarChart
                  fiveElementScores={partnerFiveElementScores}
                  maxScore={partnerFiveElementMax}
                  size={128}
                />
              </div>
              <div className="h-36 w-px bg-slate-300 self-center"></div>
              <div className="flex flex-col items-center">
                <RadarChart
                  tenStemScores={partnerTenStemScores}
                  maxScore={partnerTenStemMax}
                  size={128}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/job")}
            className="px-8 py-4 text-lg font-semibold text-[#2D2D2D] bg-white rounded-xl hover:bg-[#F5F3ED] transition-colors shadow-sm border border-[#E8E5DD]"
          >
            나의 직업 카드가 궁금하다면?
          </button>
        </div>
      </div>
    </main>
  );
}
