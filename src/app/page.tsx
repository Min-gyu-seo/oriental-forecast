"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  QUESTIONS,
  TYPE_DISPLAY_NAMES,
  TYPE_CHARACTER_IMAGES,
} from "./test/questions";
import type { QuestionType } from "./test/questions";
import { calculateTenGods, type TenGodName } from "./test/calculateTenGods";
import { TEN_GOD_DETAIL_HREF } from "./relationship/tenGodDetailPaths";
import { getTendencyTypes } from "./test/getTendency";

/** '나' 기준으로 상대에 대한 십신이 무엇인지에 따른 해설 */
const MY_VIEW_TEN_GOD_TEXTS: Record<
  TenGodName,
  { headline: string; description: string }
> = {
  비견: {
    headline: "비견(比肩)",
    description:
      "강한 주관과 독립심을 바탕으로 타인에게 굽히지 않는 자기 주체성.",
  },
  겁재: {
    headline: "겁재(劫財)",
    description:
      "지기 싫어하는 강한 경쟁심과 투쟁심, 그리고 재물을 나누거나 뺏는 복합적 성향.",
  },
  식신: {
    headline: "식신(食神)",
    description:
      "탐구심과 표현력이 뛰어나며, 의식주가 풍족하고 낙천적인 성정.",
  },
  상관: {
    headline: "상관(傷官)",
    description:
      "기발한 재치와 비판적 사고, 틀에 박힌 규율을 거부하는 화려한 자기표현.",
  },
  편재: {
    headline: "편재(偏財)",
    description:
      "큰 규모의 자금을 움직이는 사업가적 기질과 공간을 장악하는 역동성.",
  },
  정재: {
    headline: "정재(正財)",
    description:
      "성실하고 꼼꼼한 관리 능력, 안정적인 자산 운영과 보수적인 경제 관념.",
  },
  편관: {
    headline: "편관(偏官)",
    description:
      "권위와 카리스마, 인내심으로 대변되며 명예를 중시하는 강력한 통제력.",
  },
  정관: {
    headline: "정관(正官)",
    description:
      "도덕성과 원리원칙을 준수하며 사회적 질서 안에서 안정을 추구하는 준법정신.",
  },
  편인: {
    headline: "편인(偏印)",
    description:
      "직관적 통찰력과 남다른 창의성, 때로는 고독하게 파고드는 깊은 수용성.",
  },
  정인: {
    headline: "정인(正印)",
    description:
      "보편적인 학문과 도덕적 수용, 타인으로부터 사랑받고 보호받는 자애로운 심성.",
  },
};

const LOVER_ANSWERS_KEY = "lover-test-answers";
const LOVER_QUESTION_IDS = QUESTIONS.filter((q) => q.category === "연인").map((q) => q.id);
const LOVER_MY_QUESTIONS = QUESTIONS.filter((q) => q.category === "연인" && q.subject === "나");
const LOVER_PARTNER_QUESTIONS = QUESTIONS.filter((q) => q.category === "연인" && q.subject === "상대방");

const ALL_TYPES: QuestionType[] = [
  "갑",
  "을",
  "병",
  "정",
  "무",
  "기",
  "경",
  "신",
  "임",
  "계",
];

export default function Home() {
  const [box1, setBox1] = useState<QuestionType[]>([]);
  const [box2, setBox2] = useState<QuestionType[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [myResultTypes, setMyResultTypes] = useState<QuestionType[]>([]);
  const [partnerResultTypes, setPartnerResultTypes] = useState<QuestionType[]>([]);
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? sessionStorage.getItem(LOVER_ANSWERS_KEY) : null;
      const answers: Record<string, number> = raw ? JSON.parse(raw) : {};
      const allAnswered = LOVER_QUESTION_IDS.every((id) => id in answers);
      setTestCompleted(allAnswered);
      if (allAnswered) {
        const myTypes = getTendencyTypes(LOVER_MY_QUESTIONS, answers);
        const partnerTypes = getTendencyTypes(LOVER_PARTNER_QUESTIONS, answers);
        setMyResultTypes(myTypes);
        setPartnerResultTypes(partnerTypes);
      } else {
        setMyResultTypes([]);
        setPartnerResultTypes([]);
      }
    } catch {
      setTestCompleted(false);
      setMyResultTypes([]);
      setPartnerResultTypes([]);
    }
  }, []);

  const usageCount = (t: QuestionType) =>
    box1.filter((x) => x === t).length + box2.filter((x) => x === t).length;
  const canSelectFromPool = (t: QuestionType) => usageCount(t) < 2;

  /** 풀에서 캐릭터 클릭 시: '나'가 비어 있으면 나에, '나'에 있으면 '상대'에 배치 */
  const handlePoolCharacterClick = (type: QuestionType) => {
    if (!canSelectFromPool(type)) return;
    if (box1.length === 0) {
      setBox1([type]);
    } else {
      setBox2([type]);
    }
  };

  const removeFromBoxByIndex = (
    index: number,
    setBox: React.Dispatch<React.SetStateAction<QuestionType[]>>
  ) => {
    setBox((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const me = box1[0];
  const you = box2[0];
  const hasBoth = me != null && you != null;
  const tenGodFromMyView = hasBoth ? calculateTenGods(me, you) : null;
  const myViewCopy =
    tenGodFromMyView != null ? MY_VIEW_TEN_GOD_TEXTS[tenGodFromMyView] : null;

  const getCharBlinkClass = (type: QuestionType): string => {
    if (!testCompleted || (myResultTypes.length === 0 && partnerResultTypes.length === 0)) return "";
    const isMy = myResultTypes.includes(type);
    const isPartner = partnerResultTypes.includes(type);
    if (isMy && isPartner) return "job-char-blink-purple";
    if (isMy) return "job-char-blink-red";
    if (isPartner) return "job-char-blink-blue";
    return "";
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto animate-fade-in-top">
        <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          우리의 궁합 유형은?
        </h1>

        {/* 빈 박스 두 개: 왼쪽=나, 오른쪽=상대 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">나</p>
            <div
              className="min-h-[200px] rounded-xl border-2 border-dashed bg-white/80 flex flex-wrap items-center justify-center gap-3 p-4"
              style={{ borderColor: "#C85D5D" }}
            >
            {box1.map((type, index) => (
              <div
                key={`box1-${index}-${type}`}
                role="button"
                tabIndex={0}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => removeFromBoxByIndex(index, setBox1)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    removeFromBoxByIndex(index, setBox1);
                  }
                }}
              >
                <Image
                  src={TYPE_CHARACTER_IMAGES[type]}
                  alt={TYPE_DISPLAY_NAMES[type]}
                  width={80}
                  height={80}
                  className="object-contain opacity-90"
                  draggable={false}
                />
                <span className="text-xs font-medium text-slate-600">
                  {TYPE_DISPLAY_NAMES[type]}
                </span>
              </div>
            ))}
            </div>
            <div className="mt-3 w-full">
              <Link
                href="/my-type"
                className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#2D2D2D] bg-white rounded-xl border border-[#E8E5DD] shadow-sm hover:bg-[#F5F3ED] transition-colors text-center"
              >
                나의 성격유형 테스트
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">상대</p>
            <div
              className="min-h-[200px] rounded-xl border-2 border-dashed bg-white/80 flex flex-wrap items-center justify-center gap-3 p-4"
              style={{ borderColor: "#3b82f6" }}
            >
            {box2.map((type, index) => (
              <div
                key={`box2-${index}-${type}`}
                role="button"
                tabIndex={0}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => removeFromBoxByIndex(index, setBox2)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    removeFromBoxByIndex(index, setBox2);
                  }
                }}
              >
                <Image
                  src={TYPE_CHARACTER_IMAGES[type]}
                  alt={TYPE_DISPLAY_NAMES[type]}
                  width={80}
                  height={80}
                  className="object-contain opacity-90"
                  draggable={false}
                />
                <span className="text-xs font-medium text-slate-600">
                  {TYPE_DISPLAY_NAMES[type]}
                </span>
              </div>
            ))}
            </div>
            <div className="mt-3 w-full">
              <Link
                href="/partner-type"
                className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#2D2D2D] bg-white rounded-xl border border-[#E8E5DD] shadow-sm hover:bg-[#F5F3ED] transition-colors text-center"
              >
                상대방의 성격유형 테스트
              </Link>
            </div>
          </div>
        </div>

        {/* 나 기준 십신 해설 — 클릭 시 해당 십신 설명 페이지로 이동 */}
        <div className="mb-10">
          {myViewCopy && tenGodFromMyView ? (
            <Link
              href={TEN_GOD_DETAIL_HREF[tenGodFromMyView]}
              className="block rounded-xl border-2 border-slate-300 bg-white p-6 shadow-sm min-h-[100px] flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-400 hover:bg-slate-50/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <p className="text-[#2D2D2D] font-nanum-gothic text-[17px] font-semibold mb-3">
                {myViewCopy.headline}
              </p>
              <p className="text-[#2D2D2D] font-nanum-gothic text-[15px] leading-relaxed max-w-prose">
                {myViewCopy.description}
              </p>
            </Link>
          ) : (
            <div className="rounded-xl border-2 border-slate-300 bg-white p-6 shadow-sm min-h-[100px] flex flex-col items-center justify-center text-center">
              <p className="text-slate-500 font-nanum-gothic text-[15px] leading-relaxed">
                만나는 상대방에 따라 부각되는 나의 특징
              </p>
            </div>
          )}
        </div>

        {/* 캐릭터 10개 - 박스 밑에 배치 */}
        <p className="text-sm text-slate-600 mb-4 text-center">
          나의 성향과 상대방의 성향을 순서대로 클릭해 주세요.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-xl border border-slate-200 bg-slate-50/50 min-h-[140px]">
          {ALL_TYPES.map((type) => {
            const canSelect = canSelectFromPool(type);
            const charBlinkClass = getCharBlinkClass(type);
            return (
              <div
                key={type}
                role="button"
                tabIndex={canSelect ? 0 : -1}
                onClick={() => canSelect && handlePoolCharacterClick(type)}
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && canSelect) {
                    e.preventDefault();
                    handlePoolCharacterClick(type);
                  }
                }}
                className={`flex flex-col items-center gap-1 touch-manipulation ${
                  !canSelect ? "opacity-40 pointer-events-none" : "cursor-pointer"
                }`}
              >
                <span className={charBlinkClass ? `inline-block ${charBlinkClass}` : "inline-block"}>
                  <Image
                    src={TYPE_CHARACTER_IMAGES[type]}
                    alt={TYPE_DISPLAY_NAMES[type]}
                    width={64}
                    height={64}
                    className="object-contain select-none"
                    draggable={false}
                  />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {TYPE_DISPLAY_NAMES[type]}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center pb-12">
          <Link
            href="/brand"
            className="text-[#2D2D2D] text-base font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            오리엔탈포캐스트 알아보기
          </Link>
        </div>
      </div>

      <a
        href="https://www.instagram.com/orientalforecast/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-10 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity rounded-lg"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <defs>
            <linearGradient id="instagram-gradient-home" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="url(#instagram-gradient-home)"
          />
        </svg>
      </a>
    </main>
  );
}
