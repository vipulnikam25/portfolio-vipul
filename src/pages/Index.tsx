
import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import SoftSkillsSection from "@/components/portfolio/soft-skills-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import CertificatesSection from "@/components/portfolio/certificates-section";
import ContactSection from "@/components/portfolio/contact-section";
import { useVisitorCounter } from "@/hooks/use-visitor-counter";

const Index = () => {
  const visitorCount = useVisitorCounter();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SoftSkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vipul Nikam
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Built with passion using React, TypeScript & Tailwind CSS
          </p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="bg-card/60 backdrop-blur-md border border-border/30 rounded-lg px-4 py-2">
              <span className="text-lg font-semibold text-primary">{visitorCount}</span>
              <p className="text-xs text-muted-foreground">Portfolio Visits</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Vipul Nikam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
