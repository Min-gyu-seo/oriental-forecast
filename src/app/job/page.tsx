"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  QUESTIONS,
  TYPE_DISPLAY_NAMES,
  TYPE_CHARACTER_IMAGES,
} from "../test/questions";
import type { QuestionType } from "../test/questions";
import { calculateTenGods, type TenGodName } from "../test/calculateTenGods";
import { getTendencyTypes } from "../test/getTendency";

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

/** 십신 두 개 조합별 노출 문장. 순서 무관 — A-B / B-A 둘 다 등록해 두어 조합만 같으면 노출 */
const TEN_GOD_PAIR_MESSAGES: Record<string, string> = {
  "비견-비견":
    '소울메이트\n똑같은 생각을 하는 두 사람. 굳이 말하지 않아도 서로의 다음 행동을 알고 있어 같이 있으면 가장 편안함.',
  "겁재-겁재":
    '운명의 라이벌\n한 명의 승자가 나와야 끝나는 관계. 서로의 존재가 자극제가 되어 평소보다 200%의 실력을 발휘하게 만듦.',
  "식신-편인":
    '창작과 자극\n편인이 직관적 아이디어를 툭 던져 동기를 부여하면, 식신이 그걸 끈기 있게 성과물로 빚어냄. 결과를 만드는 환상의 짝꿍.',
  "편인-식신":
    '창작과 자극\n편인이 직관적 아이디어를 툭 던져 동기를 부여하면, 식신이 그걸 끈기 있게 성과물로 빚어냄. 결과를 만드는 환상의 짝꿍.',
  "정인-상관":
    '도발과 해결\n상관이 선을 넘으며 판을 흔들어 놓으면, 정인이 지혜로운 마음으로 뒷수습을 하며 결국 작품으로 승화시킴.',
  "상관-정인":
    '도발과 해결\n상관이 선을 넘으며 판을 흔들어 놓으면, 정인이 지혜로운 마음으로 뒷수습을 하며 결국 작품으로 승화시킴.',
  "편관-편재":
    '개척과 싸워지킴\n편재가 미개발 세상에 나가 깃발을 꽂으면, 편관이 그 자리를 아무도 넘보지 못하게 강력한 카리스마로 지켜냄.',
  "편재-편관":
    '개척과 싸워지킴\n편재가 미개발 세상에 나가 깃발을 꽂으면, 편관이 그 자리를 아무도 넘보지 못하게 강력한 카리스마로 지켜냄.',
  "정관-정재":
    '설계와 운영\n정재가 공정하고 안정적인 계획을 세우면, 정관이 원칙대로 잘 돌아가도록 관리함. 절대 무너지지 않는 철옹성 같은 관계.',
  "정재-정관":
    '설계와 운영\n정재가 공정하고 안정적인 계획을 세우면, 정관이 원칙대로 잘 돌아가도록 관리함. 절대 무너지지 않는 철옹성 같은 관계.',
};

export default function JobCardPage() {
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
  const tenGodMyView = hasBoth ? calculateTenGods(me, you) : null;
  const tenGodPartnerView = hasBoth ? calculateTenGods(you, me) : null;

  /** 십신 두 개 조합(순서 무관)으로 노출 문장 조회. A-B / B-A 둘 다 찾음 */
  const getTenGodPairMessage = (a: TenGodName, b: TenGodName): string => {
    const key1 = `${a}-${b}`;
    const key2 = `${b}-${a}`;
    return TEN_GOD_PAIR_MESSAGES[key1] ?? TEN_GOD_PAIR_MESSAGES[key2] ?? "";
  };
  const combinationMessage =
    hasBoth && tenGodMyView != null && tenGodPartnerView != null
      ? getTenGodPairMessage(tenGodMyView, tenGodPartnerView)
      : "";

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
                {hasBoth && tenGodMyView != null && (
                  <span className="text-sm font-semibold text-slate-700 mb-1">
                    {tenGodMyView}
                  </span>
                )}
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
                {hasBoth && tenGodPartnerView != null && (
                  <span className="text-sm font-semibold text-slate-700 mb-1">
                    {tenGodPartnerView}
                  </span>
                )}
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
          </div>
        </div>

        {/* 조합별 긴 문장 박스 - 항상 노출, 캐릭터 없으면 빈 상태. "제목\n본문" 형태면 제목을 맨 위에 표시 */}
        <div className="mb-10">
          <div className="rounded-xl border-2 border-slate-300 bg-white p-6 shadow-sm min-h-[100px] flex flex-col items-center justify-center">
            {(() => {
              const msg = combinationMessage || "—";
              const hasTitle = msg.includes("\n");
              const [title, ...bodyParts] = hasTitle ? msg.split("\n") : [null, msg];
              const body = bodyParts.join("\n");
              return (
                <>
                  {hasTitle && title && (
                    <p className="text-[#2D2D2D] font-nanum-gothic text-[17px] font-semibold text-center mb-3">
                      {title}
                    </p>
                  )}
                  <p className="text-[#2D2D2D] font-nanum-gothic text-[15px] leading-relaxed whitespace-pre-line text-center">
                    {body || (hasTitle ? "" : msg)}
                  </p>
                </>
              );
            })()}
          </div>
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
      </div>
    </main>
  );
}
