import React from 'react';

const badges = [
  {
    title: 'GenAI 101 with Pieces',
    date: 'Nov 23, 2024',
    image:
      'https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ/image',
    link: 'https://api.badgr.io/public/assertions/QmoyzfBlTf-I9in2nSo2vQ?identity__email=sashmithakavishka%40gmail.com',
    verifyLink:
      'https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FQmoyzfBlTf-I9in2nSo2vQ%3Fidentity__email%3Dsashmithakavishka%2540gmail.com',
  },
  {
    title: 'Time Management for Productivity',
    date: 'October 10, 2024',
    image:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/39/31c7a00bb411e4b2adb7c560fb2da9/UCI_MB_PI_WM_300x300_YellowonBlue.png?auto=format%2Ccompress&dpr=1&w=80&h=80',
    link: 'https://coursera.org/share/3ed2a7d2757be8a0537484ad28c25ab1',
  },
  {
    title: 'Business Analysis & Process Management',
    date: 'October, 2024',
    image:
      'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/89/a0db8f3ea3417ca90d4f3a4ca1d73e/coursera-projectnetwork-purplesquare.png?auto=format%2Ccompress&dpr=1&w=80&h=80',
    link: 'https://coursera.org/share/6ea442c8a5b89fc2212d7d594a6fab37',
  },

  {
    title: 'MongoDB Node.js Developer Path',
    date: 'December, 2023',
    image:
      'https://media.licdn.com/dms/image/v2/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/company-logo_200_200/0/1635171226992/mongodbinc_logo?e=1740614400&v=beta&t=K9rCN7MNeS2vwREjanbIyrQ8HvuXmGnx7pA6CZaHukA',
    link: 'https://learn.mongodb.com/c/L0pk83_yT7OkGJELbLID-w',
  },
];

function AchievmentCertifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="flex justify-end items-center mt-auto">
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
        </div>
      ))}
    </div>
  );
}

export default AchievmentCertifications;
