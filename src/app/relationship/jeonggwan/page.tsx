import Link from "next/link";

export default function JeonggwanPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 pb-16">
      <div className="w-full max-w-3xl">
        <Link
          href="/relationship"
          className="inline-block text-[#2D2D2D] text-sm opacity-80 hover:opacity-100 mb-6"
        >
          ← 관계유형으로 돌아가기
        </Link>

        <div className="rounded-2xl bg-white/95 shadow-[0_4px_14px_rgba(0,0,0,0.08)] border border-[#E8E5DD] p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2 ">
          정관(正官)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 정관(正官)은 나를 극(剋)하는 오행 중 음양이 다른 성분을 말합니다. 정관은 나를 단련하고 규율 속에 두는 관계이며, &apos;사회적 기준과 책임&apos;을 형성하는 구조입니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          육친으로는 여성에게는 &apos;남편&apos;, 남성에게는 &apos;자식&apos;을 상징하며, 사회적으로는 법도, 공직, 명예, 신용, 합리적 규칙을 의미합니다. 십신 중 가장 질서와 품격을 강화하는 관계로 작용합니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          정관(正官)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            공명정대한 준법정신과 책임감
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>지행합일(知行合一)의 흐름:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정관의 관계를 맺게 되면 말과 행동의 일치를 의식하게 됩니다. 정해진 원칙을 지키려는 태도가 강화되고, 맡은 역할을 끝까지 수행하려는 책임감이 도출됩니다. 조직 안에서 신뢰를 축적하려는 의식이 자연스럽게 형성됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            단정하고 품격 있는 처세
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>군자(君子)의 자세:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정관 관계는 스스로를 절제하도록 만듭니다. 외적 태도와 언행을 정돈하려는 경향이 강화되며, 명예를 훼손하지 않으려는 자기 관리가 습관화됩니다. 체면과 품위를 중시하는 기준이 관계 속에서 형성됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            보수적인 안정성과 합리적 판단
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>안정지향(安定指向)의 강화:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정관의 관계는 급진적 선택보다 점진적 발전을 선호하게 합니다. 객관적 기준과 절차를 따르려는 경향이 도출되며, 판단이 신중해집니다. 다만, 과도해질 경우 융통성이나 창의적 시도가 위축될 가능성도 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 정관의 통상적 작용
        </h2>
        <div className="overflow-x-auto border border-[#2D2D2D]/20 rounded-lg mb-8">
          <table className="w-full text-[#2D2D2D] text-sm">
            <thead>
              <tr className="bg-[#2D2D2D]/5">
                <th className="p-3 text-left font-semibold border-b border-[#2D2D2D]/15">구분</th>
                <th className="p-3 text-left font-semibold border-b border-[#2D2D2D]/15">주요 관계 및 의미</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">가족</td>
                <td className="p-3">남편(여명), 자식(남명), 조부</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">상사, 기관장, 공무원, 나를 이끌어주는 지도자, 정직한 고객</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">법률, 직장, 지위, 훈장, 국가 기관, 도덕적 권위, 신용</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">공직자, 대기업 임원, 법조인, 행정가, 교육자, 관리직</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          이 관계가 나에게 미치는 영향
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            사회적 신분 상승과 명예의 획득
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>신분의 가이드:</strong> 정관 관계 속에서는 나의 행동이 사회적 평가와 직결된다는 의식이 강화됩니다. 상대를 통해 올바른 방향성을 배우고, 직위·평판·신용을 축적하는 기반이 형성됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>자기 절제와 완성:</strong> 상대의 엄격함은 나의 방종을 억제하는 역할을 합니다. 그 결과 사회적으로 존중받는 인물로 다듬어지는 경험을 하게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            안정적인 보호와 신뢰 관계
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>명분의 울타리:</strong> 정관 관계는 법적·도덕적 보호의 구조를 형성합니다. 약속을 중시하는 분위기 속에서 신뢰가 축적되며, 심리적 안정감이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            체계적인 질서와 효율적 관리
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>시스템의 내면화:</strong> 상대는 효율적인 절차와 체계를 강조합니다. 이 관계를 통해 일 처리 방식이 정돈되고, 무질서가 줄어들며 성과의 지속성이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>압박감과 답답함:</strong> 원칙 중심의 태도가 과해질 경우, 자유로운 감정 표현이 위축될 수 있습니다. 통제로 인식되면 갈등이 발생할 가능성이 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>창의성 저하:</strong> 규범을 지나치게 우선할 경우, 새로운 시도나 파격적 선택이 억제될 수 있습니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;책임지고 지켜야 할 존재&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>보호와 가치 인식:</strong> 상대는 나를 소중히 관리해야 할 존재로 인식합니다. 나는 상대의 명예와 책임 의식을 완성하는 실질적 기반이 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>안정적 울타리의 완성:</strong> 상대는 나를 통해 자신의 지도력과 관리 능력이 구체적 결실로 나타난다고 느낍니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;권위를 완성하는 내실&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>상호 보완:</strong> 나는 실질적 기반을 다지고, 상대는 사회적 명예와 질서를 세웁니다. 이로 인해 상호 상승 구조가 형성됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>성취의 증거:</strong> 내가 안정적으로 자리 잡을수록, 상대는 자신의 역할이 정당했음을 확인하게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 역학 관계: 주의해야 할 점
          </h3>
          <div className="overflow-x-auto border border-[#2D2D2D]/20 rounded-lg">
            <table className="w-full text-[#2D2D2D] text-sm">
              <thead>
                <tr className="bg-[#2D2D2D]/5">
                  <th className="p-3 text-center font-semibold border-b border-[#2D2D2D]/15">구분</th>
                  <th className="p-3 text-left font-semibold border-b border-[#2D2D2D]/15">영향 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2D2D2D]/10">
                  <td className="p-3 font-semibold text-center">과잉 통제와 소유욕</td>
                  <td className="p-3">상대방이 당신을 독립된 인격체보다 &apos;관리해야 할 자산&apos;처럼 취급할 경우, 당신의 자율성이 침해되어 답답함을 느낄 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">형식과 실속의 충돌</td>
                  <td className="p-3">상대방은 명예(체면)를 중시하고 당신은 실속(재물)을 중시할 때, 가치관의 차이로 인해 미묘한 신경전이 발생할 수 있습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          조언
        </h2>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          정관의 관계는 나를 사회적 기준 속에서 완성시키는 구조입니다. 그러나 지나친 통제는 성장의 숨통을 막을 수 있습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 형성된 책임과 질서를 유지하되, 유연성과 자율성을 함께 존중할 때, 정관의 흐름은 억압이 아니라 품격 있는 성장으로 이어집니다.
        </p>
        </div>
      </div>
    </main>
  );
}
