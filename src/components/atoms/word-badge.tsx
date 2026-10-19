import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "border text-xs leading-snug font-semibold uppercase px-[clamp(0.625rem,0.5rem+0.25vw,0.875rem)] py-[clamp(0.25rem,0.2rem+0.1vw,0.375rem)] rounded-full",
  {
    variants: {
      variant: {
        light:
          "text-[#222222] border-[#222222] dark:text-white dark:border-white",
        dark: "text-[#222222] border-[#222222]",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  word: string;
  icon?: React.ReactNode;
}

export default function WordBadge(props: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({ variant: props.variant }),
        "inline-flex items-center gap-1.5 max-w-full [&>span]:break-words [&>span]:min-w-0"
      )}
    >
      {props.icon}
      <span>{props.word}</span>
    </span>
  );
}
