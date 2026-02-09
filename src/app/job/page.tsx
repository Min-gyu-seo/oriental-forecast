"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  QUESTIONS,
  TYPE_DISPLAY_NAMES,
  TYPE_CHARACTER_IMAGES,
} from "../test/questions";
import type { QuestionType } from "../test/questions";
import { calculateTenGods, TEN_GOD_JOB_TITLES } from "../test/calculateTenGods";
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

export default function JobCardPage() {
  const [box1, setBox1] = useState<QuestionType[]>([]);
  const [box2, setBox2] = useState<QuestionType[]>([]);
  const [dragging, setDragging] = useState<QuestionType | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [myResultTypes, setMyResultTypes] = useState<QuestionType[]>([]);
  const [partnerResultTypes, setPartnerResultTypes] = useState<QuestionType[]>([]);
  const [touchDrag, setTouchDrag] = useState<{
    type: QuestionType;
    source: "pool" | "box1" | "box2";
    startX: number;
    startY: number;
  } | null>(null);

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
  const canDragFromPool = (t: QuestionType) => usageCount(t) < 2;

  const removeOne = (arr: QuestionType[], type: QuestionType): QuestionType[] => {
    const i = arr.indexOf(type);
    return i === -1 ? arr : [...arr.slice(0, i), ...arr.slice(i + 1)];
  };

  const handleDragStart = (
    e: React.DragEvent,
    type: QuestionType,
    source: "pool" | "box1" | "box2"
  ) => {
    setDragging(type);
    e.dataTransfer.setData("text/plain", type);
    e.dataTransfer.setData("application/x-source", source);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDropOnBox = (
    e: React.DragEvent,
    setBox: React.Dispatch<React.SetStateAction<QuestionType[]>>,
    targetBox: "box1" | "box2",
    currentBox: QuestionType[]
  ) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain") as QuestionType;
    const source = e.dataTransfer.getData("application/x-source") as "pool" | "box1" | "box2";
    if (!type || !ALL_TYPES.includes(type)) return;
    if (source === targetBox) {
      setDragging(null);
      return;
    }
    const alreadyHasOne = currentBox.length >= 1;
    const currentChar = currentBox[0];

    if (alreadyHasOne) {
      // 박스에 이미 캐릭터가 있음 → 스왑
      if (source === "pool") {
        setBox([type]); // 새 캐릭터로 교체, 기존 캐릭터는 풀로
      } else {
        // 다른 박스에서 드래그 → 두 박스 내용 스왑
        setBox1(targetBox === "box1" ? [type] : [currentChar]);
        setBox2(targetBox === "box2" ? [type] : [currentChar]);
      }
    } else {
      // 박스가 비어 있음 → 하나만 넣기
      if (source === "box1") {
        setBox1((prev) => removeOne(prev, type));
      } else if (source === "box2") {
        setBox2((prev) => removeOne(prev, type));
      }
      setBox([type]);
    }
    setDragging(null);
  };

  const handleDropOnPool = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain") as QuestionType;
    const source = e.dataTransfer.getData("application/x-source") as "pool" | "box1" | "box2";
    if (!type || !ALL_TYPES.includes(type)) return;
    if (source === "box1") {
      setBox1((prev) => removeOne(prev, type));
    } else if (source === "box2") {
      setBox2((prev) => removeOne(prev, type));
    }
    setDragging(null);
  };

  // 모바일 터치 이벤트 핸들러
  const handleTouchStart = (
    e: React.TouchEvent,
    type: QuestionType,
    source: "pool" | "box1" | "box2"
  ) => {
    setTouchDrag({
      type,
      source,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
    });
    setDragging(type);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchDrag) return;
    e.preventDefault();
  };

  const handleTouchEndOnBox = (
    e: React.TouchEvent,
    targetBox: "box1" | "box2",
    setBox: React.Dispatch<React.SetStateAction<QuestionType[]>>,
    currentBox: QuestionType[]
  ) => {
    if (!touchDrag) return;
    e.preventDefault();
    e.stopPropagation();

    const type = touchDrag.type;
    const source = touchDrag.source;
    
    if (source === targetBox) {
      setTouchDrag(null);
      setDragging(null);
      return;
    }

    const alreadyHasOne = currentBox.length >= 1;
    const currentChar = currentBox[0];

    if (alreadyHasOne) {
      if (source === "pool") {
        setBox([type]);
      } else {
        setBox1(targetBox === "box1" ? [type] : [currentChar]);
        setBox2(targetBox === "box2" ? [type] : [currentChar]);
      }
    } else {
      if (source === "box1") {
        setBox1((prev) => removeOne(prev, type));
      } else if (source === "box2") {
        setBox2((prev) => removeOne(prev, type));
      }
      setBox([type]);
    }

    setTouchDrag(null);
    setDragging(null);
  };

  const handleTouchEndOnPool = (e: React.TouchEvent) => {
    if (!touchDrag) return;
    e.preventDefault();
    e.stopPropagation();

    const type = touchDrag.type;
    const source = touchDrag.source;

    if (source === "box1") {
      setBox1((prev) => removeOne(prev, type));
    } else if (source === "box2") {
      setBox2((prev) => removeOne(prev, type));
    }

    setTouchDrag(null);
    setDragging(null);
  };

  const handleTouchEndOnCharacter = (e: React.TouchEvent) => {
    if (!touchDrag) return;
    // 캐릭터에서 터치가 끝나면 드롭 취소
    setTouchDrag(null);
    setDragging(null);
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
          우리가 만났을 때 얻게 되는 직업카드는?
        </h1>

        {/* 빈 박스 두 개: 왼쪽=나, 오른쪽=상대 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">나</p>
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropOnBox(e, setBox1, "box1", box1)}
              onTouchEnd={(e) => handleTouchEndOnBox(e, "box1", setBox1, box1)}
              className="min-h-[200px] rounded-xl border-2 border-dashed bg-white/80 flex flex-wrap items-center justify-center gap-3 p-4"
              style={{ borderColor: "#C85D5D" }}
            >
            {box1.map((type, index) => (
              <div
                key={`box1-${index}-${type}`}
                className="relative flex flex-col items-center"
                draggable
                onDragStart={(e) => handleDragStart(e, type, "box1")}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => handleTouchStart(e, type, "box1")}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEndOnCharacter}
              >
                <Image
                  src={TYPE_CHARACTER_IMAGES[type]}
                  alt={TYPE_DISPLAY_NAMES[type]}
                  width={80}
                  height={80}
                  className="object-contain cursor-grab active:cursor-grabbing opacity-90"
                />
                <span className="text-xs font-medium text-slate-600">
                  {TYPE_DISPLAY_NAMES[type]}
                </span>
                <button
                  type="button"
                  onClick={() => removeFromBoxByIndex(index, setBox1)}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-400 text-white text-xs flex items-center justify-center hover:bg-slate-500"
                  aria-label="제거"
                >
                  ×
                </button>
              </div>
            ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">상대</p>
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropOnBox(e, setBox2, "box2", box2)}
              onTouchEnd={(e) => handleTouchEndOnBox(e, "box2", setBox2, box2)}
              className="min-h-[200px] rounded-xl border-2 border-dashed bg-white/80 flex flex-wrap items-center justify-center gap-3 p-4"
              style={{ borderColor: "#3b82f6" }}
            >
            {box2.map((type, index) => (
              <div
                key={`box2-${index}-${type}`}
                className="relative flex flex-col items-center"
                draggable
                onDragStart={(e) => handleDragStart(e, type, "box2")}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => handleTouchStart(e, type, "box2")}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEndOnCharacter}
              >
                <Image
                  src={TYPE_CHARACTER_IMAGES[type]}
                  alt={TYPE_DISPLAY_NAMES[type]}
                  width={80}
                  height={80}
                  className="object-contain cursor-grab active:cursor-grabbing opacity-90"
                />
                <span className="text-xs font-medium text-slate-600">
                  {TYPE_DISPLAY_NAMES[type]}
                </span>
                <button
                  type="button"
                  onClick={() => removeFromBoxByIndex(index, setBox2)}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-400 text-white text-xs flex items-center justify-center hover:bg-slate-500"
                  aria-label="제거"
                >
                  ×
                </button>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* 십신 결과 카드 두 개 - 왼쪽=내 직업, 오른쪽=상대 직업 (상자는 항상 표시, 내용만 조건부) */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">내 직업</p>
            <div className="rounded-xl border-2 border-slate-300 bg-white p-6 text-center shadow-sm min-h-[100px] flex items-center justify-center">
            <p className="text-[#2D2D2D] font-nanum-myeongjo">
              {hasBoth && tenGodMyView != null ? (
                <>
                  <span className="block text-xl font-semibold mb-1 leading-snug">
                    {TEN_GOD_JOB_TITLES[tenGodMyView]}
                  </span>
                  <span className="text-sm opacity-80">{tenGodMyView}</span>
                </>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 text-center">상대 직업</p>
            <div className="rounded-xl border-2 border-slate-300 bg-white p-6 text-center shadow-sm min-h-[100px] flex items-center justify-center">
            <p className="text-[#2D2D2D] font-nanum-myeongjo">
              {hasBoth && tenGodPartnerView != null ? (
                <>
                  <span className="block text-xl font-semibold mb-1 leading-snug">
                    {TEN_GOD_JOB_TITLES[tenGodPartnerView]}
                  </span>
                  <span className="text-sm opacity-80">{tenGodPartnerView}</span>
                </>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </p>
            </div>
          </div>
        </div>

        {/* 캐릭터 10개 - 박스 밑에 배치 */}
        <p className="text-sm text-slate-600 mb-4 text-center">
          아래 캐릭터를 박스로 드래그해서 넣어보세요.
        </p>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDropOnPool}
          onTouchEnd={handleTouchEndOnPool}
          className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-xl border border-slate-200 bg-slate-50/50 min-h-[140px]"
        >
          {ALL_TYPES.map((type) => {
            const canDrag = canDragFromPool(type);
            const isDraggingThis = dragging === type;
            const charBlinkClass = getCharBlinkClass(type);
            return (
              <div
                key={type}
                draggable={canDrag}
                onDragStart={(e) => canDrag && handleDragStart(e, type, "pool")}
                onDragEnd={handleDragEnd}
                onTouchStart={(e) => canDrag && handleTouchStart(e, type, "pool")}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEndOnCharacter}
                className={`flex flex-col items-center gap-1 ${
                  !canDrag
                    ? "opacity-40 pointer-events-none"
                    : "cursor-grab active:cursor-grabbing touch-manipulation"
                } ${isDraggingThis ? "opacity-50" : ""}`}
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
