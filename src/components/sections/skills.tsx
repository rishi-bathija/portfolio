import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAmazon,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiJavascript,
  SiGit
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: SiReact,
    color: "blue",
    skills: [
      { name: "React.js", level: 90, icon: SiReact },
      { name: "Next.js", level: 70, icon: SiNextdotjs },
      { name: "TailwindCSS", level: 95, icon: SiTailwindcss },
      { name: "TypeScript", level: 80, icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
    icon: SiNodedotjs,
    color: "green",
    skills: [
      { name: "Node.js", level: 90, icon: SiNodedotjs },
      { name: "Express.js", level: 85, icon: SiExpress },
      { name: "REST APIs", level: 90, icon: SiNodedotjs },
      { name: "JWT", level: 80, icon: SiNodedotjs },
    ],
  },
  {
    title: "Database",
    icon: SiMongodb,
    color: "yellow",
    skills: [
      { name: "MongoDB", level: 90, icon: SiMongodb },
      { name: "PostgreSQL", level: 70, icon: SiPostgresql },
      { name: "Prisma", level: 70, icon: SiPrisma },
      { name: "Mongoose", level: 85, icon: SiMongodb },
    ],
  },
  {
    title: "DevOps",
    icon: SiDocker,
    color: "purple",
    skills: [
      { name: "AWS", level: 60, icon: SiAmazon },
      { name: "Docker", level: 50, icon: SiDocker },
      { name: "Vercel", level: 90, icon: SiVercel },
      { name: "Netlify", level: 85, icon: SiNetlify },
    ],
  },
];

const techStack = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-accent transition-all duration-700 ${isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies with hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                <category.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: isIntersecting ? `${skill.level}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center justify-center group"
                  title={tech.name}
                >
                  <IconComponent
                    className="text-2xl group-hover:scale-110 transition-transform duration-200"
                    style={{ color: tech.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
