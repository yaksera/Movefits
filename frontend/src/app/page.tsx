import { Disciplines } from "@/components/Disciplines";
import { Facilities } from "@/components/Facilities";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Memberships } from "@/components/Memberships";
import { Mentors } from "@/components/Mentors";
import { Motion } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { PrivateAtelier } from "@/components/PrivateAtelier";
import { Programmes } from "@/components/Programmes";
import { WalkthroughForm } from "@/components/WalkthroughForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Motion>
        <main className="pt-[94px]">
          <Hero />
          <Disciplines />
          <Programmes />
          <Facilities />
          <Memberships />
          <Mentors />
          <PrivateAtelier />
          <WalkthroughForm />
        </main>
        <Footer />
      </Motion>
    </>
  );
}
