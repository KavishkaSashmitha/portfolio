const Skills = () => {
  const skillRoutes = [
    { name: "JavaScript", level: 85, icon: "🟡", route: "Main Highway" },
    { name: "React / Next.js", level: 80, icon: "⚛️", route: "Scenic Route" },

    { name: "Node.js / Express", level: 75, icon: "🟢", route: "River Road" },
    { name: "Python / FastAPI", level: 70, icon: "🐍", route: "Forest Trail" },
    { name: "Git & GitHub", level: 85, icon: "🌿", route: "Branch Network" },
    { name: "Agile & Project Mgmt", level: 75, icon: "📊", route: "Team Path" },
    {
      name: "Cloud & DevOps Basics",
      level: 60,
      icon: "☁️",
      route: "Sky Route",
    },
    {
      name: "C#",
      level: 40,
      icon: "💻",
      route: "Sky Route",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-paper-texture">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-handwrite font-bold text-center mb-8 text-foreground">
          Routes I've Mastered
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto font-handwrite text-xl">
          Like learning new cycling routes, each tech skill is a journey with
          its own terrain and challenges
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillRoutes.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-route hover:shadow-adventure transition-all duration-300 hover:scale-105 border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground font-handwrite">
                  {skill.level}%
                </span>
              </div>

              <div className="mb-3">
                <span className="text-xs text-muted-foreground font-handwrite">
                  📍 {skill.route}
                </span>
              </div>

              <div className="w-full bg-secondary/60 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-sunset h-3 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent-foreground rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-route max-w-3xl mx-auto border border-border/50">
            <p className="text-lg text-muted-foreground font-handwrite">
              🚴‍♂️ Always exploring new territories in cloud computing, AI, and
              modern frameworks. The best routes are the ones you haven't
              discovered yet!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
