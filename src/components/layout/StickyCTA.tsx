"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { course } from "@/lib/data";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.offsetHeight - 400;
      setShow(y > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-40 p-4 sm:p-5"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/15 bg-ink/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:px-5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {course.subtitle}
              </p>
              <p className="truncate text-xs text-white/45">
                {course.brand} · {course.partnerShort}
              </p>
            </div>
            <Button href="#inscricao" className="!px-5 !py-2.5 shrink-0">
              Quero vaga
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
