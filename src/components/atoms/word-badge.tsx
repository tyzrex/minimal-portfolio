import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "border text-xs md:text-sm font-semibold uppercase py-2 px-5 rounded-full",
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
        "flex items-center "
      )}
    >
      {props.icon}
      <span>{props.word}</span>
    </span>
  );
}
