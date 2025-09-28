import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GraduationCap, Trophy, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Intelivita Pvt. Ltd., Ahmedabad",
    period: "August 2025 - Present",
    type: "current",
    achievements: [
      "Currently working as an Associate Software Engineer at Intelivita Pvt. Ltd.",
      "Working on projects like EPC (Sports-Specific SAAS platform), Spedde(Restaurant Management Website)",
    ],
  },
  {
    title: "ReactJs Developer",
    company: "Infoware India, Ahmedabad",
    period: "Feb 2025 - May 2025",
    type: "recent",
    achievements: [
      "Built dashboards and admin panels with React.js, Next.js, and TailwindCSS",
      "Collaborated on responsive design implementation for multiple projects",
      "Worked on integerating backend APIs to frontend using REST APIs",
    ],
  },
  {
    title: "Jr. Web Developer",
    company: "Zummit Infolabs, Remote",
    period: "Aug 2024 - Jan 2025",
    type: "previous",
    achievements: [
      "Created REST APIs for hospital management system",
      "Built the responsive UI for an ecommerce website using React.js and TailwindCSS",
    ],
  },
];

const achievements = [
  "Solved 200+ coding problems on LeetCode and GeeksforGeeks",
  "Earned 2 badges for 60-day challenges on LeetCode",
  "Built 10+ full-stack projects with modern tech stack",
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 bg-accent transition-all duration-700 ${isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">{exp.company}</h4>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <GraduationCap className="text-primary mr-3 h-6 w-6" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground">Bachelor in Computer Engineering</h4>
                <p className="text-primary font-medium">Shree Swaminarayan Institute of Technology, GTU</p>
                <p className="text-muted-foreground">2021 - 2025 • CGPA: 7.84</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <Trophy className="text-yellow-500 mr-3 h-6 w-6" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <Trophy className="text-yellow-500 mr-3 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
