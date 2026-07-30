"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "lime";
  className?: string;
  onClick?: () => void;
  /** Abre em outra aba (grupo do WhatsApp, redes) — já com rel de segurança. */
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-accent text-black hover:bg-accent-hot focus-visible:outline-accent",
    lime: "bg-lime text-black hover:bg-lime/90 focus-visible:outline-lime",
    ghost:
      "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10 focus-visible:outline-white",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
