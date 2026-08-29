import TechVenturesLanding from "@/components/TechVenturesLanding";
import ProofOfWork from "@/components/ProofOfWork";
import LatestVideosAeo from "@/components/LatestVideosAeo";
import ServicesAndTraining from "@/components/ServicesAndTraining";
import ChannelReferences from "@/components/ChannelReferences";
import SoteRoiCalculator from "@/components/SoteRoiCalculator";
import ConsultingBookingSection from "@/components/ConsultingBookingSection";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Section 1: Studio & AI Hero */}
      <section id="studiot">
        <TechVenturesLanding />
      </section>

      {/* Sticky Section Navigation */}
      <SectionNav />

      {/* Section 2: Proof of Work */}
      <section id="projektit">
        <ProofOfWork />
      </section>

      {/* Section 3: Videot & AEO + Referenssit */}
      <section id="videot">
        <LatestVideosAeo />
        <ChannelReferences />
      </section>

      {/* Section 4: Palvelut & ROI Laskuri */}
      <section id="palvelut">
        <ServicesAndTraining />
        <SoteRoiCalculator />
      </section>

      {/* Section 5: Varaa Koulutus / Consultation */}
      <section id="varaa">
        <ConsultingBookingSection />
      </section>
    </div>
  );
}
