import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { contributions } from "@/data/contributions";
import { useState } from "react";

const Projects = () => {
  const [showContributions, setShowContributions] = useState(true);

  const sectionTitle = showContributions
    ? "Open Source Contributions"
    : "Personal Projects";

  const sectionDesc = showContributions
    ? "Giving back to the community through code, docs, and collaboration."
    : "From academic experiments to real-world business solutions and creative ideas.";

  const sectionData = showContributions ? contributions : projects;

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-map">
      <div className="max-w-6xl mx-auto">
        {/* Toggle */}
        <div className="flex justify-center mb-10 gap-4">
          <Button
            variant={!showContributions ? "default" : "outline"}
            className={
              !showContributions
                ? "bg-primary text-primary-foreground font-bold shadow"
                : ""
            }
            onClick={() => setShowContributions(false)}
          >
            Personal Projects
          </Button>
          <Button
            variant={showContributions ? "default" : "outline"}
            className={
              showContributions
                ? "bg-primary text-primary-foreground font-bold shadow"
                : ""
            }
            onClick={() => setShowContributions(true)}
          >
            Contributions
          </Button>
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-handwrite font-bold text-center mb-6 text-primary">
          {sectionTitle}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-handwrite text-lg">
          {sectionDesc}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.map((project, index) => (
            <Card
              key={project.title ?? index}
              className="shadow-route hover:shadow-adventure transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-accent/30 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold font-handwrite text-accent">
                    {project.title}
                  </CardTitle>

                  {project.status ? (
                    <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                {project.location ? (
                  <div className="text-sm text-muted-foreground font-handwrite mb-3">
                    {project.location}
                  </div>
                ) : null}

                {project.description ? (
                  <CardDescription className="text-card-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                ) : null}

                {project.story ? (
                  <div className="mt-3 p-3 bg-secondary/40 rounded-lg border-l-4 border-accent">
                    <p className="text-sm italic text-muted-foreground font-handwrite">
                      💡 "{project.story}"
                    </p>
                  </div>
                ) : null}
              </CardHeader>

              <CardContent>
                {Array.isArray(project.tech) && project.tech.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="flex gap-2">
                  {project.repo ? (
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
                  ) : null}

                  {project.demo ? (
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
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
