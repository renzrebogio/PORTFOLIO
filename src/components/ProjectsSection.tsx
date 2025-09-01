import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, Zap, X, Play } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Helper function to check if URL is YouTube and convert to embed format
  const getVideoEmbedUrl = (url) => {
    if (url.includes('youtu.be/') || url.includes('youtube.com/')) {
      // Extract video ID from different YouTube URL formats
      let videoId;
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Return original URL for direct MP4 files
  };

  const isYouTubeVideo = (url) => {
    return url.includes('youtu.be/') || url.includes('youtube.com/');
  };

  const projects = [
    {
      title: 'Mobile Fitness Application',
      year: '2024',
      description: 'Led a 4-member team as the primary full-stack developer, planning the comprehensive tech stack including Flutter, Dart, and Firebase while supporting both frontend and backend development.',
      achievements: [
        'Delivered project on time with excellent feedback',
        'Coordinated closely with UI/UX teammates',
        'Successfully integrated features for optimal user experience'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase'],
      teamSize: '4 members',
      role: 'Full-Stack Developer & Team Lead',
      demoVideo: 'https://youtu.be/wywp3TC-3Jg',
      githubUrl: 'https://github.com/yourusername/fitness-app'
    },
    {
      title: 'Full Stack AI SaaS Web',
      year: '2025',
      description: 'Developed a full-stack AI SaaS web application using React, NodeJS, Express, and PostgreSQL, integrating advanced APIs for text and image generation and editing capabilities.',
      achievements: [
        'Deployed complete application via Vercel platform',
        'Implemented secure user authentication',
        'Built flexible payment configuration systems',
        'Integrated AI-powered solutions independently'
      ],
      technologies: ['PostgreSQL', 'Express', 'React', 'NodeJS'],
      teamSize: 'Solo Project',
      role: 'Full-Stack Developer',
      demoVideo: 'https://youtu.be/mfN3cW8A_aQ',
      githubUrl: 'https://github.com/yourusername/ai-saas'
    },
    {
      title: 'Full Stack Food Delivery',
      year: '2025', 
      description: 'Built a comprehensive food delivery web application demonstrating complete end-to-end development capability with secure user authentication, efficient database-driven order management, and seamless payment processing.',
      achievements: [
        'Completed entire project independently',
        'Implemented secure authentication systems',
        'Built efficient order management system',
        'Integrated Stripe payment processing'
      ],
      technologies: ['React JS', 'MongoDB', 'Express', 'NodeJS', 'Stripe'],
      teamSize: 'Solo Project', 
      role: 'Full-Stack Developer',
      demoVideo: 'https://your-video-host.com/food-delivery-demo.mp4',
      githubUrl: 'https://github.com/yourusername/food-delivery'
    },
    {
      title: 'Online Campus Bookstore Website',
      year: '2025',
      description: 'Led a collaborative team in designing and developing a frontend-only online campus bookstore using HTML, CSS, and JavaScript, specifically tailored to reflect the school\'s unique branding and services.',
      achievements: [
        'Designed campus-themed interface elements',
        'Implemented detailed product listings',
        'Reflected school\'s unique branding',
        'Led collaborative team development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      teamSize: 'Team Project',
      role: 'Frontend Developer & Team Lead',
      demoVideo: 'https://youtu.be/AvPzQJBS-GE',
      githubUrl: 'https://github.com/yourusername/campus-bookstore'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-futuristic hover:neon-glow transition-all duration-300 animate-slide-up group h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-primary/40 text-primary">
                      {project.year}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} />
                      <span>{project.role}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/40 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="neon-glow"
                      onClick={() => setSelectedVideo(project)}
                    >
                      <Play size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-background rounded-lg overflow-hidden border border-primary/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-primary/20">
              <h3 className="text-xl font-bold text-primary">{selectedVideo.title} - Demo</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVideo(null)}
                className="hover:bg-primary/10"
              >
                <X size={20} />
              </Button>
            </div>
            
            {/* Video Content */}
            <div className="relative aspect-video bg-black">
              {isYouTubeVideo(selectedVideo.demoVideo) ? (
                <iframe
                  src={getVideoEmbedUrl(selectedVideo.demoVideo)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${selectedVideo.title} Demo`}
                />
              ) : (
                <video
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-contain"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23666'%3ELoading...%3C/text%3E%3C/svg%3E"
                >
                  <source src={selectedVideo.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            
            {/* Video Description */}
            <div className="p-4 space-y-2">
              <p className="text-sm text-muted-foreground">{selectedVideo.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedVideo.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;