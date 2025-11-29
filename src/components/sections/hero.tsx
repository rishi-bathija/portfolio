import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ChevronDown, Code, Monitor } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export function Hero() {
  const typingText = useTypingAnimation({
    texts: [
      "Frontend Developer",
      "Full Stack Developer",
      "Programming Enthusiast",
      "React.js Developer",
      "MERN Stack Developer"
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseDuration: 2000,
  });

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern developer workspace with multiple monitors and code"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">Rishi Bhatija</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
              <span className="typing-cursor pr-1">{typingText}</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Actively seeking opportunities as a Frontend or Full Stack Developer.
              I have 1 year of industry experience and over a year of hands-on project work, building dynamic and responsive web applications using React.js and MERN stack.
            </p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Code className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Monitor className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/rishi-bathija"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishi-bathija-969982279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/bathijarishi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-500 transition-colors duration-200 transform hover:scale-110"
              title="LeetCode Profile"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/bathija8lxi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-600 transition-colors duration-200 transform hover:scale-110"
              title="GeeksforGeeks Profile"
            >
              <SiGeeksforgeeks className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
