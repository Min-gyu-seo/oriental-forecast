import LoverTestFlow from "./LoverTestFlow";
import { QUESTIONS } from "../../test/questions";

const LOVER_MY_QUESTIONS = QUESTIONS.filter(
  (q) => q.category === "연인" && q.subject === "나"
);
const LOVER_PARTNER_QUESTIONS = QUESTIONS.filter(
  (q) => q.category === "연인" && q.subject === "상대방"
);

export default function LoverTestPage() {
  return (
    <main className="min-h-screen px-8 pt-0 pb-8">
      <div className="max-w-2xl mx-auto">
        <LoverTestFlow
          myQuestions={LOVER_MY_QUESTIONS}
          partnerQuestions={LOVER_PARTNER_QUESTIONS}
        />
      </div>
    </main>
  );
}
