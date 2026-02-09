"use client";

interface RadarChartProps {
  /** 오행 점수 (목, 화, 토, 금, 수) */
  fiveElementScores?: Record<"목" | "화" | "토" | "금" | "수", number>;
  /** 십간 점수 (갑, 을, 병, 정, 무, 기, 경, 신, 임, 계) */
  tenStemScores?: Record<
    | "갑"
    | "을"
    | "병"
    | "정"
    | "무"
    | "기"
    | "경"
    | "신"
    | "임"
    | "계",
    number
  >;
  /** 최대 점수 (스케일링용) */
  maxScore: number;
  /** 그래프 크기 */
  size?: number;
}

export default function RadarChart({
  fiveElementScores,
  tenStemScores,
  maxScore,
  size = 200,
}: RadarChartProps) {
  const center = size / 2;
  const radius = size * 0.4;

  // 오각형 그래프 (오행)
  if (fiveElementScores) {
    const elements: Array<{ name: string; score: number; angle: number }> = [
      { name: "목", score: fiveElementScores.목, angle: -Math.PI / 2 }, // 위
      { name: "화", score: fiveElementScores.화, angle: -Math.PI / 2 + (2 * Math.PI) / 5 },
      { name: "토", score: fiveElementScores.토, angle: -Math.PI / 2 + (4 * Math.PI) / 5 },
      { name: "금", score: fiveElementScores.금, angle: -Math.PI / 2 + (6 * Math.PI) / 5 },
      { name: "수", score: fiveElementScores.수, angle: -Math.PI / 2 + (8 * Math.PI) / 5 },
    ];

    const points = elements.map((el) => {
      const normalizedScore = maxScore > 0 ? Math.min(el.score / maxScore, 1) : 0;
      const r = radius * normalizedScore;
      return {
        x: center + r * Math.cos(el.angle),
        y: center + r * Math.sin(el.angle),
        name: el.name,
        score: el.score,
      };
    });

    const pathData = points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ") + " Z";

    return (
      <div className="flex flex-col items-center gap-2">
        <svg width={size} height={size} className="overflow-visible">
          {/* 배경 그리드 (5개 레벨) */}
          {[1, 2, 3, 4, 5].map((level) => {
            const r = (radius * level) / 5;
            const gridPoints = elements.map((el) => ({
              x: center + r * Math.cos(el.angle),
              y: center + r * Math.sin(el.angle),
            }));
            const gridPath =
              gridPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
            return (
              <path
                key={level}
                d={gridPath}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            );
          })}

          {/* 축선 */}
          {elements.map((el, i) => {
            const x = center + radius * Math.cos(el.angle);
            const y = center + radius * Math.sin(el.angle);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#D4D0C7"
                strokeWidth="1"
              />
            );
          })}

          {/* 데이터 영역 */}
          <path
            d={pathData}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* 점과 라벨 */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="#3b82f6" />
              <text
                x={center + (radius + 20) * Math.cos(elements[i].angle)}
                y={center + (radius + 20) * Math.sin(elements[i].angle)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-[#2D2D2D]"
              >
                {p.name}
              </text>
            </g>
          ))}
        </svg>
        <p className="text-xs text-[#2D2D2D] opacity-70">오행</p>
      </div>
    );
  }

  // 십각형 그래프 (십간)
  if (tenStemScores) {
    const stems: Array<{
      name: string;
      displayName: string;
      score: number;
      angle: number;
    }> = [
      { name: "갑", displayName: "갑목", score: tenStemScores.갑, angle: -Math.PI / 2 },
      {
        name: "을",
        displayName: "을목",
        score: tenStemScores.을,
        angle: -Math.PI / 2 + (2 * Math.PI) / 10,
      },
      {
        name: "병",
        displayName: "병화",
        score: tenStemScores.병,
        angle: -Math.PI / 2 + (4 * Math.PI) / 10,
      },
      {
        name: "정",
        displayName: "정화",
        score: tenStemScores.정,
        angle: -Math.PI / 2 + (6 * Math.PI) / 10,
      },
      {
        name: "무",
        displayName: "무토",
        score: tenStemScores.무,
        angle: -Math.PI / 2 + (8 * Math.PI) / 10,
      },
      {
        name: "기",
        displayName: "기토",
        score: tenStemScores.기,
        angle: -Math.PI / 2 + (10 * Math.PI) / 10,
      },
      {
        name: "경",
        displayName: "경금",
        score: tenStemScores.경,
        angle: -Math.PI / 2 + (12 * Math.PI) / 10,
      },
      {
        name: "신",
        displayName: "신금",
        score: tenStemScores.신,
        angle: -Math.PI / 2 + (14 * Math.PI) / 10,
      },
      {
        name: "임",
        displayName: "임수",
        score: tenStemScores.임,
        angle: -Math.PI / 2 + (16 * Math.PI) / 10,
      },
      {
        name: "계",
        displayName: "계수",
        score: tenStemScores.계,
        angle: -Math.PI / 2 + (18 * Math.PI) / 10,
      },
    ];

    const points = stems.map((stem) => {
      const normalizedScore = maxScore > 0 ? Math.min(stem.score / maxScore, 1) : 0;
      const r = radius * normalizedScore;
      return {
        x: center + r * Math.cos(stem.angle),
        y: center + r * Math.sin(stem.angle),
        name: stem.displayName,
        score: stem.score,
      };
    });

    const pathData = points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ") + " Z";

    return (
      <div className="flex flex-col items-center gap-2">
        <svg width={size} height={size} className="overflow-visible">
          {/* 배경 그리드 (5개 레벨) */}
          {[1, 2, 3, 4, 5].map((level) => {
            const r = (radius * level) / 5;
            const gridPoints = stems.map((stem) => ({
              x: center + r * Math.cos(stem.angle),
              y: center + r * Math.sin(stem.angle),
            }));
            const gridPath =
              gridPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
            return (
              <path
                key={level}
                d={gridPath}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            );
          })}

          {/* 축선 */}
          {stems.map((stem, i) => {
            const x = center + radius * Math.cos(stem.angle);
            const y = center + radius * Math.sin(stem.angle);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#D4D0C7"
                strokeWidth="1"
              />
            );
          })}

          {/* 데이터 영역 */}
          <path
            d={pathData}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* 점과 라벨 */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="#3b82f6" />
              <text
                x={center + (radius + 25) * Math.cos(stems[i].angle)}
                y={center + (radius + 25) * Math.sin(stems[i].angle)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] fill-slate-600"
              >
                {p.name}
              </text>
            </g>
          ))}
        </svg>
        <p className="text-xs text-[#2D2D2D] opacity-70">십간</p>
      </div>
    );
  }

  return null;
}
