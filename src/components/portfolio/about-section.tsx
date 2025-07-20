import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable applications"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experienced in agile development environments"
    }
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Next.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            I'm a passionate developer who loves turning complex problems into simple, 
            beautiful digital solutions. With expertise across the full development stack, 
            I create experiences that users love and businesses depend on.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-gradient-glass border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Technologies I Love
            </span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-glass border-white/20 hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;