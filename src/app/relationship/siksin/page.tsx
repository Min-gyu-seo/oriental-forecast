import Link from "next/link";

export default function SiksinPage() {
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
          식신(食神)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 식신(食神)은 내가 생(生)해주는 오행 중 음양이 같은 성분을 말합니다. 만물을 먹여 살리고 즐거움을 만들어내는 식신은, 나의 에너지가 밖으로 흘러가 생산과 표현으로 이어지는 관계를 의미합니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          육친으로는 여성에게는 &apos;자식&apos;, 남성에게는 &apos;장모&apos;를 상징하며, 사회적으로는 의식주, 표현력, 기술, 연구, 낙천성을 의미합니다. 십신 중 가장 평화롭고 풍요를 창출하는 구조로 작용하는 관계입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          식신(食神)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            순수한 탐구심과 전문성
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>궁리(窮理)의 즐거움:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            식신의 관계를 맺게 되면, 성과를 의식하기보다 과정 자체에 몰입하는 태도가 도출됩니다. 보상을 기대해서가 아니라 스스로 즐거워서 파고드는 집중력이 강화됩니다. 이로 인해 특정 분야에서 깊이를 갖춘 전문성이 형성되며, 장인적 성향이 관계 속에서 발현됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            낙천성과 평화주의
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>유유자적(悠悠自適)의 기질:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            식신 관계는 경쟁보다 생산과 나눔에 초점을 맞추게 합니다. 상대와의 교류 속에서 삶의 여유가 강화되고, 급박함보다는 안정적 리듬을 유지하려는 경향이 도출됩니다. 부드러운 소통과 정서적 편안함이 관계를 통해 형성됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            풍부한 표현력과 의식주의 복록
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>표현의 활성화:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            식신의 관계를 경험하면, 생각과 감정을 말·글·예술·기술로 드러내고 싶은 욕구가 강화됩니다. 나의 재능이 실제 결과물로 이어지기 쉬운 구조가 형성됩니다. 또한 삶의 기본적인 의식주 영역에서 안정과 풍요를 추구하는 방향으로 기운이 흐릅니다. 다만, 과도할 경우 안주하거나 나태해질 가능성도 함께 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 식신의 통상적 작용
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
                <td className="p-3">자식(여명), 장모(남명), 조모.</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">부하 직원, 제자, 후배, 나를 따르는 사람, 나의 재능을 사는 고객.</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">의식주, 건강, 수명, 창의성, 연구, 언어, 생산 수단.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">요리사, 교육자, 연구원, 예술가, 기술자, 요식업, 제조업.</td>
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
            활동성 강화와 창의적 영감
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>자기표현의 극대화:</strong> 식신 관계 속에서는 아이디어가 구체화되기 쉬워집니다. 상대는 나의 표현 욕구를 자극하고, 재능을 드러낼 수 있는 장을 마련해 줍니다. 이로 인해 창의성이 실제 행동으로 이어집니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>삶의 활력:</strong> 상대와의 교류는 긴장보다 즐거움을 동반합니다. 관계 자체가 활력소가 되어, 인간적인 온기와 생산적 분위기를 동시에 형성합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            실질적인 결과물과 수익 창출
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>재물(財)의 기반 형성:</strong> 식신 관계는 결과물을 만들어내는 힘을 강화합니다. 상대와의 협력 속에서 상품, 콘텐츠, 기술 등 구체적인 산출물이 형성되고, 이는 경제적 가치로 이어질 가능성이 높습니다. 생산이 곧 재물로 연결되는 구조가 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            건강과 심리적 치유
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>수명성(壽命星)의 작용:</strong> 식신 관계는 정서적 안정과 신체적 안락함을 증진시키는 방향으로 작용합니다. 함께하는 시간 속에서 스트레스가 완화되고, 일상의 균형이 회복되는 경험을 하게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>관성(官)의 제어 약화:</strong> 식신의 흐름이 강해지면 규율이나 책임을 부담으로 느낄 수 있습니다. 자유로운 분위기가 과해질 경우 조직 내 갈등으로 이어질 가능성이 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>에너지 과다 소모:</strong> 내가 상대를 생(生)하는 구조이므로, 나의 시간·재정·정서가 과도하게 흘러갈 수 있습니다. 일방적 헌신이 반복되면 허탈감을 느낄 수 있으므로 균형이 필요합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;자신의 재능을 깊이 이해해 주는 존재&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>정신적 지주:</strong> 상대는 나를 통해 자신의 표현이 의미 있는지 확인하려 합니다. 나의 분석과 통찰은 상대의 창의성을 다듬고 방향을 잡아주는 역할을 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;예민하지만 의지가 되는 멘토&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>성장의 자극제:</strong> 상대에게 나는 다소 까다롭고 신중한 존재로 인식될 수 있습니다. 그러나 결정적인 순간에 방향성을 제시하는 역할을 하며, 그로 인해 신뢰를 얻게 됩니다.
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
                  <td className="p-3 font-semibold text-center">도식(倒食) 현상</td>
                  <td className="p-3">당신의 의심이나 부정적인 조언이 상대방의 활동 의지를 꺾어버릴 수 있으니 주의가 필요합니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">정서적 긴장</td>
                  <td className="p-3">상대방은 당신의 눈치를 보게 될 수 있으며, 당신은 상대방의 가벼움이나 즉흥성을 불안하게 느낄 수 있습니다.</td>
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
          식신의 관계는 나의 에너지를 생산과 창의로 전환시키는 축복의 구조입니다. 그러나 즐거움에만 머물면 큰 성취로 이어지기 어렵습니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          관계 속에서 만들어낸 재능과 결과물을 현실적 결실(財星)과 연결하려는 의식이 더해질 때, 식신의 흐름은 일시적 즐거움이 아니라 지속 가능한 풍요로 확장됩니다.
        </p>
        </div>
      </div>
    </main>
  );
}
