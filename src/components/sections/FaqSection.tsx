import { faqs } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="section relative bg-surface">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions we get asked"
        />

        <div className="mt-12 grid gap-x-16 gap-y-8 sm:mt-14 sm:gap-y-10 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="reveal border-t border-hairline pt-6">
              <h3 className="text-lg font-medium text-heading">
                {faq.question}
              </h3>
              <p className="mt-3 text-body">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
