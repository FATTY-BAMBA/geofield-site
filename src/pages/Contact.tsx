import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Printer, Send } from "lucide-react";
import { company, offices } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("請填寫姓名、Email 與訊息內容。");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Email 格式似乎不正確，請再確認。");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`網站洽詢 — ${form.name}`);
    const body = encodeURIComponent(
      `姓名：${form.name}\nEmail：${form.email}\n電話：${form.phone || "（未填寫）"}\n\n訊息內容：\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-[15px] text-brand-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald2-500 focus:bg-white focus:ring-4 focus:ring-emerald2-500/15";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="聯絡我們"
        description="若您有任何工程需求、疑問或建議，歡迎留下訊息，我們將盡速與您聯繫。"
      />

      <section className="bg-sand-50 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          {/* Form */}
          <Reveal direction="left">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-sand-200 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald2-500/10 text-emerald2-500">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-6 text-2xl font-black text-brand-900">訊息已為您準備好</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                    我們已開啟您的郵件軟體並帶入訊息內容，送出後我們將盡速回覆。
                    若未自動開啟，歡迎直接來信 {company.email} 或致電 (07) 229-5922。
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-xl border-2 border-brand-900 px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:bg-brand-900 hover:text-white"
                  >
                    再寫一封
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 className="text-xl font-black text-brand-900">線上洽詢</h3>
                  <p className="mt-2 text-sm text-slate-500">填寫以下表單，我們將於營業時間內盡速回覆您。</p>
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-brand-900">
                        姓名 <span className="text-emerald2-500">*</span>
                      </label>
                      <input value={form.name} onChange={update("name")} className={inputCls} placeholder="您的姓名" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-brand-900">聯絡電話</label>
                      <input
                        value={form.phone}
                        onChange={update("phone")}
                        className={inputCls}
                        placeholder="手機或市話"
                        type="tel"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-bold text-brand-900">
                        Email <span className="text-emerald2-500">*</span>
                      </label>
                      <input
                        value={form.email}
                        onChange={update("email")}
                        className={inputCls}
                        placeholder="name@example.com"
                        type="email"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-bold text-brand-900">
                        訊息內容 <span className="text-emerald2-500">*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={update("message")}
                        rows={5}
                        className={`${inputCls} resize-y`}
                        placeholder="請簡述您的工程需求或問題…"
                      />
                    </div>
                  </div>
                  {error && <p className="mt-4 text-sm font-semibold text-red-500">{error}</p>}
                  <div className="mt-7 text-right">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald2-500 px-8 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-emerald2-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald2-400"
                    >
                      送出訊息
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal direction="right" delay={0.1}>
            <div className="space-y-5">
              {offices.map((o) => (
                <div key={o.name} className="rounded-3xl bg-white p-7 ring-1 ring-sand-200">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-black text-brand-900">{o.name}</h4>
                    <span className="text-[9px] font-bold tracking-[0.16em] text-slate-400 uppercase">{o.nameEn}</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <p className="flex gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-500" />
                      {o.address}
                    </p>
                    <p className="flex gap-2.5">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-500" />
                      <a href={`tel:${o.tel.replace(/[^\d]/g, "")}`} className="transition-colors hover:text-brand-900">
                        {o.tel}
                      </a>
                    </p>
                    {o.fax && (
                      <p className="flex gap-2.5">
                        <Printer className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-500" />
                        {o.fax}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl bg-brand-950 p-7 text-white">
                <div className="space-y-3 text-sm">
                  <p className="flex gap-2.5 text-white/80">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-400" />
                    <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                      {company.email}
                    </a>
                  </p>
                  <p className="flex gap-2.5 text-white/80">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-400" />
                    營業時間：{company.hours}
                  </p>
                </div>
                <div className="mt-5 rounded-xl bg-white/5 px-4 py-3 text-[13px] leading-relaxed text-white/60 ring-1 ring-white/10">
                  急件或現場勘查需求，建議直接來電，我們將優先為您安排。
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
