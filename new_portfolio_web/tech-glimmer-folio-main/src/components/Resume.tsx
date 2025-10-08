import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  { name: "AWS Certified Developer", org: "Amazon Web Services", date: "Sept 2025" },
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", date: "Sept 2025" },
  { name: "Kubernetes and Cloud Native Associate", org: "CNCF", date: "Sept 2025" },
  { name: "Azure AI Fundamentals", org: "Microsoft", date: "July 2025" },
  { name: "Azure Fundamentals", org: "Microsoft", date: "June 2025" },
  { name: "Snowflake SnowPro Associate", org: "Snowflake", date: "Aug 2025" },
  { name: "Salesforce AI & Agentforce Specialist", org: "Salesforce", date: "2024-2025" },
  { name: "Enterprise Design Thinking Practitioner", org: "IBM", date: "2024" }
];

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Resume & Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Download my complete resume or view my professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Resume Card */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Professional Resume</CardTitle>
              <CardDescription className="text-base">
                Complete resume with education, experience, projects, and skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3">
                <Button variant="hero" size="lg" asChild className="w-full">
                  <a href="/Vignesh_N_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="/Vignesh_N_Resume.pdf" download="Vignesh_N_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
              </div>
              <div className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Last updated: September 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Portfolio Highlights</CardTitle>
              <CardDescription className="text-base">
                A snapshot of my professional journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">7.3</p>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-md mt-1">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 leading-tight">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{cert.org}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
