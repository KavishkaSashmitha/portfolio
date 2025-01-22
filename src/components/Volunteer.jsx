import React from 'react';

function Volunteer() {
  return (
    <div>
      <div className="min-h-screen bg-yellow-50 p-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Volunteer Work
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Community Tech Education
            </h3>
            <p className="text-gray-600">
              Conducting free coding workshops for underprivileged students,
              teaching basic web development and programming concepts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Open Source Contributor
            </h3>
            <p className="text-gray-600">
              Active contributor to open-source projects, focusing on improving
              accessibility and performance of web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
