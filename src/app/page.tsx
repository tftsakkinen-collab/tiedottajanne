import Hero from "@/components/Hero";
import ProofOfWork from "@/components/ProofOfWork";
import LatestVideosAeo from "@/components/LatestVideosAeo";
import ServicesAndTraining from "@/components/ServicesAndTraining";
import ChannelReferences from "@/components/ChannelReferences";
import AiPromptLibrary from "@/components/AiPromptLibrary";
import SoteRoiCalculator from "@/components/SoteRoiCalculator";
import SoteGlossary from "@/components/SoteGlossary";
import ConsultingBookingSection from "@/components/ConsultingBookingSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProofOfWork />
      <LatestVideosAeo />
      <ServicesAndTraining />
      <ChannelReferences />
      <AiPromptLibrary />
      <SoteRoiCalculator />
      <SoteGlossary />
      <ConsultingBookingSection />
    </div>
  );
}
