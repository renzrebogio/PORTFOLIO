import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Users, Zap, X, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    year: string;
    description: string;
    achievements: string[];
    technologies: string[];
    teamSize: string;
    role: string;
    thumbnail: string;
    demoVideo: string;
    githubUrl: string;
  } | null>(null);
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  const headerRef = useScrollReveal({ threshold: 0.2 });

  const getVideoEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/') || url.includes('youtube.com/')) {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const isYouTubeVideo = (url: string) => {
    return url.includes('youtu.be/') || url.includes('youtube.com/');
  };

  const projects = [
    {
      title: 'PIXELBOT',
      year: '2025',
      description: 'Created a computer-engineering inspired local co-op robot factory game in Python + Pygame, featuring a full play loop, menus, leaderboards, and controller-friendly input.',
      achievements: [
        'Implemented full harvest → process → assembly → delivery loop',
        'Built story and time modes with per-level and overall leaderboards',
        'Added local 2-player co-op with simultaneous input handling',
        'Created robust menu, pause, and flows with controller support'
      ],
      technologies: ['Python', 'Pygame'],
      teamSize: 'Solo Project',
      role: 'Gameplay Developer',
      thumbnail: 'pixelbot_thumbnail.jpg',
      demoVideo: '',
      githubUrl: 'https://github.com/renzrebogio/pixelbot'
    },
    {
      title: 'ZeeAI - Full Stack AI SaaS Web',
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
      thumbnail: 'zeeaisaas_thumbnail.jpg',
      demoVideo: 'https://youtu.be/mfN3cW8A_aQ',
      githubUrl: 'https://github.com/renzrebogio/ai-saas'
    },
    {
      title: 'Baste BookMart - Online Campus Bookstore Website',
      year: '2025',
      description: 'Led a collaborative team in designing and developing a campus bookstore using HTML, CSS, and JavaScript, specifically tailored to reflect the school\'s unique branding and services.',
      achievements: [
        'Designed campus-themed interface elements',
        'Implemented detailed product listings',
        'Reflected school\'s unique branding',
        'Led collaborative team development'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      teamSize: 'Team Project',
      role: 'Frontend Developer & Team Lead',
      thumbnail: 'bastebookmart_thumbnail.jpg',
      demoVideo: 'https://youtu.be/AvPzQJBS-GE',
      githubUrl: 'https://github.com/renzrebogio/campus-bookstore'
    },
    {
      title: 'Casa Lasa - Full Stack Food Delivery',
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
      thumbnail: 'casalasa_thumbnail.jpg',
      demoVideo: '',
      githubUrl: 'https://github.com/renzrebogio/food-delivery'
    },
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
      thumbnail: 'mobilefitnessapp_thumbnail.jpg',
      demoVideo: 'https://youtu.be/wywp3TC-3Jg',
      githubUrl: 'https://github.com/renzrebogio/fitness-app'
    }
  ];

  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="rounded-[2.5rem] bg-card border border-border/40 overflow-hidden flex flex-col h-full hover:border-[#e27500]/30 transition-all duration-500 shadow-sm group">
      {/* Project Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
              (img.nextSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        {/* Fallback placeholder */}
        <div className="absolute inset-0 bg-muted items-center justify-center hidden">
          <div className="text-center text-muted-foreground">
            <ImageIcon size={40} className="mx-auto mb-2 opacity-40 text-[#e27500]" />
            <p className="text-xs font-bold uppercase tracking-widest">{project.title}</p>
          </div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
        
        {/* Project Year overlay */}
        <span className="absolute top-6 right-6 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-background/80 border border-border/50 text-foreground backdrop-blur-md">
          {project.year}
        </span>
      </div>

      <CardHeader className="p-4 sm:p-8 pb-3 sm:pb-4">
        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-foreground group-hover:text-[#e27500] transition-colors duration-300">
          {project.title}
        </CardTitle>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2">
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-[#e27500]" />
            <span>{project.teamSize}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-[#e27500]" />
            <span>{project.role}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-8 pt-0 sm:pt-0 flex-1 flex flex-col justify-between">
        <div className="space-y-4 sm:space-y-6 flex-1 mb-6 sm:mb-8">
          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base font-medium">
            {project.description}
          </p>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-2 sm:mb-3">Key Achievements</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#e27500] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="font-medium">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex}
                variant="secondary"
                className="bg-background text-foreground border border-border/50 text-xs font-semibold px-2.5 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 border-t border-border/50 pt-4 sm:pt-6">
          <Button 
            variant="outline" 
            className="flex-1 border-border/60 hover:border-foreground text-foreground rounded-full transition-all duration-300 font-bold text-xs uppercase tracking-wider h-10 sm:h-11"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github size={14} className="mr-1.5 sm:mr-2" />
            <span className="hidden sm:inline">Code Repository</span>
            <span className="sm:hidden">Code</span>
          </Button>
          <Button 
            className="flex-1 bg-[#e27500] hover:bg-[#ff8800] text-white rounded-full transition-all duration-300 font-bold text-xs uppercase tracking-wider h-10 sm:h-11"
            onClick={() => setSelectedVideo(project)}
          >
            <Play size={14} className="mr-1.5 sm:mr-2" />
            <span className="hidden sm:inline">Watch Demo</span>
            <span className="sm:hidden">Demo</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="section-reveal mb-12 sm:mb-16 md:mb-24">
          <span className="text-[#e27500] text-xs font-bold uppercase tracking-widest block mb-3">Portfolio / Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Desktop Grid (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const cardRef = useScrollReveal({ threshold: 0.1, delay: index * 100 });
            return (
              <div key={index} ref={cardRef as React.RefObject<HTMLDivElement>} className="section-reveal">
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel (below lg) */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-[2.5rem]">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${carouselIndex * 100}%)`
                }}
              >
                <div className="flex">
                  {projects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows + Indicators row */}
<div className="flex items-center justify-center gap-4 mt-6">
  <button
    onClick={handlePrevious}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e27500] hover:bg-[#ff8800] text-white transition-all duration-300 shadow-lg"
    aria-label="Previous project"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  {/* Indicators */}
  <div className="flex justify-center gap-2">
    {projects.map((_, index) => (
      <button
        key={index}
        onClick={() => setCarouselIndex(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
  index === carouselIndex 
    ? 'bg-[#e27500] w-8' 
    : 'bg-foreground/30 w-2 hover:bg-foreground/50'
}`}
        aria-label={`Go to project ${index + 1}`}
      />
    ))}
  </div>

  <button
    onClick={handleNext}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e27500] hover:bg-[#ff8800] text-white transition-all duration-300 shadow-lg"
    aria-label="Next project"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-card rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/40 bg-card">
              <h3 className="text-base sm:text-xl font-bold font-heading text-foreground"><span className="text-[#e27500] font-normal hidden sm:inline">{selectedVideo.title} / </span><span className="sm:hidden">{selectedVideo.title}</span> <span className="text-[#e27500] font-normal">Demo</span></h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedVideo(null)}
                className="hover:bg-background hover:text-[#e27500] rounded-full transition-colors border border-border/40"
              >
                <X size={20} />
              </Button>
            </div>
            
            {/* Video Content */}
            <div className="relative aspect-video bg-black">
              {selectedVideo.demoVideo ? (
                isYouTubeVideo(selectedVideo.demoVideo) ? (
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
                  >
                    <source src={selectedVideo.demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-background border border-border/40 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Video Demo Unavailable</p>
                    <p className="text-sm text-muted-foreground mt-2">There is no video demo recorded for this project yet.</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Description */}
            <div className="p-4 sm:p-6 bg-background/50 border-t border-border/40 space-y-4 max-h-60 overflow-y-auto">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">{selectedVideo.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedVideo.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-card text-foreground border border-border/50 text-xs font-semibold px-2.5 py-1"
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