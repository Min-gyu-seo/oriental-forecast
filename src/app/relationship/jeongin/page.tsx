import Link from "next/link";

export default function JeonginPage() {
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
          정인(正印)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          사주명리학에서 정인(正印)은 나를 생(生)해주는 오행 중 음양이 다른 성분을 말합니다. 정인은 만물을 길러내는 자애로운 어머니의 마음이자 고결한 지혜를 상징합니다. 육친으로는 &apos;친어머니&apos;를 상징하며, 사회적으로는 학문, 자격증, 문서, 도덕성, 보편적 진리를 의미합니다. 십신 중 가장 안정적이고 품위 있으며 보호적 성향을 띠는 관계입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          정인(正印)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            함수(含受)의 미덕과 학업 역량
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>지혜의 샘물:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정인의 관계를 맺게 되면 외부의 지식과 조언을 거부감 없이 흡수하는 태도가 도출됩니다. 마치 마른 대지가 단비를 받아들이듯 자연스럽게 배우려는 자세가 형성됩니다. 이 관계는 단기적 기술 습득보다는 정통 학문·이론·철학적 탐구에 대한 관심을 강화시키며, 깊이 있는 이해로 나아가게 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            고결한 선비 정신과 명예심
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>청렴한 기준의 형성:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정인의 관계 속에서는 도덕적 기준과 명예 의식이 강화됩니다. 상대의 가치관과 태도를 통해 스스로의 품위를 지키려는 의식이 형성되며, 부정한 이익보다는 정당성과 원칙을 중시하려는 경향이 도출됩니다. 관계를 통해 &apos;어떻게 사는 것이 옳은가&apos;에 대한 내적 기준이 정립됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            천우신조(天佑神助)의 낙천성과 의존성
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>인덕(印德)의 체험:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            정인의 관계를 경험하면 위기 속에서도 보호받고 있다는 심리적 안정이 강화됩니다. &quot;누군가 나를 지지해 준다&quot;는 확신이 낙천성을 도출합니다. 다만, 이 보호가 과도할 경우 스스로 길을 개척하기보다 도움을 기다리는 수동성이 강화될 가능성도 함께 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 정인의 통상적 작용
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
                <td className="p-3">친어머니, 외가 식구, 나를 도와주는 윗사람</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">스승, 멘토, 후원자, 나를 무조건 지지해 주는 팬</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">부동산 문서, 자격증, 학위, 계약서, 저작권, 도덕적 가치</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">교육자, 학자, 종교인, 공직자, 문화예술가, 작가</td>
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
            심리적 안정과 자존감의 회복
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>무조건적인 수용:</strong> 정인의 관계를 맺으면, 비판보다 수용을 경험하게 됩니다. 있는 그대로 인정받는 체험이 반복되면서 자존감이 회복되고 정서적 안정감이 강화됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>긍정적 자아 형성:</strong> 실수나 실패를 겪더라도 관계 속에서 따뜻한 지지를 받으면, 자기 비난 대신 성장의 관점이 형성됩니다. 이로 인해 세상을 보다 긍정적으로 인식하는 태도가 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            지적 성장과 올바른 삶의 가이드
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>정통 멘토링:</strong> 정인의 관계는 단순한 보호를 넘어 지적·윤리적 방향성을 제시합니다. 이 관계를 통해 학문적 성취, 자격 취득, 자기계발에 대한 동기가 강화되며, 올바른 길을 가려는 의식이 뚜렷해집니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            실질적인 문서와 혜택의 전달
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>문서 인연의 활성화:</strong> 정인은 문서·자격·계약을 상징합니다. 이 관계를 통해 자격증 취득, 학위 획득, 유리한 계약 체결 등 실질적 혜택이 도출될 가능성이 높아집니다. 보호적 인맥과 배경이 나의 기반을 안정시키는 방향으로 작용합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>의존성 심화:</strong> 지지가 과도하면 자율성이 약화될 수 있습니다. 스스로 판단하고 실행하는 힘이 줄어들 가능성을 경계해야 합니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>현실감각 저하:</strong> 이상과 명예에 집중하다 보면 현실적 성과나 경제적 문제를 등한시할 수 있습니다. 실행과 연결되지 않는 지식은 공허해질 수 있습니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;자신이 키워낸 가능성&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>자부심과 보람:</strong> 정인 관계 속에서 나는 상대가 투자한 시간과 애정의 결과물로 인식될 수 있습니다. 나의 성장과 성취는 상대에게 큰 보람을 안겨줍니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;보호하고 싶은 존재&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>보호 본능의 자극:</strong> 내가 다소 돌발적이거나 자유롭게 표현할수록, 상대는 더 보호하고 싶어질 수 있습니다. 이로 인해 상대는 기꺼이 자신의 자원과 에너지를 나에게 투자하려는 태도를 보입니다.
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
                  <td className="p-3 font-semibold text-center">에너지 고갈</td>
                  <td className="p-3">당신이 지나치게 요구만 하거나 감정 기복을 보이면, 상대방은 정신적으로 탈진(Burn-out)할 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">반항과 간섭</td>
                  <td className="p-3">상대의 조언이 당신에게 구속으로 느껴질 때 생기는 반항심은, 상대를 깊이 실망시켜 관계를 해칠 수 있습니다.</td>
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
          정인의 관계는 나의 기반을 단단히 하고 지혜를 축적하게 만드는 구조입니다. 그러나 보호와 수용이 실행으로 이어지지 않으면 성장은 정체될 수 있습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 얻은 지혜를 밖으로 표현하고(食傷), 현실적 성과와 연결하려는 노력이 더해질 때, 정인의 관계는 단순한 보호를 넘어 세상을 밝히는 힘으로 확장됩니다.
        </p>
        </div>
      </div>
    </main>
  );
}
