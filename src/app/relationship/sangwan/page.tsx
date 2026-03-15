import Link from "next/link";

export default function SangwanPage() {
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
          상관(傷官)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 상관(傷官)은 내가 생(生)해주는 오행 중 음양이 다른 성분을 말합니다. 육친으로는 여성에게는 &apos;자식&apos;, 남성에게는 &apos;할머니&apos;를 상징하며, 사회적으로는 달변, 예술적 감각, 혁신, 반항, 추론 능력을 의미합니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          상관은 기존 질서를 흔드는 표현의 관계입니다. 식신이 자연스러운 생산의 흐름이라면, 상관은 강렬한 표출과 비판을 통해 변화를 일으키는 구조입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상관(傷官)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            천부적인 재치와 화려한 언변
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>방론(傍論)의 미학:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            상관의 관계를 맺게 되면 사고의 전환 속도가 빨라지고, 말과 표현이 한층 과감해집니다. 상대의 자극을 통해 임기응변 능력이 강화되고, 대중 앞에서 자신을 드러내는 감각이 도출됩니다. 평범함보다 차별화를 추구하는 태도가 관계 속에서 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            비판적 사고와 혁명가적 기질
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>파사현정(破邪顯正)의 정신:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            상관 관계는 기존의 권위와 틀을 점검하게 만듭니다. 부당하거나 낡은 구조를 비판하려는 의식이 강화되며, 개혁적 시각이 도출됩니다. 이 과정에서 정의감과 표현 욕구가 동시에 자극됩니다. 다만, 날카로운 언사가 갈등을 초래할 가능성도 함께 증폭됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            다예다재(多藝多才)와 예술적 감성
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>발군의 심미안:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            상관의 관계를 경험하면 감각과 미적 기준이 예민해집니다. 기존의 것을 재구성하거나 창조적으로 파괴하는 사고가 강화되며, 예술·기획·디자인 등 창의적 영역에서 두각을 드러낼 가능성이 높아집니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 상관의 통상적 작용
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
                <td className="p-3">자식(여명), 할머니, 장모의 형제.</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">후배, 제자, 나의 재능을 추종하는 팬, 언론인, 법조인, 중개인.</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">혁명, 반항, 언론, 유흥, 기술적 도약, 예술, 시비(是非).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">변호사, 언론인, 연예인, 중개업, 창의적 설계자, 강사, 비평가.</td>
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
            표현의 자유와 매력의 발산
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>카리스마의 전염:</strong> 상관 관계 속에서는 억눌린 재능이 표면으로 드러납니다. 상대를 통해 자신을 드러내는 법을 배우게 되며, 존재감이 강화됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>지적 유희:</strong> 상대는 나에게 끊임없는 질문과 자극을 던집니다. 이로 인해 사고의 폭이 넓어지고, 고정관념을 깨는 새로운 시각이 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            구습의 타파와 변화의 시작
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>혁신의 동력:</strong> 상관 관계는 안일함을 흔들어 깨웁니다. 상대의 과감함을 통해 새로운 선택을 시도하게 되며, 환경 전환의 계기를 맞이할 수 있습니다. 위험을 동반하더라도 변화를 감행하려는 결단력이 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            실질적인 재능의 부가가치 창출
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>브랜딩과 확산:</strong> 상관은 나의 능력을 화려하게 드러내는 역할을 합니다. 상대와의 협력을 통해 기술이나 지식이 대중적 가치로 전환되고, 홍보·마케팅적 효과가 강화됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>상관견관(傷官見官)의 위험:</strong> 상대의 거침없는 태도가 나의 사회적 지위나 조직 내 관계를 흔들 수 있습니다. 구설수나 권위와의 충돌이 발생할 가능성을 경계해야 합니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>감정적 피로도:</strong> 자극이 과도할 경우 정서적 소모가 커질 수 있습니다. 화려함에 집중하다가 내실이 약화될 위험도 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;자신을 이해해 주는 안전지대&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>자애로운 수용:</strong> 상대는 나 앞에서 자신의 날카로운 면을 내려놓을 수 있습니다. 나는 그 표현을 받아들이고 정리해 주는 역할을 하게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;날카로움을 다듬어 주는 존재&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>품격의 보완:</strong> 내가 제시하는 기준과 통찰은 상대의 과격함을 정제하는 역할을 합니다. 그 결과 상대의 재능이 단순한 반항이 아니라 가치 있는 메시지로 승화될 수 있습니다.
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
                  <td className="p-3 font-semibold text-center">속박과 반항</td>
                  <td className="p-3">당신의 올바른 조언이 상대방에게는 잔소리나 구속으로 느껴져 돌발적인 반항을 일으킬 수 있습니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">에너지의 설기</td>
                  <td className="p-3">끊임없이 요구하고 사고를 치는 상대방을 수습하느라 당신의 정신적 에너지가 탈진될 수 있습니다.</td>
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
          상관의 관계는 나의 표현력을 극대화하고 세상과 연결시키는 강력한 통로입니다. 그러나 절제 없이 발산될 경우 갈등을 초래할 수 있습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 강화된 재능을 타인과의 조화(財星)와 연결하고, 스스로를 통제하는 균형(官星)을 함께 갖출 때, 상관의 에너지는 단순한 반항을 넘어 시대를 이끄는 창조적 힘으로 확장됩니다.
        </p>
        </div>
      </div>
    </main>
  );
}
