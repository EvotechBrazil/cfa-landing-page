import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** full wordmark or compact lion mark */
  variant?: "full" | "mark";
  priority?: boolean;
};

export function Logo({ className, variant = "full", priority }: Props) {
  const isMark = variant === "mark";

  return (
    <Image
      src={isMark ? "/images/logo-mark.png" : "/images/logo.png"}
      alt="CrossFit Arapongas"
      width={isMark ? 120 : 280}
      height={isMark ? 146 : 126}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        isMark ? "h-9 w-auto sm:h-10" : "h-9 w-auto sm:h-11",
        className,
      )}
    />
  );
}
