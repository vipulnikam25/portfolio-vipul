
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Professional Experience",
      location: "Pune, Maharashtra",
      duration: "2023 - Present",
      type: "Full-time",
      description: "Specialized in building scalable backend systems, developing APIs, and automating data workflows. Created intelligent solutions using cutting-edge technologies to solve real-world problems.",
      achievements: [
        "Developed and maintained data pipelines using Python and FastAPI",
        "Implemented automated ETL workflows for data processing",
        "Built RESTful APIs for data integration and analysis",
        "Optimized database performance and query efficiency"
      ],
      technologies: ["Python", "FastAPI", "SQL", "ETL", "API Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            My journey in data engineering and backend development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title} 
              className="group hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-md border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    {exp.type}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-muted/60 border-border/30 text-foreground hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
