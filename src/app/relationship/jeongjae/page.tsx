import Link from "next/link";

export default function JeongjaePage() {
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
          정재(正財)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 정재(正財)는 내가 극(剋)하는 오행 중 음양이 다른 성분을 말합니다. 정재는 통제와 관리의 과정을 거쳐 얻어지는 안정적 결과를 의미하며, &apos;지속 가능한 자산&apos;을 형성하는 관계입니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          육친으로는 남성에게는 &apos;부인(정처)&apos;, 공통적으로는 &apos;아버지&apos;를 상징하며, 사회적으로는 고정 수입, 정당한 재물, 신용, 성실성, 치밀함을 의미합니다. 십신 중 가장 신뢰와 안정의 구조를 만드는 관계입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          정재(正財)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            철저한 성실성과 책임감
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>적소성대(積小成大)의 흐름:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정재의 관계를 맺게 되면 작은 것을 소중히 여기고 꾸준히 축적하려는 태도가 도출됩니다. 허황된 기대보다 현실적 목표를 세우게 되며, 맡은 역할을 끝까지 수행하려는 책임 의식이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            치밀한 계산과 합리적 판단
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>명경지수(明鏡止水)의 안목:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정재 관계 속에서는 감정보다 손익과 구조를 따지는 사고가 강화됩니다. 숫자와 구체적 근거에 민감해지며, 불필요한 낭비를 줄이려는 경향이 도출됩니다. 논리적이고 실사구시적인 판단 기준이 형성됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            보수적인 안정성과 신용
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>신조(信條)의 유지:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정재의 관계는 약속과 신뢰를 중시하는 태도를 강화합니다. 급격한 변화보다는 예측 가능한 안정을 추구하게 되며, 일상의 질서를 지키는 방향으로 기운이 흐릅니다. 다만, 과도해질 경우 융통성이 약해질 가능성도 함께 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 정재의 통상적 작용
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
                <td className="p-3">부인(남명), 아버지, 시어머니</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">성실한 직원, 신용 있는 거래처, 관리자, 꼼꼼한 동료</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">고정급여, 저축, 부동산(실거주), 가정, 도덕적 가치, 치밀함</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">금융업(은행), 회계사, 세무사, 관리직, 공무원, 정직한 자영업</td>
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
            현실 감각의 회복과 안정된 기반
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>실속 있는 가이드:</strong> 정재 관계 속에서는 막연한 이상보다 구체적 계획이 강조됩니다. 자산 관리, 일정 관리, 생활의 구조화가 강화되며, 삶의 기반이 단단해지는 경험을 하게 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>심리적 평온:</strong> 상대의 일관된 태도와 성실함은 나에게 예측 가능성을 제공합니다. 그로 인해 불안이 줄어들고 안정감이 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            자산 관리와 경제적 이득
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>재물의 축적 구조:</strong> 정재 관계는 급격한 부보다 꾸준한 축적을 지향합니다. 불필요한 비용을 줄이고 합리적 소비를 유지하는 구조가 형성되며, 안정적 수입 기반이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            도덕적 완성의 지향
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>바른 길의 제시:</strong> 정재 관계는 명분 없는 이득을 경계하게 만듭니다. 원칙과 상식을 기준으로 판단하는 태도가 강화되어, 사회적 신뢰를 유지하는 방향으로 나를 이끕니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>답답함과 갈등:</strong> 나의 세밀함이 과도할 경우, 상대에게는 통제로 인식될 수 있습니다. 작은 부분까지 관리하려는 태도는 갈등을 유발할 가능성이 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>모험심의 위축:</strong> 안정을 중시하는 기운이 강해질수록, 새로운 도전이 지연되거나 회피될 수 있습니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;따를 수 있는 기준&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>존경과 신뢰:</strong> 상대는 나의 원칙과 기준을 존중하며, 그 틀 안에서 자신의 자산과 노력을 운용하려 합니다. 나는 상대에게 방향성과 규범을 제시하는 위치에 서게 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>안정적 울타리:</strong> 내 존재는 상대에게 질서를 제공하며, 그 질서 안에서 상대는 안도감을 느낍니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;책임지는 자와 보좌하는 자&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>보완적 구조:</strong> 상대는 실무와 관리 영역을 담당하며, 나는 기준과 방향을 제시하는 역할을 하게 됩니다. 상호 보완을 통해 안정적 성과가 도출됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>긴장과 예의:</strong> 정관의 기운은 상대에게 자연스러운 존중과 거리감을 형성하게 합니다. 이는 관계의 균형을 유지하는 요소가 됩니다.
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
                  <td className="p-3 font-semibold text-center">규제와 압박</td>
                  <td className="p-3">당신의 원칙이 지나치게 엄격할 경우, 상대방은 자신의 성실한 노력을 인정받지 못한다고 느껴 숨이 막힐 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">권위주의 경계</td>
                  <td className="p-3">상대가 나를 존중한다고 해서 당연하게 여기거나 권위적인 태도로 명령한다면, 상대의 헌신적인 기운은 점차 시들어갈 것입니다.</td>
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
          정재의 관계는 나의 에너지를 안정적 자산으로 전환시키는 구조입니다. 그러나 지나친 보수성은 성장 기회를 제한할 수 있습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 축적한 기반 위에 적절한 도전과 확장을 더할 때, 정재의 흐름은 단순한 안정이 아니라 지속 가능한 번영으로 이어집니다.
        </p>
        </div>
      </div>
    </main>
  );
}
