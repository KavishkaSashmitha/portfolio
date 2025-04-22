import React from "react";
import { BookOpen, Calendar, Clock, MapPin } from "lucide-react";

function Education() {
  return (
    <div className="text-white">
      <div className="flex items-center mb-6">
        <BookOpen className="text-blue-300 mr-3" size={24} />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          Education
        </h3>
      </div>

      <div className="space-y-6 border-l-2 border-cyan-500/50 pl-6">
        <div className="relative">
          <div className="absolute -left-[31px] h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-lg p-5 border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-md hover:shadow-cyan-500/10">
            <h4 className="font-bold text-lg text-cyan-200">
              BSc in Software Engineering
            </h4>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center text-cyan-300/70 text-sm">
                <Calendar size={14} className="mr-1.5" />
                <p>2022 - 2026</p>
              </div>
              <div className="flex items-center text-cyan-300/70 text-sm">
                <MapPin size={14} className="mr-1.5" />
                <p>SLIIT, Sri Lanka</p>
              </div>
              <div className="flex items-center text-cyan-300/70 text-sm">
                <Clock size={14} className="mr-1.5" />
                <p>Full-time</p>
              </div>
            </div>

            <p className="mt-3 text-cyan-100/80">
              Pursuing a comprehensive degree in Software Engineering with focus
              on full-stack development, software architecture, and modern
              development methodologies.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500/20">
                Software Architecture
              </span>
              <span className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500/20">
                Data Structures
              </span>
              <span className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500/20">
                Algorithms
              </span>
              <span className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500/20">
                Web Development
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[31px] h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-lg p-5 border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-md hover:shadow-cyan-500/10">
            <h4 className="font-bold text-lg text-cyan-200">High School</h4>

            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center text-cyan-300/70 text-sm">
                <Calendar size={14} className="mr-1.5" />
                <p>2008 - 2021</p>
              </div>
              <div className="flex items-center text-cyan-300/70 text-sm">
                <MapPin size={14} className="mr-1.5" />
                <p>Sri Dharmaloka College, Kelaniya</p>
              </div>
            </div>

            <p className="mt-3 text-cyan-100/80">
              Completed School education with a focus on mathematics and
              sciences. Achieved excellent results in Advanced Level
              examinations, qualifying for university placement in a competitive
              program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
