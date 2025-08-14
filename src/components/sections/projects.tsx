import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Studynotion from "@/assets/projects/studynotion.png"
import FormBuilder from "@/assets/projects/form-builder.png"
import Moviesflix from "@/assets/projects/moviesflix.jpg"
import Revisitly from "@/assets/projects/Revisitly.png"

const projects = [
  {
    title: "MoviesFlix",
    category: "Entertainment",
    description: "Netflix-style movie discovery platform, built using TMDB and Gemini APIs for standard and AI-powered search. Includes Firebase authentication, watchlist management with MongoDB, infinite scroll, and interactive UI using Redux Toolkit.",
    image: Moviesflix,
    videoUrl: "/moviesflix.mp4.mp4",
    technologies: ["React.js", "Node.js", "TailwindCSS", "MongoDB", "TMDB API", "Gemini API"],
    liveUrl: "https://moviesflix-frontend.vercel.app",
    githubUrl: "https://github.com/rishi-bathija/moviesflix",
  },
  {
    title: "StudyNotion",
    category: "EdTech",
    description: "Full-stack Edtech platform enabling course creation, consumption, and rating with OTP login and JWT authentication. Integrated Razorpay for payments, Cloudinary for media uploads, and REST APIs for managing courses, ratings, and user interactions.",
    image: Studynotion,
    videoUrl: "",
    technologies: ["React.js", "Node.js", "TailwindCSS", "MongoDB", "JWT", "Razorpay", "Cloudinary"],
    liveUrl: "http://studynotion-frontend-blond.vercel.app",
    githubUrl: "https://github.com/rishi-bathija/studynotion",
  },
  {
    title: "Revisitly",
    category: "Productivity",
    description: "Full-stack bookmark reminder SaaS platform with a modern, responsive UI built using React, TailwindCSS, and Headless UI. Features Firebase authentication with Google OAuth and email/password, bookmark management with tagging and reminder scheduling, REST API integration, and optimized performance for desktop and mobile.",
    image: Revisitly,
    videoUrl: "",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cron jobs", "TailwindCSS", "Firebase Auth",],
    liveUrl: "https://revisitly-frontend.vercel.app", // Replace with actual live URL
    githubUrl: "https://github.com/rishi-bathija/revisitly-frontend",
  },
  {
    title: "Form Builder",
    category: "Tool",
    description: "Responsive form builder application developed with Next.js and TypeScript, supporting dynamic form creation, edit and preview modes, theme customization, and data export. Uses Tailwind CSS for styling and Context API for efficient state management.",
    image: FormBuilder,
    videoUrl: "",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Context API"],
    liveUrl: "https://form-builder-kappa-steel.vercel.app/",
    githubUrl: "https://github.com/rishi-bathija/form-builder",
  },
];

// Video Preview Component
function VideoPreview({ videoUrl, isVisible }: { videoUrl: string; isVisible: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video play/pause based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVisible]);

  return (
    <div className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-card transition-all duration-700 ${isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work in full-stack development and innovative web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-accent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Video Preview Overlay */}
                {project?.videoUrl && <VideoPreview
                  videoUrl={project.videoUrl}
                  isVisible={hoveredProject === index}
                />}

                {/* Hover Indicator */}
                {project?.videoUrl &&
                  <div className={`absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <Play className="inline h-3 w-3 mr-1" />
                    Preview
                  </div>
                }
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Button asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.videoUrl && <Button asChild className="flex-1">
                    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Video Demo
                    </a>
                  </Button>}
                  <Button asChild variant="outline" className="flex-1" size="default">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="font-semibold transform hover:scale-105 transition-all duration-200">
            <a href="https://github.com/rishi-bathija" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
