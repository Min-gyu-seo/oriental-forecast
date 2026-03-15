import Link from "next/link";

export default function BiyeonPage() {
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
          비견(比肩)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          사주명리학에서 비견(比肩)은 사주의 주체인 나와 오행이 같고 음양도 같은 성분을 말합니다. 나와 어깨를 나란히 하는 비견은 &apos;나 자신&apos;과 같은 성향으로서 &apos;함께 달리는 동료&apos;와 같은 역할을 합니다. 육친으로는 &apos;형제, 자매, 친구&apos;를 상징하며, 사회적으로는 동료, 경쟁자, 협력자, 독립심을 의미합니다. 십신 중 가장 강한 주체성과 평등한 유대감을 상징하는 성분입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          비견(比肩)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            강력한 독립심과 주체성
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>간여지동(干與地同)의 기개:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            비견의 관계를 맺게 되면, 외부의 간섭이나 종속적 구조에 대한 거부감이 강해지게 됩니다. 자신의 판단을 우선시하는 경향이 강화되며, 어려움 속에서도 스스로 해결하려는 자강불식(自强不息)의 태도가 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            평등 지향과 담백한 인간관계
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>동등한 동반자 정신:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            비견의 관계 속에서는 위계보다 수평적 관계를 선호하는 성향이 강화됩니다. 상대를 과하게 의식하거나 억누르기보다, 동등한 위치에서 담백하게 교류하려는 태도가 형성됩니다. &apos;내 것&apos;과 &apos;네 것&apos;의 경계를 분명히 하려는 인식이 뚜렷해지며, 의리와 공정성을 중시하는 기질이 관계 속에서 발현됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            고집과 경쟁을 통한 성장
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>쟁투(爭鬪)의 에너지:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            나와 유사한 존재와의 관계는 자연스럽게 경쟁 구도를 형성하며, 이 관계를 통해 승부욕이 자극됩니다. 비견의 관계를 맺게 되면 지기 싫어하는 마음이 강화되어 라이벌을 통해 비약적인 발전이 도출되기도 합니다. 다만, 자신의 신념이 더욱 단단해지면서 타인의 조언을 배척하는 독선으로 흐를 가능성도 함께 강화됩니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 비견의 통상적 작용
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
                <td className="p-3">형제, 자매, 동성(同性)의 형제</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">친구, 직장 동료, 동업자, 경쟁 상대, 동창생</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">독립, 분가(分家), 경쟁, 동업, 자아(Ego)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">전문직, 자유업, 스포츠 선수, 프리랜서, 개인 사업가</td>
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
            주체성 확립과 추진력 강화
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>에너지 시너지:</strong> 비견의 관계를 맺으면, 상대는 일방적 지원자가 아니라 함께 나아가는 동반자가 됩니다. 그 관계 속에서 나 역시 스스로를 더욱 단단히 세우게 되며, &apos;할 수 있다&apos;는 자기 확신이 강화됩니다. 추진력 또한 자연스럽게 증폭됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>자아의 투영:</strong> 비슷한 기질을 가진 상대를 통해 나의 장단점이 더욱 또렷하게 드러나며, 자기 인식이 심화됩니다. 이 과정에서 인간적 성숙이 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            건강한 경쟁과 지적 자극
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>라이벌 효과:</strong> 비견 관계가 형성되면, 상대의 성취는 질투의 대상이기보다 자극제가 되기 쉽습니다. 은근한 경쟁 구도 속에서 정체되지 않고 지속적으로 발전하려는 동기가 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            실질적인 협력과 분배
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>동업의 기반:</strong> 비견 관계에서는 &apos;함께 벌고 함께 나누는&apos; 구조가 자연스럽게 형성됩니다. 공동의 목표를 설정할 경우 강력한 실행력이 도출되며, 성과를 공정하게 배분하려는 의식이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>군겁쟁재(群劫爭財)의 위험:</strong> 재물이나 동일한 목표를 두고 경쟁하게 되면, 관계 속에서 경쟁심이 과도하게 강화될 수 있습니다. 이 경우 협력 관계가 갈등 구조로 전환될 위험이 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>자존심 충돌:</strong> 비견 관계에서는 양측 모두 자아가 강화되기 때문에, 의견 충돌 시 쉽게 물러서지 않는 경향이 나타날 수 있습니다. 그 결과 관계 단절로 이어질 가능성도 함께 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;나를 가장 잘 이해하는 도플갱어&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>공감과 일체감:</strong> 비견의 관계 속에서는 상호 이해도가 높아지며, 말하지 않아도 통하는 공감대가 형성됩니다. 서로가 서로를 통해 심리적 안정감을 얻게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;함께 승리하고 싶은 런닝메이트&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>동반 성장:</strong> 이 관계는 서로의 자아를 자극하여 끝까지 완주하게 만드는 힘을 제공합니다. 상호 자극과 지지를 통해 동반 성장이 강화됩니다.
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
                  <td className="p-3 font-semibold text-center">소유권 분쟁</td>
                  <td className="p-3">목표물이 하나일 때(승진, 계약 등) 서로 양보하기 힘든 치열한 경쟁자가 될 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">심리적 압박</td>
                  <td className="p-3">상대가 너무 잘나갈 때 느끼는 상대적 박탈감이 나를 위축시킬 수 있습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          조언
        </h2>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          비견의 관계는 나를 단단히 세우는 구조를 형성하지만, 그 힘이 과도해질 경우 타인을 배제하는 방향으로 작용할 수 있습니다. 이 관계 속에서 강화된 주체성에 타인의 의견을 수용하는 균형과, 성과를 함께 나누는 태도를 더할 때, 비견은 고립이 아니라 확장으로 작용하게 됩니다.
        </p>
        </div>
      </div>
    </main>
  );
}
