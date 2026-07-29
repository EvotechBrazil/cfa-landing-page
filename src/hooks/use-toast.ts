type ToastInput = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

/** Lightweight toast stand-in for the box WhatsApp form (no Radix toaster). */
export function useToast() {
  return {
    toast({ title, description, variant }: ToastInput) {
      if (typeof window === "undefined") return;
      const message = description ? `${title}\n${description}` : title;
      if (variant === "destructive") {
        window.alert(message);
      } else {
        // Non-blocking success feedback; form also redirects.
        console.info("[toast]", message);
      }
    },
  };
}
