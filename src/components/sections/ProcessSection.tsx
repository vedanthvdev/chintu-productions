import { approachSteps } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="section relative">
      <div className="shell">
        <SectionHeading
          eyebrow="Process"
          title="How a booking works"
          description="Four steps from first message to finished film, with the price agreed before anything is committed."
        />

        <ol className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {approachSteps.map((step) => (
            <li key={step.id} className="reveal border-t border-hairline pt-6">
              <p className="label text-gold">{step.number}</p>
              <h3 className="display mt-4 text-2xl leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
