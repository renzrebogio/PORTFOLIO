import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const headerRef = useScrollReveal({ threshold: 0.2 });
  const formRef = useScrollReveal({ threshold: 0.1, delay: 100 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border/50 pb-44">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left info column */}
          <div ref={headerRef as React.RefObject<HTMLDivElement>} className="lg:col-span-5 section-reveal space-y-8">
            <div>
              <span className="text-[#e27500] text-xs font-bold uppercase tracking-widest block mb-3">Get in Touch</span>
              <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tighter text-foreground leading-[1.0] mb-6">
                Let's work together.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base font-medium max-w-sm">
                Have an idea, project, or opportunity you want to discuss? Feel free to reach out. I'm always open to new connections.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/50">
              <a 
                href="mailto:renzmartinrebogio@gmail.com" 
                className="group block"
              >
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Email address</span>
                <span className="text-lg font-bold text-foreground group-hover:text-[#e27500] transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#e27500]" />
                  renzmartinrebogio@gmail.com
                </span>
              </a>

              <div className="group block">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Location</span>
                <span className="text-lg font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#e27500]" />
                  Cavite City, Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div ref={formRef as React.RefObject<HTMLDivElement>} className="lg:col-span-7 section-reveal">
            <Card className="rounded-[2.5rem] bg-card border border-border/40 p-8 md:p-10 shadow-sm">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                      <Input 
                        id="name"
                        placeholder="John Doe" 
                        required
                        className="bg-background border-border/50 focus-visible:ring-[#e27500] h-12 rounded-xl text-foreground font-semibold px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        className="bg-background border-border/50 focus-visible:ring-[#e27500] h-12 rounded-xl text-foreground font-semibold px-4"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                    <Input 
                      id="subject"
                      placeholder="Project Inquiry / Job Opportunity" 
                      required
                      className="bg-background border-border/50 focus-visible:ring-[#e27500] h-12 rounded-xl text-foreground font-semibold px-4"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Message</label>
                    <Textarea 
                      id="message"
                      placeholder="Hi Renz, I'd like to talk about..." 
                      className="min-h-[160px] bg-background border-border/50 focus-visible:ring-[#e27500] resize-y rounded-xl text-foreground font-semibold p-4"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#e27500] hover:bg-[#ff8800] text-white h-12 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-[#e27500]/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={14} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;