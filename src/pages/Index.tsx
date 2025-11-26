import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
