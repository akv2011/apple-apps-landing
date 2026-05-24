import Hero from "@/components/Hero";
import AppCards from "@/components/AppCards";
import GatekeeperNote from "@/components/GatekeeperNote";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. App Cards */}
      <AppCards />

      {/* 3. Gatekeeper / First-run instructions */}
      <GatekeeperNote />

      {/* 4. About / who built this */}
      <About />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
