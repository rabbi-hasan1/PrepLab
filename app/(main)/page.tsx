import Community from "@/components/common/Community";
import Comparison from "@/components/common/Comparison";
import FAQSection from "@/components/FAQ/FAQSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/dashboard"
        className="px-4 py-2 w-full h-fit border rounded-2xl m-40"
      >
        dashboard
      </Link>
      <Comparison />
      <FAQSection />
      <Community />
    </div>
  );
}
