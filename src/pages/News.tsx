import { Link } from "react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { newsArticles } from "@/data/news";

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="最新消息"
        description="記錄大域工程的研討會參與、技術分享與專業交流。"
      />

      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Professional Activities"
              title="專業活動"
              description="從會場交流到工程案例分享，持續累積專業對話與實務經驗。"
            />
          </Reveal>

          <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2">
            {newsArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06} className="h-full">
                <Link
                  to={`/news/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-4"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-brand-950">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-caption">
                      <span className="rounded-full bg-emerald2-50 px-3 py-1 font-bold text-emerald2-700">
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-2 font-semibold text-slate-600">
                        <CalendarDays aria-hidden="true" className="h-4 w-4" />
                        <time dateTime={article.date}>{article.dateLabel}</time>
                      </span>
                    </div>
                    <h3 className="editorial-heading mt-5 text-2xl font-extrabold leading-relaxed text-brand-900 transition-colors group-hover:text-emerald2-600 lg:text-[28px]">
                      {article.title}
                    </h3>
                    <p className="editorial-copy mt-4 text-body text-slate-600">{article.excerpt}</p>
                    <div className="mt-auto pt-7">
                      <span className="action-button action-primary w-full">
                        查看活動紀錄
                        <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
