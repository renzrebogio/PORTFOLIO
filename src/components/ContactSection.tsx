import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'renzmartinrebogio@gmail.com',
      link: 'mailto:renzmartinrebogio@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '09914985418',
      link: 'tel:09914985418'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Cavite City, Cavite',
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations, and 
                  connecting with fellow developers. Whether you have a project in mind 
                  or just want to chat about technology, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-primary p-2 bg-primary/10 rounded-lg">
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-futuristic animate-slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input 
                        placeholder="Your name"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <Input 
                      placeholder="What's this about?"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or just say hi!"
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button className="w-full neon-glow text-lg py-3">
                    <Send size={20} className="mr-2" />
                    Send Message
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