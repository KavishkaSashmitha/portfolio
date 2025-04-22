import React from "react";
import AchievmentCertifications from "./Achievment-Certifications";
import { Award, Star } from "lucide-react";

function Earned() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <Award className="text-blue-300 mr-3" size={24} />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          Achievements & Certifications
        </h3>
      </div>

      <div className="mb-8 backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="text-amber-300" size={16} />
          <p className="text-blue-50/90 text-lg italic">
            "Continuous learning is the minimum requirement for success in any
            field."
          </p>
        </div>
        <p className="text-blue-200/70 ml-6">— Brian Tracy</p>
      </div>

      <div className="border-l-4 border-gradient-purple-blue pl-6">
        <AchievmentCertifications />
      </div>

      <style jsx>{`
        .border-gradient-purple-blue {
          border-image: linear-gradient(to bottom, #8b5cf6, #3b82f6) 1;
        }
      `}</style>
    </div>
  );
}

export default Earned;
