import { course } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Logo variant="full" className="h-10 sm:h-12" />
          <div className="hidden h-10 w-px bg-white/15 sm:block" />
          <div>
            <p className="font-display text-xl tracking-wide text-white">
              {course.brand}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/45">
              {course.tagline} · {course.partner}
            </p>
          </div>
        </div>
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {course.partner} · Clínicas técnicas com{" "}
          {course.brand}
        </p>
      </div>
    </footer>
  );
}
