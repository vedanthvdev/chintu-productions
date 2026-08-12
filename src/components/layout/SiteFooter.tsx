import { CONTACT_EMAIL, site } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="shell flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="display text-2xl">{site.brand.name}</p>
          <p className="mt-2 max-w-xs text-sm text-subtle">
            {site.brand.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {site.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body transition-colors hover:text-gold-strong"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-body transition-colors hover:text-gold-strong"
            >
              Email
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-gold-strong transition-colors hover:text-heading"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="shell border-t border-hairline py-6">
        <p className="text-xs text-subtle">
          © {year} {site.brand.name}. All rights reserved. Operated by{" "}
          {site.brand.company}.
        </p>
      </div>
    </footer>
  );
}
