import React, { useState } from 'react';
import { Home, User, Code, Network, BookOpen } from 'lucide-react';
import BlogPage from './blog-page';
import Proffesional from './components/Proffesional';
import Technical from './components/Technical';
import Education from './components/Education';
import Earned from './components/Earned';
import Projects from './components/ProjectSection';

// Navigation Component
const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { icon: Home, label: 'Home', section: 'home' },
    { icon: User, label: 'About', section: 'about' },
    { icon: Code, label: 'Projects', section: 'projects' },
    { icon: Network, label: 'Volunteer', section: 'volunteer' },
    { icon: BookOpen, label: 'Blog', section: 'blog' },
  ];

  return (
    <nav className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-4 py-2">
      <div className="flex space-x-6 items-center">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => setActiveSection(item.section)}
            className={`p-2 rounded-full transition-all duration-300 ${
              activeSection === item.section
                ? 'bg-yellow-300 text-gray-800'
                : 'hover:bg-yellow-100 text-gray-600'
            }`}
          >
            <item.icon size={24} />
          </button>
        ))}
      </div>
    </nav>
  );
};

// Home Section
const HomeSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
    <div className="text-center">
      <img
        src="img/profile.png"
        alt="Kavishka S"
        className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Kavishka Sashmitha
      </h1>
      <p className="text-2xl text-gray-600">
        Software Engineer & Tech Enthusiast
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/kavishka-sashmitha/"
          target="_blank"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/kavishkasashmitha"
          target="_blank"
          className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

// About Section
const AboutSection = () => (
  <div className="min-h-screen bg-white p-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
      About Me
    </h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
      <Proffesional />
      <Technical />
      <Education />
    </div>
    <Earned />
  </div>
);

// Volunteer Section
const VolunteerSection = () => (
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
);

// Blog Section
const BlogSection = () => {
  return (
    <div className="min-h-screen bg-yellow-50 ">
      <BlogPage />
    </div>
  );
};
// Project Section
const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-yellow-50 ">
      <Projects />
    </div>
  );
};

// Main App Component
const KavishkaPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'volunteer':
        return <VolunteerSection />;
      case 'blog':
        return <BlogSection />;
      case 'projects':
        return <ProjectSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="font-sans text-gray-900">
      {renderSection()}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default KavishkaPortfolio;
