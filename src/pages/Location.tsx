import { MapPin, Phone, Printer } from "lucide-react";
import { offices } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function Location() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="交通位置"
        description="高雄總公司、台北與宜蘭辦公室，三據點提供全台工程顧問服務。"
      />

      <section className="bg-sand-50 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
          {offices.map((o, i) => (
            <Reveal key={o.name} delay={0.08 * i}>
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-sand-200">
                <div className="p-7 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900 text-emerald2-400">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-brand-900">{o.name}</h3>
                      <p className="text-[9px] font-bold tracking-[0.16em] text-slate-400 uppercase">{o.nameEn}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{o.address}</p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                    {o.tel && (
                      <span className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald2-500" /> {o.tel}
                      </span>
                    )}
                    {o.fax && (
                      <span className="inline-flex items-center gap-2">
                        <Printer className="h-4 w-4 text-emerald2-500" /> {o.fax}
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-[340px] w-full border-t border-sand-200">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`大域工程顧問 ${o.name}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
