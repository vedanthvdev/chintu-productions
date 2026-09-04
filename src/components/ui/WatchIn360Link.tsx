import { ButtonLink } from "@/components/ui/ButtonLink";
import { youtubeWatchUrl } from "@/lib/youtube";
import { cn } from "@/lib/cn";

type WatchIn360LinkProps = {
  youtubeId: string;
  title: string;
  variant?: "inline" | "button";
  className?: string;
};

export function WatchIn360Link({
  youtubeId,
  title,
  variant = "inline",
  className,
}: WatchIn360LinkProps) {
  const href = youtubeWatchUrl(youtubeId);
  const label = "Watch in 360° on YouTube";
  const accessibleName = `Watch ${title} on YouTube`;

  if (variant === "button") {
    return (
      <ButtonLink
        href={href}
        variant="ghost"
        className={className}
        aria-label={accessibleName}
      >
        {label}
      </ButtonLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleName}
      className={cn(
        "text-gold-strong underline underline-offset-4 transition-colors hover:text-heading",
        className,
      )}
    >
      {label}
    </a>
  );
}
