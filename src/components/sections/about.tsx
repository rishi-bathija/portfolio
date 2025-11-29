import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import Profile from "@/assets/profile4.jpeg";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const typingText = useTypingAnimation({
    texts: [
      "Full-time Roles",
      "Freelance Work"
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseDuration: 2000,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-card transition-all duration-700 ${isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Frontend/Full Stack Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with
              <span className="font-semibold text-primary">1 year of industry experience</span> building production-ready web applications using React.js, Next.js, Node.js, TypeScript, Postgres, MongoDB, and modern development practices. I have delivered scalable features, clean UI components, API integrations, and end-to-end functionality in a collaborative team environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Computer Engineering Graduate (CGPA 7.84), actively seeking full-time opportunities where I can contribute to high-quality user experiences, solve real engineering problems, and grow as a Software Engineer in a modern product or SaaS team.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-accent p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Production Projects</div>
              </div>
              <div className="bg-accent p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Companies Worked</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="font-semibold"
              >
                <User className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={Profile}
              alt="Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto max-h-[30rem]"
            />
            <div className="absolute md:-bottom-6 md:right-8 bg-accent text-white p-4 rounded-lg shadow-lg w-[170px] h-[80px] -bottom-2 -right-2 flex flex-col items-center justify-center">
              <div className="text-sm font-semibold">Open to</div>
              <div className="text-lg font-bold">{typingText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
