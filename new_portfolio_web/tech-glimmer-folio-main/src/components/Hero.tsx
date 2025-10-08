import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Mail, Phone, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">VIGNESH.N</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Electronics & Communication Engineer
            </p>
            <p className="text-lg text-primary font-medium">
              B.E - SNS College of Engineering, Coimbatore
            </p>
          </div>

          {/* Brief Introduction */}
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Passionate engineering student with hands-on experience at <span className="text-primary font-semibold">ISRO Space Applications Centre</span>.
            Specialized in IoT systems, PCB design, and full-stack development with multiple cloud certifications.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:vigneshn877@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              vigneshn877@gmail.com
            </a>
            <a href="tel:+918508662477" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91-8508662477
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Coimbatore, India
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#resume">View Resume</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://github.com/VIGNESHN877" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/vignesh-n-snsce" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://vigneshn877.wixsite.com/vignesh-n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
