import { services, site } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="section relative bg-surface">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title="What we film"
          description="Four things, done properly. Most projects combine two or three of them."
        />

        <div className="mt-12 border-t border-hairline sm:mt-14">
          {services.map((service) => (
            <article
              key={service.id}
              className="reveal grid gap-5 border-b border-hairline py-8 sm:py-10 md:grid-cols-[4rem_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10"
            >
              <p className="label text-gold">{service.number}</p>
              <div>
                <h3 className="display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-body">{service.description}</p>
              </div>
                <ul className="space-y-2 self-center">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-sm text-body"
                  >
                    <span aria-hidden className="text-gold">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 max-w-2xl border-l-2 border-gold pl-6">
          <p className="label text-gold">Pricing</p>
          <p className="mt-3 text-body">{site.pricingNote}</p>
        </div>
      </div>
    </section>
  );
}
