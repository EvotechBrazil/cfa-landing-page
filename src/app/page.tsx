import { redirect } from "next/navigation";

/** Domínio raiz → landing da clínica */
export default function RootPage() {
  redirect("/clinica");
}
