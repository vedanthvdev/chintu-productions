import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("reveal max-w-3xl", className)}>
      <p className="label">{eyebrow}</p>
      <h2 className="display mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] leading-[1.08] sm:mt-5">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-body sm:mt-5">{description}</p>
      ) : null}
    </div>
  );
}
