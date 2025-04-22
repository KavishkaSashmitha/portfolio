import React from "react";
import { Briefcase, Calendar } from "lucide-react";

function Proffesional() {
  return (
    <div className="text-white">
      <div className="flex items-center mb-6">
        <Briefcase className="text-blue-300 mr-3" size={24} />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          Professional Journey
        </h3>
      </div>

      <div className="space-y-6 border-l-2 border-blue-500/50 pl-6">
        <div className="relative">
          <div className="absolute -left-[31px] h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-lg p-5 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-md hover:shadow-blue-500/10">
            <h4 className="font-bold text-lg text-blue-200">
              Intern Software Engineer
            </h4>

            <div className="flex items-center mt-2 text-blue-300/70 text-sm">
              <Calendar size={14} className="mr-2" />
              <p>Tea Tang (Pvt) Ltd | Nov 2024 - Present</p>
            </div>

            <p className="mt-3 text-blue-100/80">
              Developing web applications using Next.js and modern technology
              stack, contributing to ERP systems and gaining hands-on experience
              with real-world projects.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded border border-blue-500/20">
                Next.js
              </span>
              <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded border border-blue-500/20">
                React
              </span>
              <span className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded border border-blue-500/20">
                ERP Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proffesional;
