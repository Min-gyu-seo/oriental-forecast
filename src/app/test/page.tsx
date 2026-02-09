import TestForm from "./TestForm";
import { QUESTIONS } from "./questions";

export default function TestPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 py-5 px-5 text-[#2D2D2D] font-nanum-myeongjo text-base leading-relaxed bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm">
          여기에 준비한 텍스트를 넣어 주세요.
        </div>
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center">
          심리 검사
        </h1>

        {QUESTIONS.length > 0 ? (
          <TestForm questions={QUESTIONS} />
        ) : (
          <p className="text-[#2D2D2D] text-center py-8 opacity-70">
            문항을 추가하면 여기에 질문만 노출됩니다.
          </p>
        )}
      </div>
    </main>
  );
}
