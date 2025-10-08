import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Cpu } from "lucide-react";

const experiences = [
  {
    icon: Rocket,
    company: "Indian Space Research Organisation (ISRO)",
    role: "Research Intern - Space Applications Centre (SAC)",
    location: "Ahmedabad, India (Offline)",
    duration: "July 2025 - Sept 2025",
    description: "Conducted research on satellite communication systems at ISRO's SCS campus.",
    achievements: [
      "Simulated LDO circuits for satellite power management",
      "Analyzed signal communication systems for satellite applications",
      "Designed and validated power circuits using TI PSpice",
      "Gained hands-on experience with aerospace-grade electronics"
    ],
    tags: ["Satellite Systems", "Power Electronics", "TI PSpice", "Research"]
  },
  {
    icon: Cpu,
    company: "Max Automation",
    role: "PCB Fabrication Intern",
    location: "Coimbatore, India (Offline)",
    duration: "July 2024 - 3 Weeks",
    description: "Hands-on training in professional PCB design and fabrication.",
    achievements: [
      "Designed single-layer PCBs using CNC milling machines",
      "Integrated ICs and electronic components on fabricated boards",
      "Learned industry-standard PCB manufacturing processes",
      "Developed practical skills in hardware prototyping"
    ],
    tags: ["PCB Design", "Hardware", "Manufacturing", "Electronics"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on internships at prestigious organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-1">{exp.company}</CardTitle>
                        <p className="text-lg text-primary font-medium">{exp.role}</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-4">
                      {exp.location}
                    </CardDescription>
                    <p className="text-foreground/90 mb-4">{exp.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground/90">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
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

export default Experience;
