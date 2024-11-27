import React from "react";

const badges = [
  {
    title: "GenAI 101 with Pieces",
    date: "Nov 23, 2024",
    image:
      "https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ/image",
    link: "https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ?identity__email=sashmithakavishka%40gmail.com",
    verifyLink:
      "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FQmoyzfBlTf-I9in2nSo2vQ%3Fidentity__email%3Dsashmithakavishka%2540gmail.com",
  },
  {
    title: "Introduction to Web Development",
    date: "Nov 23, 2024",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon.ico",
    link: "https://coursera.org/share/6ea442c8a5b89fc2212d7d594a6fab37",
  },
];

function AchievmentCertifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center border border-gray-200 shadow-lg p-4 rounded-md"
        >
          <a href={badge.link} target="_blank" rel="noopener noreferrer">
            <img
              className="w-20 h-20 object-contain mb-2"
              src={badge.image}
              alt={`${badge.title} Badge`}
            />
          </a>
          <p className="text-lg font-semibold text-gray-800 text-center">
            {badge.title}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Awarded:</strong> {badge.date}
          </p>
          {badge.verifyLink && (
            <a
              href={badge.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
            >
              Verify
            </a>
          )}
          {!badge.verifyLink && (
            <a
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-400"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default AchievmentCertifications;
