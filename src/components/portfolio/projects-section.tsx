import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring real-time inventory management and secure payment processing.",
      image: "/placeholder-project-1.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team workspaces, and advanced analytics dashboard.",
      image: "/placeholder-project-2.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform with advanced NLP capabilities and customizable output formats.",
      image: "/placeholder-project-3.jpg",
      technologies: ["Python", "FastAPI", "OpenAI", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and weather pattern analytics.",
      image: "/placeholder-project-4.jpg",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            A showcase of my recent work, featuring full-stack applications, 
            AI integrations, and modern web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:shadow-luxury transition-all duration-500 hover:scale-[1.02] bg-gradient-glass border-white/10 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-luxury opacity-20" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-sunset text-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                  <div className="flex gap-2 ml-auto">
                    <Button variant="ghost" size="icon" className="hover:scale-110">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:scale-110">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-gradient-glass border-white/20 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="luxury" size="sm" className="flex-1">
                    View Live
                  </Button>
                  <Button variant="outline-glow" size="sm" className="flex-1">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-glow" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;