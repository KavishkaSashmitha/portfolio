import React from "react";

function Technical() {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Firebase",
            "Tailwind CSS",
            "TypeScript",
            "Next Js",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technical;
