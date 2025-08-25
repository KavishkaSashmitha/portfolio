import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const adventures = [
    {
      title: "POS",
      description:
        "An internal enterprise resource planning solution built during my internship. Helps streamline operations like inventory, finance, and HR within the company.",
      tech: ["React", "MySQL", "Tailwind"],
      status: "In Progress",
      location: "🏢 Internship Project",
      story:
        "Developed as part of my journey to bring real business efficiency at Tea Tang.",
    },
    {
      title: "Herbal Heaven",
      description: "Ecommerce Application ",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Prototype",
      location: "🌍 Community Driven",
      story:
        "Academi",
    },
    {
      title: "Learning Management System",
      description:
        "An e-learning platform supporting course management, assignments, and student progress tracking.",
      tech: ["React", "Firebase", "Tailwind"],
      status: "Live Demo",
      location: "📚 Academic Project",
      story:
        "Built to improve the way students and teachers collaborate in learning.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-map">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-handwrite font-bold text-center mb-8 text-foreground">
          Projects & Creations
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto font-handwrite text-xl">
          Every project I build is a milestone in my journey — from academic
          experiments to real-world business solutions and community impact.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((project, index) => (
            <Card
              key={project.title}
              className="shadow-route hover:shadow-adventure transition-all duration-300 hover:scale-105 border-0 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-accent/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold font-handwrite text-accent">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                    {project.status}
                  </span>
                </div>

                <div className="text-sm text-muted-foreground font-handwrite mb-3">
                  {project.location}
                </div>

                <CardDescription className="text-card-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="mt-3 p-3 bg-secondary/40 rounded-lg border-l-4 border-accent">
                  <p className="text-sm italic text-muted-foreground font-handwrite">
                    💡 "{project.story}"
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-accent-foreground hover:opacity-90"
                  >
                    🔍 Explore
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/40 hover:bg-accent hover:text-accent-foreground"
                  >
                    🚀 Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent/40 hover:bg-accent hover:text-accent-foreground transition-all duration-300 backdrop-blur-sm"
          >
            🗂️ View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
