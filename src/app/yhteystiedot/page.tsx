import type { Metadata } from "next";
import ConsultingBookingSection from "@/components/ConsultingBookingSection";

export const metadata: Metadata = {
  title: "Tarjouspyyntö & Yhteystiedot | Tiedottajanne Oy",
  description: "Pyydä tarjous SOTE-alan videokoulutuksesta, luennosta tai tekoäly-metatietoilukoulutuksesta Janne Säkkiseltä.",
};

export default function YhteystiedotPage() {
  return (
    <div className="py-12 md:py-16 bg-[var(--bg)] min-h-screen text-[var(--text)]">
      <ConsultingBookingSection />
    </div>
  );
}
