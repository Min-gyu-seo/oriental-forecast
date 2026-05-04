"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TYPE_DISPLAY_NAMES,
  TYPE_CHARACTER_IMAGES,
} from "../../test/questions";
import { getTendencyTypes } from "../../test/getTendency";
import {
  getTenStemScores,
  getFiveElementScores,
  getTheoreticalScoreBoundsForQuestions,
} from "../../test/calculateScores";
import type { QuestionType } from "../../test/questions";
import RadarChart from "../../select/lover/result/RadarChart";
import { PARTNER_TYPE_QUESTIONS } from "../partnerTypeQuestions";

const PARTNER_TYPE_ANSWERS_KEY = "partner-type-answers";

const PARTNER_TYPE_SCORE_BOUNDS =
  getTheoreticalScoreBoundsForQuestions(PARTNER_TYPE_QUESTIONS);

export default function PartnerTypeResultPage() {
  const [types, setTypes] = useState<QuestionType[]>([]);
  const [tenStemScores, setTenStemScores] = useState<
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
      const raw = sessionStorage.getItem(PARTNER_TYPE_ANSWERS_KEY);
      const answers: Record<string, number> = raw ? JSON.parse(raw) : {};
      setTypes(getTendencyTypes(PARTNER_TYPE_QUESTIONS, answers));
      setTenStemScores(getTenStemScores(PARTNER_TYPE_QUESTIONS, answers));
    } catch {
      setTypes([]);
    }
  }, []);

  const fiveElementScores = getFiveElementScores(tenStemScores);

  return (
    <main className="min-h-screen p-6 sm:p-8">
      <div className="max-w-2xl mx-auto animate-fade-in-top">
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center font-nanum-myeongjo">
          상대방의 성격유형 결과
        </h1>

        <section className="mb-12 text-center">
          <h2 className="text-lg font-semibold text-[#2D2D2D] mb-6">
            상대방의 성향
          </h2>
          {types.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {types.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <Image
                    src={TYPE_CHARACTER_IMAGES[t]}
                    alt={TYPE_DISPLAY_NAMES[t]}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                  <span className="text-[#2D2D2D] font-medium">
                    {TYPE_DISPLAY_NAMES[t]}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#2D2D2D] mb-6 opacity-70">
              결과를 불러올 수 없습니다. 테스트를 먼저 진행해 주세요.
            </p>
          )}

          {types.length > 0 && (
            <div className="border-2 border-[#E8E5DD] rounded-xl p-6 bg-white inline-block">
              <div className="flex items-start justify-center gap-12">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-[#2D2D2D] opacity-80">
                    오행
                  </span>
                  <RadarChart
                    fiveElementScores={fiveElementScores}
                    minScore={PARTNER_TYPE_SCORE_BOUNDS.fiveElement.min}
                    maxScore={PARTNER_TYPE_SCORE_BOUNDS.fiveElement.max}
                    size={120}
                  />
                </div>
                <div className="h-32 w-px bg-[#E8E5DD] self-center" />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-[#2D2D2D] opacity-80">
                    십간
                  </span>
                  <RadarChart
                    tenStemScores={tenStemScores}
                    minScore={PARTNER_TYPE_SCORE_BOUNDS.tenStem.min}
                    maxScore={PARTNER_TYPE_SCORE_BOUNDS.tenStem.max}
                    size={120}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="flex justify-center gap-4">
          <Link
            href="/partner-type"
            className="px-6 py-3 text-base font-semibold rounded-xl shadow-sm bg-white text-[#2D2D2D] hover:bg-[#F5F3ED] transition-colors border border-[#E8E5DD]"
          >
            다시 테스트
          </Link>
          <Link
            href="/"
            className="px-6 py-3 text-base font-semibold rounded-xl shadow-sm bg-white text-[#2D2D2D] hover:bg-[#F5F3ED] transition-colors border border-[#E8E5DD]"
          >
            메인으로
          </Link>
        </div>
      </div>
    </main>
  );
}
