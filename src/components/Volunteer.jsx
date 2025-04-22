import React, { useState } from "react";
import { Calendar, Users, Code, Globe, Award } from "lucide-react";

function Volunteer() {
  const [activeCard, setActiveCard] = useState(null);

  const volunteerItems = [
    {
      id: 1,
      title: "Community Tech Education",
      description:
        "Conducting free coding workshops for underprivileged students, teaching basic web development and programming concepts.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description:
        "Active contributor to open-source projects, focusing on improving accessibility and performance of web applications.",
      icon: Code,
      gradient: "from-cyan-500 to-teal-500",
      color: "cyan",
    },
    {
      id: 3,
      title: "Tech Community Organizer",
      description:
        "Co-organizing local tech meetups and hackathons to foster innovation and collaboration in the developer community.",
      icon: Globe,
      gradient: "from-teal-500 to-emerald-500",
      color: "teal",
    },
    {
      id: 4,
      title: "Mentor for Tech Students",
      description:
        "Providing guidance and career advice to computer science students, helping them navigate the tech industry landscape.",
      icon: Award,
      gradient: "from-emerald-500 to-blue-500",
      color: "emerald",
    },
  ];

  return (
    <div className="w-full text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerItems.map((item) => (
            <div
              key={item.id}
              className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                boxShadow:
                  activeCard === item.id
                    ? `0 0 25px rgba(var(--${item.color}-rgb), 0.3)`
                    : "none",
              }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10 text-white`}
                >
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  {item.title}
                </h3>
              </div>

              <p className="text-blue-50/90 leading-relaxed ml-14">
                {item.description}
              </p>

              <div
                className={`h-1 w-full mt-6 rounded-full bg-gradient-to-r ${
                  item.gradient
                } transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ${
                  activeCard === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional content - quote section */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 mt-12 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 text-white/5 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
          </div>

          <blockquote className="text-xl italic text-blue-50/90 relative z-10 ml-6">
            Volunteering in tech communities has not only allowed me to give
            back, but has also enriched my understanding of diverse perspectives
            in software development.
          </blockquote>

          <div className="flex items-center mt-6 ml-6">
            <Calendar size={16} className="text-cyan-300 mr-2" />
            <span className="text-sm text-cyan-300">
              Ongoing community commitment since 2021
            </span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center py-8">
          <p className="text-blue-50/90 mb-4">
            Interested in collaborating on community initiatives?
          </p>
          <a
            href="mailto:sashmithakavishka@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
