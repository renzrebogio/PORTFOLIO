import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Mail, Phone, Linkedin, Award, Eye, X, User } from 'lucide-react';

const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Introduction to Frontend Development",
      issuer: "Simplilearn",
      year: "2025",
      image: "/E-Certificate (Introduction to Frontend Development).jpg" // Replace with your actual certificate image path
    }
  ];

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <Card className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up group">
              <CardContent className="p-8">
                 <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <User className="text-primary" size={24} />
                  Profile
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  Computer Engineering student and aspiring web developer skilled in HTML, CSS, 
                  JavaScript, and React. Experienced in frontend and backend technologies with 
                  a focus on creating responsive, accessible interfaces. Thrives in collaborative environments that develop projects with real-world impact.
                </p>
              </CardContent>
            </Card>

            {/* Education & Contact Card */}
            <Card className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <GraduationCap className="text-primary" size={24} />
                  Education & Contact
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">

                    <div>
                      <p className="font-semibold">Bachelor of Science in Computer Engineering</p>
                      <p className="text-sm text-muted-foreground"><i>San Sebastian College – Recoletos de Cavite</i></p>
                      <p className="text-sm text-muted-foreground">Expected Graduation: 2026 | Dean's Lister</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm">Cavite City, Cavite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm">09914985418</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm">renzmartinrebogio@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm">Renz Martin Rebogio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Card - Full Width */}
          <Card className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up group mt-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                    <button
                      onClick={() => openCertificate(cert)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeCertificate}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-background rounded-lg p-6 max-h-[90vh] overflow-auto">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{selectedCertificate.title}</h3>
                <p className="text-muted-foreground">{selectedCertificate.issuer} • {selectedCertificate.year}</p>
              </div>
              <div className="flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallback = target.nextSibling as HTMLElement;
                    target.style.display = 'none';
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-64 bg-muted rounded-lg items-center justify-center">
                  <p className="text-muted-foreground">Certificate image not found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;