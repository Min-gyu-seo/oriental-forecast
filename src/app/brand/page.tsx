import Image from "next/image";

export default function BrandPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-6 sm:p-8 overflow-hidden">
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[min(90vw,70rem)] h-[min(80vh,50rem)] bg-contain bg-center bg-no-repeat opacity-25 blur-[6px]"
          style={{ backgroundImage: "url(/five-elements-bg.png)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <p
          className="text-center text-[#2D2D2D] font-bold leading-relaxed mb-8"
          style={{ fontSize: "18pt" }}
        >
          오리엔탈포캐스트는 여러분과 함께 운명을 만들어 갑니다.
        </p>
        <div className="rounded-2xl bg-white/95 shadow-[0_4px_14px_rgba(0,0,0,0.08)] p-6 sm:p-8 border border-[#E8E5DD] text-[#2D2D2D] leading-relaxed">
          <p
            className="text-center font-bold"
            style={{ fontSize: "11pt" }}
          >
            이 세상 모든 사람은 자신만의 운명 기운을 가지고 있습니다. 그 기운은 시간이 지나며 성격, 선택, 관계, 환경의 형태로 드러나고 그 축적된 상호작용이 오늘의 삶과 앞으로의 운세를 만들어 갑니다.
          </p>
          <div className="flex justify-center my-10">
            <Image
              src="/logo.png"
              alt="오리엔탈포캐스트 로고"
              width={220}
              height={88}
              className="object-contain"
            />
          </div>
          <p
            className="text-center leading-relaxed"
            style={{ fontSize: "11pt" }}
          >
            오리엔탈포캐스트는 생년월일시를 묻지 않습니다. 점을 치지 않습니다. 대신, 나의 성향, 반복되는 관계 패턴, 주변 인물의 특성과 상호작용 등이 현실에 드러난 결과들을 분석하여 거꾸로 타고난 기운과 운의 구조를 파악합니다. 이를 통해서 명확한 오행/천간 분석 결과와 상호작용을 알려 드립니다. 단순히 언제 잘 될까? 하고 수동적으로 운명을 묻는 것이 아니라, 지금 어떻게 행동해야 우리 관계가 잘 풀리게 되는가? 미래 더 나은 결과를 위해서 현재 어떤 선택을 해야 하는지? 상호 충돌 지점과 이유, 조정 방식, 개선 방법은 무엇인지 본인이 운명을 펼쳐가는 주체라는 시각에서 조언을 드립니다.
          </p>
        </div>
      </div>
    </main>
  );
}
