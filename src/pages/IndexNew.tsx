import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import Scene3D from "@/components/Scene3D";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Achievements3D from "@/components/Achievements3D";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

const IndexNew = () => {
  useEffect(() => {
    // Smooth scroll animations for sections sliding over fixed hero
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* 3D Background */}
      <Scene3D />
      
      {/* Fixed Hero Section */}
      <Hero />
      
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Scrollable Content - slides over fixed hero */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-background">
          <section id="projects" className="scroll-section">
            <BentoGrid />
          </section>
          
          <section id="skills" className="scroll-section">
            <Skills />
          </section>
          
          <section id="experience" className="scroll-section">
            <Experience />
          </section>
          
          <section id="about" className="scroll-section">
            <About />
          </section>
          
          <section className="scroll-section">
            <Achievements3D />
          </section>
          
          <section id="contact" className="scroll-section">
            <Contact />
          </section>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexNew;
