import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectAccidentDetection from "@/assets/project-accident-detection.jpg";
import projectDoorLock from "@/assets/project-door-lock.jpg";
import projectSignalBooster from "@/assets/project-signal-booster.jpg";
import projectIsroSatellite from "@/assets/project-isro-satellite.jpg";

const projects = [
  {
    title: "Design & Analysis of Power Circuit (ISRO)",
    description: "Designed LDO circuits for satellite applications and validated using TI PSpice during internship at ISRO Space Applications Centre.",
    image: projectIsroSatellite,
    tags: ["ISRO", "TI PSpice", "Satellite Systems", "Power Electronics"],
    date: "Sept 2025"
  },
  {
    title: "Accident Detection System",
    description: "Automated alert system that notifies police stations, hospitals, and nearby vehicles in real-time during accidents, improving emergency response times.",
    image: projectAccidentDetection,
    tags: ["IoT", "Emergency Systems", "Real-time Alerts"],
    date: "Apr 2023"
  },
  {
    title: "Automatic Door Lock System",
    description: "IoT-based secure access control using Arduino and RFID with remote lock/unlock functionality via smartphone app.",
    image: projectDoorLock,
    tags: ["IoT", "Arduino", "RFID", "Mobile App"],
    date: "Nov 2023"
  },
  {
    title: "Mobile Network Signal Booster",
    description: "Low-cost network signal booster designed using affordable modules to enhance signal strength and transmission quality.",
    image: projectSignalBooster,
    tags: ["Electronics", "Signal Processing", "PCB Design"],
    date: "Dec 2024"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions spanning IoT, embedded systems, and aerospace engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover overflow-hidden bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{project.date}</Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
