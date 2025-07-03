import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Studynotion from "@/assets/projects/studynotion.png"
import FormBuilder from "@/assets/projects/form-builder.png"
import Moviesflix from "@/assets/projects/moviesflix.jpg"


const projects = [
  {
    title: "MoviesFlix",
    category: "React",
    description: "Full-stack movie streaming platform built with TMDB API integration and Gemini AI for intelligent search functionality. Features real-time recommendations and user authentication.",
    image: Moviesflix,
    technologies: ["React.js", "Node.js", "TMDB API", "Gemini AI"],
    liveUrl: "https://moviesflix-ui.vercel.app",
    githubUrl: "https://github.com/rishi-bathija/moviesflix",
  },
  {
    title: "StudyNotion",
    category: "EdTech",
    description: "Comprehensive EdTech learning platform with course creation, video streaming, and payment integration. Features real-time progress tracking and interactive assessments.",
    image: Studynotion,
    technologies: ["Next.js", "MongoDB", "JWT", "Cloudinary"],
    liveUrl: "http://studynotion-frontend-blond.vercel.app",
    githubUrl: "https://github.com/rishi-bathija/studynotion",
  },
  {
    title: "Form Builder",
    category: "Tool",
    description: "Dynamic form generator with drag-and-drop functionality using Next.js and TypeScript. Features real-time preview, theme customization, and data export capabilities.",
    image: FormBuilder,
    technologies: ["TypeScript", "TailwindCSS", "Context API", "PostgreSQL"],
    liveUrl: "https://form-builder-kappa-steel.vercel.app/",
    githubUrl: "https://github.com/rishi-bathija/form-builder",
  },
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

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
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
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
