import Link from "next/link";

export default function PyeonjaePage() {
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
          편재(偏財)
        </h1>

        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          사주명리학에서 편재(偏財)는 내가 극(剋)하는 오행 중 음양이 같은 성분을 말합니다. 편재는 고정된 자산이 아니라 흐름과 확장을 통해 형성되는 재물의 구조이며, 넓은 무대를 전제로 작동하는 관계입니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-4">
          정재가 안정적 축적이라면, 편재는 유동성과 확장을 통해 가치를 만들어내는 관계입니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed mb-8">
          육친으로는 남성에게는 &apos;애인&apos; 혹은 &apos;첩&apos;, 공통적으로는 &apos;아버지&apos;를 상징하며, 사회적으로는 사업 자금, 시장 장악력, 사교성, 공간 감각, 유동 자산을 의미합니다. 십신 중 가장 역동성과 수완을 자극하는 관계입니다.
        </p>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          편재(偏財)의 핵심 심리 및 성격
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            호탕한 기상과 사업가적 수완
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>경세가(經世家)의 흐름:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편재의 관계를 맺게 되면 작은 이익보다 큰 구조를 보는 시야가 열립니다. 자원을 움직이고 사람을 연결해 더 큰 가치를 창출하려는 사고가 강화됩니다. 과감한 판단과 실행력이 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            공간 지각력과 민첩한 상황 판단
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>풍운아(風雲兒)의 안목:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편재 관계는 변화의 흐름을 읽는 감각을 예민하게 만듭니다. 기회를 포착하는 속도가 빨라지고, 복잡한 이해관계를 빠르게 정리하는 능력이 강화됩니다. 상황에 맞게 유연하게 움직이는 임기응변적 대응이 도출됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            풍류와 낙천적인 사교성
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>낙도(樂道)의 확장:</strong>
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            편재의 관계 속에서는 인맥과 교류가 활발해집니다. 사람을 모으고 분위기를 이끄는 힘이 강화되며, 자유로운 활동을 선호하는 태도가 형성됩니다. 다만, 과도해질 경우 책임감이 약화되거나 투기적 성향으로 흐를 가능성도 존재합니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          사회적 관계에 빗댄 편재의 통상적 작용
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
                <td className="p-3">아버지, 애인(남명), 시어머니(여명)</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">사회</td>
                <td className="p-3">사업 파트너, 큰 손 거래처, 사교 모임의 동료, 후원자</td>
              </tr>
              <tr className="border-b border-[#2D2D2D]/10">
                <td className="p-3 font-semibold">상징</td>
                <td className="p-3">사업 소득, 유동 자산, 무역, 공간, 놀이, 투기, 시장성</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">직업</td>
                <td className="p-3">사업가, 무역업, 금융 투자가, 영업직, 기획자, 여행가, 유통업</td>
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
            야망의 고취와 무대의 확장
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>도전적 자극:</strong> 편재 관계 속에서는 안주하려는 마음이 줄어들고, 더 넓은 무대를 지향하게 됩니다. 사업 확장, 투자, 새로운 프로젝트 등 도전적 선택을 시도하게 되는 계기가 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>삶의 활력:</strong> 상대는 정적인 삶을 흔들어 놓습니다. 다양한 사람과의 교류, 활동적 일정 속에서 삶의 밀도가 높아집니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            유동적 부의 창출과 기회 포착
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>재물의 파동 구조:</strong> 편재 관계는 한 번에 큰 수익을 창출하는 구조를 만들 수 있습니다. 상대의 정보력과 네트워크를 통해 새로운 시장을 선점하거나 예상 밖의 기회를 얻게 될 가능성이 높아집니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            공간과 환경의 변화
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>이동과 확장:</strong> 편재는 정착보다 이동을 선호합니다. 해외 진출, 사업 확장, 환경 변화 등이 촉진되며, 새로운 공간 속에서 가치를 창출하는 경험을 하게 됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            관계의 주의점 (부작용)
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>불안정한 변동성:</strong> 편재의 흐름은 상승과 하락의 폭이 큽니다. 수익이 클 때는 빠르게 성장하지만, 하락기에는 손실 또한 클 수 있습니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>쾌락 중심의 소모:</strong> 과도한 유흥이나 외형적 화려함에 집중할 경우 내실이 약화될 위험이 있습니다.
          </p>
        </section>

        <hr className="border-[#E8E5DD] my-8" />

        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 ">
          상대방 입장에서 보는 나 (상대에게 나는 &apos;편관&apos;)
        </h2>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;경외심을 주는 기준&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>카리스마와 긴장:</strong> 상대는 나를 쉽게 넘볼 수 없는 존재로 인식합니다. 나는 상대의 확장 욕구에 방향성과 규율을 부여하는 위치에 서게 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>방만함의 제어:</strong> 나의 기준은 상대의 무분별한 확장을 경계하게 만드는 역할을 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#2D2D2D] font-semibold text-base mt-6 mb-2">
            &quot;성장을 요구하는 시험대&quot;
          </h3>
          <p className="text-[#2D2D2D] text-base leading-relaxed mb-2">
            <strong>단련의 구조:</strong> 나는 상대에게 더 큰 책임을 요구합니다. 상대는 그 기대에 부응하는 과정에서 자신의 역량을 단련하게 됩니다.
          </p>
          <p className="text-[#2D2D2D] text-base leading-relaxed">
            <strong>헌신적 자원 투입:</strong> 상대는 나의 권위나 목표를 인정할 경우, 자신의 재정적 자원을 적극적으로 투입하려는 태도를 보입니다.
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
                  <td className="p-3 font-semibold text-center">강압과 위축</td>
                  <td className="p-3">당신의 통제가 지나치게 일방적이면, 상대방은 자신의 활동 위축을 느끼고 심한 스트레스를 받거나 관계로부터 도망치고 싶어 합니다.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-center">극심한 소모</td>
                  <td className="p-3">상대방이 당신의 기대를 맞추기 위해 무리하게 에너지를 쓰다 보면, 재력 기반이 흔들리거나 건강(기력)이 상할 우려가 있습니다.</td>
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
          편재의 관계는 세상을 무대로 삼는 확장적 에너지를 제공합니다. 그러나 확장에는 반드시 균형이 필요합니다.
        </p>
        <p className="text-[#2D2D2D] text-base leading-relaxed">
          상대의 개척성과 활동력을 존중하면서도, 방향성과 절제를 함께 세울 때, 편재의 흐름은 단순한 파동이 아니라 지속 가능한 성공으로 이어집니다.
        </p>
        </div>
      </div>
    </main>
  );
}
