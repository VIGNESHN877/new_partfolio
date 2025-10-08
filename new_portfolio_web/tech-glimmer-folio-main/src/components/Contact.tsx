import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vigneshn877@gmail.com",
    href: "mailto:vigneshn877@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8508662477",
    href: "tel:+918508662477"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "VIGNESHN877",
    href: "https://github.com/VIGNESHN877"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vignesh-n-snsce",
    href: "https://linkedin.com/in/vignesh-n-snsce"
  },
  {
    icon: Globe,
    label: "Portfolio Website",
    value: "vigneshn877.wixsite.com",
    href: "https://vigneshn877.wixsite.com/vignesh-n"
  }
];

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              {socialLinks.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-2"
                    >
                      {item.value}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Collaborate?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project idea, job opportunity, or just want to connect, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:vigneshn877@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/vignesh-n-snsce" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
