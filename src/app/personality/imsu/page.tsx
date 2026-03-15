"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TYPE_DISPLAY_NAMES, TYPE_CHARACTER_IMAGES } from "../../test/questions";
import { IMSU_HTML } from "./imsu-content";

const PARA_REGEX = /<p class="imsu-p"[^>]*>[\s\S]*?<\/p>/g;

/** 섹션 HTML에서 처음 N문단 끝 위치를 찾아 [보이는 부분, 나머지] 반환 */
function splitSectionAtParagraphs(section: string, n: number): [string, string] {
  let count = 0;
  let endIndex = -1;
  let m: RegExpExecArray | null;
  PARA_REGEX.lastIndex = 0;
  while ((m = PARA_REGEX.exec(section)) !== null) {
    count++;
    if (count >= n) {
      endIndex = m.index + m[0].length;
      break;
    }
  }
  if (endIndex < 0) return [section.trim(), ""];
  const visible = section.slice(0, endIndex).trim();
  const rest = section.slice(endIndex).trim();
  return [visible, rest];
}

/** HTML을 가로선 기준으로 섹션 배열로 분리 */
function getSections(html: string): Array<{ visible: string; rest: string }> {
  const parts = html.split(/<hr class="imsu-hr"\s*\/>/);
  const visibleParagraphCount = 6; // fade 전까지 노출되는 문단 수
  return parts.map((block) => {
    const [visible, rest] = splitSectionAtParagraphs(block, visibleParagraphCount);
    return { visible, rest };
  });
}

const contentClass =
  "prose prose-slate max-w-none text-[#2D2D2D] [&_.imsu-p]:mb-4 [&_.imsu-p]:leading-relaxed [&_strong]:font-bold [&_span]:align-baseline [&_.imsu-hr]:my-6 [&_.imsu-hr]:border-slate-300 [&_.imsu-ul]:my-4 [&_.imsu-ul]:list-disc [&_.imsu-ul]:pl-6 [&_.imsu-ul]:space-y-1";

export default function ImsuPage() {
  const sections = useMemo(() => getSections(IMSU_HTML), []);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = `${TYPE_DISPLAY_NAMES.임} 성격유형`;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("링크가 복사되었습니다.");
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        await navigator.clipboard.writeText(url).catch(() => {});
        alert("링크가 복사되었습니다.");
      }
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center p-6 sm:p-8 overflow-hidden">
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,70rem)] h-[min(80vh,50rem)] bg-contain bg-center bg-no-repeat opacity-25 blur-[6px]"
          style={{ backgroundImage: "url(/five-elements-bg.png)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-6">
        <Link
          href="/personality"
          className="text-sm text-[#2D2D2D] opacity-80 hover:opacity-100 transition-opacity w-fit"
        >
          ← 성격유형으로 돌아가기
        </Link>

        <article className="rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-[#E8E5DD] flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <div className="hidden sm:block flex-1 min-w-0" aria-hidden />
            <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-auto">
              <p className="text-xl sm:text-2xl font-bold text-[#2D2D2D] text-center">
                지혜로운 전략가, 거대한 흐름을 만드는 기획자
              </p>
              <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] flex items-center justify-center flex-shrink-0">
                <Image
                  src={TYPE_CHARACTER_IMAGES.임}
                  alt={TYPE_DISPLAY_NAMES.임}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 160px, 200px"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#2D2D2D]">
                {TYPE_DISPLAY_NAMES.임}
              </h1>
            </div>
            <div className="flex-1 flex justify-center sm:justify-end min-w-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleShare}
                className="text-sm font-medium text-[#2D2D2D] opacity-90 hover:opacity-100 py-2 px-4 rounded-lg border border-[#E8E5DD] bg-white hover:bg-[#f8f8f6] transition-colors shrink-0 h-[42px] flex items-center gap-2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                </svg>
                공유하기
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 imsu-content">
            <div className={contentClass}>
              {sections.map((sec, i) => (
                <div key={i} className="imsu-section">
                  <div
                    className="imsu-section-visible"
                    dangerouslySetInnerHTML={{ __html: sec.visible }}
                  />
                  {sec.rest ? (
                    <>
                      <div
                        className={`imsu-section-rest ${expanded[i] ? "imsu-section-rest-expanded" : ""}`}
                        style={
                          expanded[i]
                            ? undefined
                            : {
                                maxHeight: "10rem",
                                overflow: "hidden",
                                position: "relative",
                              }
                        }
                      >
                        <div
                          className="imsu-section-rest-inner"
                          dangerouslySetInnerHTML={{ __html: sec.rest }}
                        />
                        {!expanded[i] && (
                          <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => toggle(i)}
                          className="text-sm font-medium text-[#2D2D2D] opacity-80 hover:opacity-100 underline inline-flex items-center gap-1"
                        >
                          {expanded[i] ? (
                            <>접기 <span aria-hidden>▲</span></>
                          ) : (
                            <>펼치기 <span aria-hidden>▼</span></>
                          )}
                        </button>
                      </div>
                    </>
                  ) : null}
                  {i < sections.length - 1 && (
                    <hr className="imsu-hr my-6 border-slate-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
