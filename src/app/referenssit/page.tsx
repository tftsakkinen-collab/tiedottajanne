import type { Metadata } from "next";
import ChannelReferences from "@/components/ChannelReferences";

export const metadata: Metadata = {
  title: "Referenssikanavat & Case-Esimerkit | Tiedottajanne Oy",
  description: "Tutustu Tiedottajanne Oy:n suomalaisiin ja kansainvälisiin YouTube- ja somereferensseihin (@tiedottajanne, @ft_sakkinen, @pt_sakkinen).",
};

export default function ReferenssitPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <ChannelReferences />
    </div>
  );
}
