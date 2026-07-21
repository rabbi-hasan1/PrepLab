import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
