import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-[0.06em] transition-colors duration-300",
        variant === "primary" &&
          "bg-heading text-canvas hover:bg-gold-strong",
        variant === "ghost" &&
          "border border-hairline text-heading hover:border-gold hover:text-gold-strong",
        className,
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
