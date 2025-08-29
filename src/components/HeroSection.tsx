import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg-futuristic.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-52 h-52 mx-auto rounded-full border-4 border-primary bg-muted overflow-hidden neon-glow">
                <img src="src/assets/1x1.png" alt="Profile Photo" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Renz Martin V. Rebogio
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Computer Engineering Student & Web Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up">
              Experienced in both frontend and backend technologies that focuses on creating responsive, 
              accessible interfaces with real-world impact through collaborative development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="neon-glow text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;