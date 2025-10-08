import { Card, CardContent } from "@/components/ui/card";
import { Code2, Wrench, Cloud, Languages, Award } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C", "Java", "Full Stack Development", "Python"]
  },
  {
    icon: Wrench,
    title: "Engineering Tools",
    skills: ["TI PSpice", "Eagle", "EasyEDA", "KiCad", "VS Code", "Canva"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (Developer & Cloud Practitioner)", "Azure", "MongoDB", "Git", "Kubernetes"]
  },
  {
    icon: Award,
    title: "Specializations",
    skills: ["PCB Design & Fabrication", "IoT Systems", "Satellite Communication", "AI/ML Fundamentals"]
  },
  {
    icon: Languages,
    title: "Soft Skills",
    skills: ["Teamwork", "Adaptability", "Time Management", "English (Fluent)", "Tamil (Native)"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive skill set spanning hardware, software, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Card 
              key={index}
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
