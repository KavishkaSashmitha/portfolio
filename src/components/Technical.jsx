import React from "react";
import { Code, Database, Cpu, Globe, Workflow } from "lucide-react";

function Technical() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <Code size={18} />,
      gradient: "from-blue-500 to-indigo-500",
      skills: [
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database size={18} />,
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      title: "Tools & Workflows",
      icon: <Workflow size={18} />,
      gradient: "from-purple-500 to-blue-500",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Responsive Design",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <div className="text-white">
      <div className="flex items-center mb-6">
        <Cpu className="text-blue-300 mr-3" size={24} />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          Technical Skills
        </h3>
      </div>

      <div className="space-y-6">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 p-5 hover:border-blue-500/30 transition-all hover:shadow-md hover:shadow-blue-500/10"
          >
            <div className="flex items-center mb-4">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${group.gradient} text-white mr-3`}
              >
                {group.icon}
              </div>
              <h4 className="text-lg font-semibold text-blue-200">
                {group.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 ml-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-900/40 text-blue-300 px-3 py-1.5 rounded-md text-sm font-medium border border-indigo-500/30 transform transition-all hover:scale-105 hover:shadow-sm hover:shadow-indigo-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 p-5">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white mr-3">
            <Globe size={18} />
          </div>
          <h4 className="text-lg font-semibold text-blue-200">
            Additional Skills
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">UI/UX Design Fundamentals</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">Responsive Web Design</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">Performance Optimization</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">API Integration</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">Team Collaboration</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-cyan-100/80">Problem Solving</span>
          </div>
        </div>
      </div>

      <div className="mt-6 relative overflow-hidden">
        {/* Animated skill meter visualization */}
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden mt-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse-slow"
            style={{ width: "95%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-blue-300/70 mt-1 px-1">
          <span>Constantly improving</span>
          <span>Always learning new technologies</span>
        </div>
      </div>
    </div>
  );
}

export default Technical;
