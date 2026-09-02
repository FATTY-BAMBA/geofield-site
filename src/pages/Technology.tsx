import { Link } from "react-router";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CloudRain,
  MapPinned,
  Radio,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ASSET_DIR = "/images/technology/kantaro";

const systemParts = [
  {
    icon: Activity,
    title: "傾斜感測",
    text: "捕捉坡面表層旋轉角度，以變化率辨識崩塌前的加速趨勢。",
  },
  {
    icon: CloudRain,
    title: "土壤水分",
    text: "觀測降雨入滲引起的含水量與介電常數變化，補足單一位移訊號。",
  },
  {
    icon: Radio,
    title: "無線傳輸",
    text: "依設定週期自動回傳資料，支援全天候、遠端且連續的監測。",
  },
];

const network = [
  ["9", "地表傾滑計 ZT"],
  ["8", "傾斜觀測管 B"],
  ["15", "沉陷觀測點 SM"],
  ["2", "結構傾度盤 TI"],
  ["1", "雨量計"],
];

const comparison = [
  ["建置過程", "須調度引孔機具進場", "以手持工具施作即可"],
  ["空間解析度", "以單點為主，可能出現監測死角", "可高密度網狀布設，取得面狀資訊"],
  ["資料即時性", "多需人工至現地收測", "自動傳輸，支援全天候監控"],
  ["環境影響", "通常須配合工作便道", "設備輕巧，現地擾動較低"],
  ["災後續測", "管體剪斷後即無法續測", "重新固定鋼棒後較容易恢復監測"],
];

const warningStages = [
  {
    number: "01",
    title: "平常",
    english: "Safe",
    text: "土壤含水量低，傾斜角沒有明顯變化。",
    threshold: "基準狀態",
    color: "bg-emerald2-500",
  },
  {
    number: "02",
    title: "降雨入滲",
    english: "Observe",
    text: "含水量開始上升，持續比對傾斜角變化。",
    threshold: "< 0.01°/hr",
    color: "bg-amber-400",
  },
  {
    number: "03",
    title: "注意／警戒",
    english: "Caution",
    text: "傾斜變化加速，進入管理值警戒範圍。",
    threshold: "≥ 0.01°/hr",
    color: "bg-orange-500",
  },
  {
    number: "04",
    title: "坡面崩塌",
    english: "Evacuation",
    text: "高變化率狀態，作為現地應變與避難決策參考。",
    threshold: "≥ 1.0°/hr",
    color: "bg-red-500",
  },
];

export default function Technology() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-brand-950 pt-[72px] lg:min-h-[650px]">
        <img
          src={`${ASSET_DIR}/hero-field-monitoring.webp`}
          alt="坡地自動監測設備現地布設情境"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-transparent to-brand-950/20" />
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        <div className="relative mx-auto flex min-h-[488px] max-w-7xl items-center px-5 py-16 lg:min-h-[578px] lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <nav className="flex items-center gap-1.5 text-[13px] text-white/50">
                <Link to="/" className="transition-colors hover:text-white">首頁</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-semibold text-emerald2-300">監測技術</span>
              </nav>
              <p className="mt-8 text-xs font-bold tracking-[0.3em] text-emerald2-300 uppercase">
                Monitoring Technology
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                自計化坡地
                <br />
                地表傾滑監測
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                整合坡面傾斜、土壤水分與無線傳輸，以高密度監測網掌握淺層坡地變形趨勢。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[["24/7", "自動監控"], ["0.0025°", "傾斜解析度"], ["高密度", "面狀布設"]].map(([value, label]) => (
                  <div key={label} className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md ring-1 ring-white/15">
                    <span className="font-black text-white">{value}</span>
                    <span className="ml-2 text-xs text-white/55">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald2-500 to-transparent" />
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Surface Monitoring"
              title="為淺層、降雨型坡地災害補上監測缺口"
              description="傳統土中傾斜管能提供地下位移資訊，但鑽設成本、單點布設與人工收測也限制了監測密度與即時性。地表傾滑監測著重坡面旋轉與加速趨勢，可與既有儀器形成互補。"
            />
            <div className="mt-7 space-y-3">
              {[
                "以手持工具完成設置，降低大型機具進場需求",
                "適合多點布設，從單點資訊延伸至坡面分區判讀",
                "災後可重新固定並恢復監測，提高續測韌性",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald2-500" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["24/7", "自動監控"],
                ["0.0025°", "傾斜解析度"],
                ["0.04", "mm/m 解析度"],
                ["50–100", "cm 參考插入深度"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-sand-200">
                  <p className="text-2xl font-black tracking-tight text-brand-900">{value}</p>
                  <p className="mt-2 text-xs font-bold leading-relaxed text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="System Architecture"
              title="三種訊號，建立連續監測脈絡"
              description="將坡面變形與降雨入滲資訊放在同一條時間軸上，協助工程團隊辨識變化速度、現地狀態與管理需求。"
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-sand-200 sm:p-7">
                <img
                  src={`${ASSET_DIR}/system-diagram.webp`}
                  alt="地表傾滑監測系統安裝與感測架構示意"
                  className="mx-auto max-h-[520px] w-full object-contain"
                />
                <figcaption className="mt-4 text-center text-xs leading-relaxed text-slate-400">
                  系統安裝概念示意；實際埋設深度與位置應依現地地層條件評估。
                </figcaption>
              </figure>
            </Reveal>

            <div className="space-y-4">
              {systemParts.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} direction="right" delay={index * 0.08}>
                  <article className="rounded-2xl bg-white p-6 ring-1 ring-sand-200">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-emerald2-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-black text-brand-900">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Warning Logic"
              title="從降雨入滲到坡面崩塌的分級判讀"
              description="依簡報所列管理架構，綜合土壤含水狀態與傾斜角變化率，將現地狀態分為安全、注意／警戒與避難階段。實際管理值仍須依場址條件校核。"
              dark
            />
          </Reveal>
          <div className="relative mt-12 grid gap-4 lg:grid-cols-4">
            <div className="absolute top-12 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-emerald2-500 via-amber-400 to-red-500 lg:block" />
            {warningStages.map((stage, index) => (
              <Reveal key={stage.number} delay={index * 0.08}>
                <article className="relative h-full overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-white/10">
                  <div className={`absolute inset-x-0 top-0 h-1 ${stage.color}`} />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-slate-300">{stage.number}</span>
                    <span className="rounded-full bg-sand-100 px-3 py-1 text-[10px] font-black tracking-wider text-brand-900 uppercase">
                      {stage.english}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-black text-brand-900">{stage.title}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-relaxed text-slate-500">{stage.text}</p>
                  <p className="mt-6 border-t border-sand-200 pt-4 font-mono text-sm font-black text-brand-900">
                    {stage.threshold}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Field Application"
              title="現地監測案例：以多類儀器交叉驗證"
              description="案例位於山崩與地滑地質敏感區，舊崩積層受溪流侵蝕與坡腳淘空影響，再次產生活動並形成 A–I 九個獨立滑動分區。"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {network.map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.05}>
                <div className="h-full rounded-2xl bg-sand-50 p-5 text-center ring-1 ring-sand-200">
                  <p className="text-3xl font-black text-brand-900">{value}</p>
                  <p className="mt-2 text-xs font-bold leading-relaxed text-slate-500">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <figure className="h-full overflow-hidden rounded-3xl bg-sand-50 p-4 ring-1 ring-sand-200">
                <img
                  src={`${ASSET_DIR}/case-background.webp`}
                  alt="監測案例地質背景與九個滑動分區"
                  className="h-full w-full rounded-2xl object-contain"
                />
              </figure>
            </Reveal>
            <Reveal direction="right">
              <div className="flex h-full flex-col rounded-3xl bg-brand-900 p-7 text-white lg:p-9">
                <MapPinned className="h-7 w-7 text-emerald2-300" />
                <h3 className="mt-5 text-2xl font-black">一年、24 次監測</h3>
                <p className="mt-4 text-sm leading-loose text-white/65">
                  梅雨季期間，現地發生多處小規模坡面坍滑。ZT-4、ZT-5、ZT-7 與 ZT-8 的量測結果進入簡報所列警戒值範圍；其中 ZT-4 與 ZT-8 所在位置發生坡面滑動，並造成儀器嚴重傾斜或損壞。
                </p>
                <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-xs font-bold tracking-[0.18em] text-emerald2-300 uppercase">Key finding</p>
                  <p className="mt-2 text-base font-bold leading-relaxed">
                    地表傾滑計與傳統傾斜管的成果，皆指出滑動分區 C 較為活躍。
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-sand-200 sm:p-7">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-sand-200 pb-5">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-emerald2-600 uppercase">Monitoring layout</p>
                    <h3 className="mt-2 text-xl font-black text-brand-900">監測網配置</h3>
                  </div>
                  <span className="rounded-full bg-sand-100 px-3 py-1.5 text-xs font-bold text-slate-500">ZT · BH · SM · TI · 雨量計</span>
                </div>
                <img
                  src={`${ASSET_DIR}/monitoring-map.webp`}
                  alt="地表傾滑計、傾斜觀測管、沉陷觀測點、結構傾度盤及雨量計配置圖"
                  className="w-full object-contain"
                />
                <figcaption className="mt-5 border-t border-sand-200 pt-4 text-xs leading-relaxed text-slate-400">
                  原始監測配置圖經裁切與清晰化處理；測點位置、編號與圖例內容均維持原始資料。
                </figcaption>
              </figure>
            </Reveal>

            <Reveal direction="right">
              <aside className="flex h-full flex-col gap-4 rounded-3xl bg-sand-50 p-6 ring-1 ring-sand-200 lg:p-7">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-emerald2-600 uppercase">Observed response</p>
                  <h3 className="mt-2 text-xl font-black text-brand-900">觀測結果摘要</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    將複雜標註移出圖面，以分級摘要呈現事件期間的重要結果。
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 ring-1 ring-sand-200">
                  <p className="text-xs font-bold text-slate-400">達警戒值範圍</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["ZT-4", "ZT-5", "ZT-7", "ZT-8"].map((station) => (
                      <span key={station} className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-black text-orange-700 ring-1 ring-orange-200">
                        {station}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 ring-1 ring-sand-200">
                  <p className="text-xs font-bold text-slate-400">發生坡面滑動</p>
                  <div className="mt-3 flex gap-2">
                    {["ZT-4", "ZT-8"].map((station) => (
                      <span key={station} className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-black text-red-700 ring-1 ring-red-200">
                        {station}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto rounded-2xl bg-brand-900 p-5 text-white">
                  <p className="text-xs font-bold tracking-[0.16em] text-emerald2-300 uppercase">Cross validation</p>
                  <p className="mt-2 text-sm font-bold leading-relaxed">
                    ZT 與傳統傾斜管成果皆顯示滑動分區 C 較為活躍。
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Complementary Monitoring"
              title="不是取代單一儀器，而是補足監測視角"
              description="地表傾滑監測著重高密度、即時與災後快速恢復；傳統傾斜管則提供地下不同深度的位移資訊。依場址風險搭配使用，能建立更完整的判讀依據。"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-sand-200">
              <div className="hidden grid-cols-[0.7fr_1fr_1fr] bg-brand-900 px-6 py-4 text-sm font-bold text-white md:grid">
                <span>比較項目</span>
                <span>傾斜觀測管</span>
                <span>地表傾滑監測</span>
              </div>
              {comparison.map(([label, conventional, surface]) => (
                <div key={label} className="grid gap-3 border-t border-sand-200 px-6 py-5 md:grid-cols-[0.7fr_1fr_1fr]">
                  <p className="font-black text-brand-900">{label}</p>
                  <p className="text-sm leading-relaxed text-slate-500">
                    <span className="mb-1 block text-xs font-bold text-slate-400 md:hidden">傾斜觀測管</span>
                    {conventional}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    <span className="mb-1 block text-xs font-bold text-emerald2-600 md:hidden">地表傾滑監測</span>
                    {surface}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-900 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <Wrench className="h-7 w-7 text-emerald2-300" />
          <h2 className="text-2xl font-black text-white">需要規劃坡地監測系統？</h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/65">
            我們可依地質條件、滑動機制與管理需求，評估監測配置與資料判讀方式。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald2-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald2-400"
          >
            聯絡我們
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
