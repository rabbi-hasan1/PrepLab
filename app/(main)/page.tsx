import Community from "@/components/common/Community";
import Comparison from "@/components/common/Comparison";
import FAQSection from "@/components/FAQ/FAQSection";
import Herosection from "@/components/hero/Herosection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Comparison />
      <FAQSection />
      <Community />
    </div>
  );
}
