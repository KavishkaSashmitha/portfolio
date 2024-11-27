import React from "react";
import AchievmentCertifications from "./Achievment-Certifications";

function Earned() {
  return (
    <div className="p-6 ">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">
        Achievement Journey
      </h3>
      <div className="space-y-6 border-l-4 border-yellow-300 pl-6">
        <AchievmentCertifications />
      </div>
    </div>
  );
}

export default Earned;
