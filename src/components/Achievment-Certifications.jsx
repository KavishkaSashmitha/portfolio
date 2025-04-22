import React from "react";
import { ExternalLink, Award, Check } from "lucide-react";

const badges = [
  {
    title: "GenAI 101 with Pieces",
    date: "Nov 23, 2024",
    image:
      "https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ/image",
    link: "https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ?identity__email=sashmithakavishka%40gmail.com",
    verifyLink:
      "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FQmoyzfBlTf-I9in2nSo2vQ%3Fidentity__email%3Dsashmithakavishka%2540gmail.com",
    bgGradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Time Management for Productivity",
    date: "October 10, 2024",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/39/31c7a00bb411e4b2adb7c560fb2da9/UCI_MB_PI_WM_300x300_YellowonBlue.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
    link: "https://coursera.org/share/3ed2a7d2757be8a0537484ad28c25ab1",
    bgGradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Business Analysis & Process Management",
    date: "October, 2024",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/89/a0db8f3ea3417ca90d4f3a4ca1d73e/coursera-projectnetwork-purplesquare.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
    link: "https://coursera.org/share/6ea442c8a5b89fc2212d7d594a6fab37",
    bgGradient: "from-indigo-600 to-cyan-600",
  },
  {
    title: "MongoDB Node.js Developer Path",
    date: "December, 2023",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/company-logo_200_200/0/1635171226992/mongodbinc_logo?e=1740614400&v=beta&t=K9rCN7MNeS2vwREjanbIyrQ8HvuXmGnx7pA6CZaHukA",
    link: "https://learn.mongodb.com/c/L0pk83_yT7OkGJELbLID-w",
    bgGradient: "from-green-600 to-blue-600",
  },
];

function AchievmentCertifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <div
            className={`bg-gradient-to-r ${
              badge.bgGradient || "from-blue-600 to-indigo-600"
            } p-4 flex items-center justify-center`}
          >
            <img
              className="w-16 h-16 object-contain rounded-full bg-white/20 p-2"
              src={badge.image}
              alt={`${badge.title} Badge`}
            />
          </div>

          <div className="p-4 flex-grow">
            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 text-center mb-2">
              {badge.title}
            </h4>

            <div className="flex items-center justify-center text-blue-300/70 text-sm mb-3">
              <Award size={14} className="mr-1.5" />
              <p>{badge.date}</p>
            </div>
          </div>

          <div className="border-t border-white/10 p-3 flex justify-center">
            {badge.verifyLink ? (
              <a
                href={badge.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-md hover:shadow-md hover:shadow-purple-500/20 transition-all"
              >
                <Check size={14} className="mr-1.5" />
                Verify
              </a>
            ) : (
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm rounded-md hover:shadow-md hover:shadow-blue-500/20 transition-all"
              >
                <ExternalLink size={14} className="mr-1.5" />
                View Certificate
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AchievmentCertifications;
