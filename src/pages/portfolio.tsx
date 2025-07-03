import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Github, Linkedin } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Rishi Bhatija</h3>
            <p className="text-muted mb-6">Full Stack Developer • Building the future, one line of code at a time</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/rishi-bathija"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-background transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishi-bathija-969982279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-background transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/u/bathijarishi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-background transition-colors duration-200"
                title="LeetCode Profile"
              >
                <SiLeetcode className="h-5 w-5" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/bathija8lxi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-background transition-colors duration-200"
                title="GeeksforGeeks Profile"
              >
                <SiGeeksforgeeks className="h-5 w-5" />
              </a>
            </div>
            <div className="border-t border-muted pt-8">
              <p className="text-muted">&copy; 2025 Rishi Bhatija. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
