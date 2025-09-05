import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

const Projects = () => {
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
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="shadow-route hover:shadow-adventure transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-accent/30 overflow-hidden"
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
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-accent text-accent-foreground font-bold shadow-lg hover:scale-105 hover:from-accent hover:to-primary transition-all duration-200 border-2 border-accent/60"
                    >
                      <span className="mr-2">🔍</span> Explore Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-gradient-to-r from-accent to-secondary text-primary font-bold shadow-md hover:scale-105 hover:from-secondary hover:to-accent transition-all duration-200 border-2 border-accent/60"
                    >
                      <span className="mr-2">🚀</span> Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#projects" className="inline-block">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent/40 bg-gradient-to-r from-secondary/60 to-accent/30 text-accent-foreground font-bold shadow-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 backdrop-blur-sm px-8 py-4 text-xl rounded-full"
            >
              🗂️ View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
