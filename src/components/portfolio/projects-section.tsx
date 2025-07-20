import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Persona Prediction Via Resume Analysis",
      description: "ML-powered recruiting system that automates candidate selection using eligibility criteria and personality assessment through resume analysis with Logistic Regression and Random Forest Classification.",
      image: "/placeholder-project-1.jpg",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy"],
      liveUrl: "#",
      githubUrl: "https://github.com/vipulnikam25/Persona-Prediction-Via-Resume-Analysis-Using-ML",
      featured: true
    },
    {
      title: "CSV Analysis Using Django",
      description: "Django application for uploading CSVs, processing data, and delivering user-driven visualizations with AJAX support and advanced statistical analysis capabilities.",
      image: "/placeholder-project-2.jpg",
      technologies: ["Django", "Python", "AJAX", "Data Visualization", "Statistics"],
      liveUrl: "#",
      githubUrl: "https://github.com/vipulnikam25/Django-CSV-Analysis-Project",
      featured: true
    },
    {
      title: "Multi-Database CRUD Microservice",
      description: "High-performance FastAPI-driven microservice for seamless transactions across databases with JWT authentication, role-based access control, and comprehensive testing.",
      image: "/placeholder-project-3.jpg",
      technologies: ["FastAPI", "Python", "JWT", "Multi-DB", "Microservices"],
      liveUrl: "#",
      githubUrl: "https://github.com/vipulnikam25/Database-Connection-Microservice",
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
                    {project.liveUrl !== "#" && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="hover:scale-110"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:scale-110"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
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
                  {project.liveUrl !== "#" && (
                    <Button 
                      variant="luxury" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      View Live
                    </Button>
                  )}
                  <Button 
                    variant="outline-glow" 
                    size="sm" 
                    className={project.liveUrl === "#" ? "w-full" : "flex-1"}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline-glow" 
            size="lg"
            onClick={() => window.open('https://github.com/vipulnikam25', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;