import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import WhatsAppFormModal from "./WhatsAppFormModal";

interface WhatsAppFormContextType {
  openForm: (whatsappUrl: string) => void;
}
const WhatsAppFormContext = createContext<WhatsAppFormContextType | null>(null);
export const useWhatsAppForm = () => {
  const ctx = useContext(WhatsAppFormContext);
  if (!ctx) throw new Error("useWhatsAppForm must be used within WhatsAppFormProvider");
  return ctx;
};
export const WhatsAppFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const openForm = useCallback((whatsappUrl: string) => {
    setTargetUrl(whatsappUrl);
    setIsOpen(true);
  }, []);
  return (
    <WhatsAppFormContext.Provider value={{ openForm }}>
      {children}
      <WhatsAppFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        whatsappUrl={targetUrl}
      />
    </WhatsAppFormContext.Provider>
  );
};
