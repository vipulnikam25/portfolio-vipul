import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ContactSection from "@/components/portfolio/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Built with passion using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 All rights reserved. Let's create something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
