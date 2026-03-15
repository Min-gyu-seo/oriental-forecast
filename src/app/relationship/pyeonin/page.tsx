import Link from "next/link";

export default function PyeoninPage() {
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
          편인(偏印)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 편인(偏印)은 나를 생(生)해주는 오행 중 음양이 같은 성분을 말합니다. 육친으로는 &apos;계모(繼母)&apos; 혹은 &apos;서모&apos;를 상징하며, 사회적으로는 특수 학문, 기술, 예술, 철학, 신비주의를 의미합니다. 십신 중 가장 독창적이고 예리한 통찰을 자극하는 관계입니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          정인이 보편적 보호의 구조라면, 편인은 긴장과 선별을 동반한 특수한 지적 자극의 관계입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          편인(偏印)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            비판적 사고와 독창적 학업 역량
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>역설(逆說)의 지혜:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편인의 관계를 맺게 되면, 외부의 정보를 그대로 받아들이기보다 &quot;왜 그런가?&quot;를 묻는 태도가 강화됩니다. 상대의 날카로운 시각을 접하면서 사고가 깊어지고, 남들이 보지 못하는 이면을 파악하려는 집중력이 도출됩니다. 이로 인해 제도권의 정형화된 지식보다 특수 분야나 비주류 영역에서 독창성이 발현될 가능성이 높아집니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            고독한 예술가 정신과 예민한 직관
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>고고한 고립의 기개:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편인의 관계는 나를 군중으로부터 한 걸음 떨어지게 만듭니다. 이 관계 속에서 혼자 사유하는 시간이 늘어나며, 자신만의 정신 세계가 강화됩니다. 감각과 직관이 예민해지고, 말하지 않아도 본질을 읽어내는 통찰력이 도출됩니다. 세속적 평가보다 스스로 납득하는 가치에 집중하는 태도가 형성됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            기우(杞憂)의 불안과 비범한 생존력
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>사유(思惟)의 무게:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편인의 관계를 경험하면 낙관보다는 대비 의식이 강화됩니다. 아직 오지 않은 위험을 가정하며 준비하려는 경향이 도출됩니다. 이러한 불안은 위기 상황에서 기민하게 대응하는 능력으로 전환되기도 합니다. 남의 도움보다 자신의 기술과 전문성에 의존하려는 자생력이 강화됩니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 편인의 통상적 작용
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
                <td className="p-3">계모, 서모, 유덕하지 못한 어머니, 이모, 조부</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">편향된 스승, 도인, 전문 기술자, 나를 감시하거나 긴장케 하는 윗사람</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">문서</td>
                <td className="p-3">특허권, 라이선스, 가계약서, 특수 조건이 붙은 문서, 종교 서적</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">예술가, 점술가, 의사(외과), IT 엔지니어, 심리학자, 기획가, 수사관</td>
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
            직관의 발달과 위기관리 능력 제고
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>예리한 각성:</strong> 편인의 관계 속에서는 감각이 날카로워집니다. 상대의 질문과 지적을 통해 상황을 다각도로 바라보는 능력이 강화됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>문제의 이면 파악:</strong> 상대는 장점보다 취약점을 먼저 짚어줄 가능성이 높습니다. 이는 당장은 불편하게 느껴질 수 있으나, 결과적으로 실수를 예방하고 위기를 관리하는 능력을 키우는 역할을 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            전문성 강화와 비주류적 재능의 발견
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>독특한 가이드:</strong> 편인의 관계는 보편적 성공 모델을 따르기보다, 나만의 길을 모색하게 만듭니다. 상대의 특수한 노하우나 관점을 접하면서 전문성과 차별성이 강화됩니다. 그 결과 독점적 영역을 구축할 가능성이 커집니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            실질적인 문서와 혜택의 전달
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>조건부 혜택:</strong> 편인의 관계는 무조건적 지원이 아니라 &apos;증명 후 획득&apos;의 구조를 가집니다. 나의 역량을 입증해야 권리나 기회를 얻는 과정이 따르지만, 일단 획득하면 강력한 독점적 지위를 형성할 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>의심과 불안의 증폭:</strong> 상대의 태도가 일관되지 않다고 느껴질 경우, 불신이 증폭될 수 있습니다. 지나친 해석과 추측이 관계를 경직시킬 위험이 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>정신적 피로도:</strong> 예민한 사고와 긴장 상태가 지속되면 심리적 소모가 커질 수 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>식신(食神)의 도식(倒食):</strong> 상대의 과도한 간섭이나 우려가 나의 실행력과 활동성을 억누를 수 있습니다. 생각이 과잉되면 행동이 위축될 위험이 있습니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;영감을 실현해 줄 존재&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>창의적 대리 만족:</strong> 편인 관계 속에서 나는 상대의 아이디어와 연구 성과를 현실로 구현하는 통로가 될 수 있습니다. 내가 그것을 표현하고 실현할 때, 상대는 자신의 존재 가치를 확인합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;지켜주고 싶은 재능&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>보호와 통제의 경계:</strong> 상대는 나의 가능성을 보호하려는 마음을 갖게 되지만, 그 보호가 통제로 변질될 위험도 존재합니다.
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
                  <td className="p-3 font-semibold text-center">생각의 과잉</td>
                  <td className="p-3">상대방이 당신에게 너무 몰입하여 자신의 삶을 돌보지 않거나, 당신을 통제하려 들 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">활동 저하</td>
                  <td className="p-3">상대방의 &apos;기우&apos;와 &apos;우려&apos;가 당신의 과감한 도전을 가로막는 족쇄가 될 수 있습니다.</td>
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
          편인의 관계는 나의 사고를 깊게 만들고 전문성을 강화하는 구조입니다. 그러나 생각이 실행을 압도하면 스스로 만든 틀에 갇힐 수 있습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 얻은 통찰을 현실적 성과(財星)와 연결하고, 타인이 이해할 수 있는 언어로 표현하려는 노력이 더해질 때, 편인의 자극은 고립이 아니라 선도적 창조성으로 확장됩니다.
        </p>
        </div>
      </div>
    </main>
  );
}
