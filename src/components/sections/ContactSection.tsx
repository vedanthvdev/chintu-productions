import { site } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ContactSection() {
  return (
    <section id="contact" className="section relative">
      <div className="shell">
        <div className="reveal grid gap-10 border border-hairline bg-surface-raised px-6 py-12 sm:px-10 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-14 md:py-20">
          <div>
            <p className="label">Contact</p>
            <h2 className="display mt-5 text-[clamp(1.85rem,4.5vw,3.25rem)] leading-[1.08]">
              {site.contact.heading}
            </h2>
            <p className="mt-5 max-w-xl text-body">{site.contact.body}</p>
          </div>

          <div className="flex flex-col justify-end gap-6">
            <ButtonLink href={site.contact.primaryHref} className="w-full">
              {site.contact.primaryLabel}
            </ButtonLink>

            <ul className="space-y-3">
              {site.social.map((link) => (
                <li key={link.href} className="flex justify-between gap-4">
                  <span className="label">{link.label}</span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-strong transition-colors hover:text-heading"
                  >
                    {link.handle}
                  </a>
                </li>
              ))}
              <li className="flex justify-between gap-4">
                <span className="label">Email</span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm break-all text-gold-strong transition-colors hover:text-heading"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>

            <p className="text-sm text-subtle">{site.contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
