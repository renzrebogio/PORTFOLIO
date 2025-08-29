import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      subcategories: [
        {
          name: 'Core Technologies',
          skills: ['HTML', 'CSS', 'JavaScript']
        },
        {
          name: 'Frameworks & Libraries',
          skills: ['React', 'Angular']
        },
        {
          name: 'Styling & UI',
          skills: ['Tailwind CSS', 'Bootstrap']
        },
        {
          name: 'Tools & Build',
          skills: ['Vite', 'npm']
        }
      ],
      color: 'text-primary'
    },
    {
      title: 'Backend Development', 
      icon: <Database className="w-8 h-8" />,
      subcategories: [
        {
          name: 'Languages',
          skills: ['Java', 'Python', 'C++']
        },
        {
          name: 'Databases',
          skills: ['SQL', 'Firebase', 'MongoDB', 'PostgreSQL']
        },
        {
          name: 'Frameworks & Runtime',
          skills: ['Express.js', 'Node.js']
        }
      ],
      color: 'text-primary'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      subcategories: [
        {
          name: 'Framework',
          skills: ['Flutter']
        },
        {
          name: 'Languages',
          skills: ['Dart']
        },
        {
          name: 'Tools & Services',
          skills: ['Firebase', 'Android Studio', 'VS Code']
        }
      ],
      color: 'text-primary'
    },
    {
      title: 'DevOps & Tools',
      icon: <GitBranch className="w-8 h-8" />,
      subcategories: [
        {
          name: 'Version Control',
          skills: ['Git', 'GitHub']
        },
        {
          name: 'Deployment & Hosting',
          skills: ['Vercel', 'Netlify', 'Firebase Hosting']
        },
        {
          name: 'APIs & Services',
          skills: ['Stripe', 'REST APIs']
        },
        {
          name: 'Development Tools',
          skills: ['VS Code', 'Postman']
        }
      ],
      color: 'text-primary'
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Analytical Skills', 
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Eagerness to Learn',
    'Time Management',
    'Organization',
    'Attention to Detail'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Skills & Expertise
          </h2>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.color} group-hover:animate-glow-pulse`}>
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  {/* All categories now use subcategories */}
                  <div className="space-y-4">
                    {category.subcategories.map((subcat, subcatIndex) => (
                      <div key={subcatIndex}>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                          {subcat.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {subcat.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <Card className="card-futuristic animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                Soft Skills & Personal Qualities
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 py-2 px-4 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;