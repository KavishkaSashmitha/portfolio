/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Code, Network, BookOpen, ChevronUp, Github, Linkedin, Mail, Star, Zap, Calendar } from 'lucide-react';
import BlogPage from './blog-page';
import Proffesional from './components/Proffesional';
import Technical from './components/Technical';
import Education from './components/Education';
import Earned from './components/Earned';
import Projects from './components/ProjectSection';
import Volunteer from './components/Volunteer';

// Enhanced Particles Background with Color Variation
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);
  const colors = ['#8B5CF6', '#6366F1', '#3B82F6', '#10B981', '#F59E0B']; // Purple, Indigo, Blue, Emerald, Amber

  useEffect(() => {
    // Create particles with varied colors and sizes
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      glow: Math.random() > 0.7, // Some particles will have a glow effect
    }));
    
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position with slightly varied speed for more natural movement
          let newX = particle.x + particle.speedX * (Math.random() * 0.5 + 0.75);
          let newY = particle.y + particle.speedY * (Math.random() * 0.5 + 0.75);
          
          // Bounce from edges with slight randomization
          if (newX < 0 || newX > 100) {
            particle.speedX *= -1;
            particle.speedX += (Math.random() - 0.5) * 0.05;
          }
          if (newY < 0 || newY > 100) {
            particle.speedY *= -1;
            particle.speedY += (Math.random() - 0.5) * 0.05;
          }
          
          // Apply the new position
          return {
            ...particle,
            x: newX < 0 ? 0 : newX > 100 ? 100 : newX,
            y: newY < 0 ? 0 : newY > 100 ? 100 : newY
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 40); // Slightly faster for smoother animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            boxShadow: particle.glow ? `0 0 ${particle.size * 2}px ${particle.color}` : 'none',
            transition: 'left 0.4s ease-out, top 0.4s ease-out'
          }}
        />
      ))}
      {/* Add subtle light beams */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-500 opacity-5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 left-2/3 w-1/3 h-1/3 bg-blue-500 opacity-5 rounded-full blur-[100px]"></div>
    </div>
  );
};

// Modernized Navigation with Neon Effect
const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { icon: Home, label: 'Home', section: 'home', color: 'from-blue-500 to-purple-500' },
    { icon: User, label: 'About', section: 'about', color: 'from-purple-500 to-indigo-500' },
    { icon: Code, label: 'Projects', section: 'projects', color: 'from-indigo-500 to-cyan-500' },
    { icon: Network, label: 'Volunteer', section: 'volunteer', color: 'from-cyan-500 to-emerald-500' },
    { icon: BookOpen, label: 'Blog', section: 'blog', color: 'from-emerald-500 to-amber-500' },
  ];

  return (
    <nav className="fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-xl rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-500/30 px-4 py-3">
      <div className="flex space-x-7 items-center">
        {navItems.map((item) => (
          <div key={item.section} className="relative group">
            <button
              onClick={() => setActiveSection(item.section)}
              className={`p-2.5 rounded-full transition-all duration-500 ${
                activeSection === item.section
                  ? `bg-gradient-to-r ${item.color} text-white shadow-[0_0_10px_rgba(139,92,246,0.7)]` 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              aria-label={item.label}
            >
              <item.icon 
                size={24} 
                className={activeSection === item.section ? 'animate-pulse' : ''} 
                strokeWidth={activeSection === item.section ? 2.5 : 1.5}
              />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-purple-500/30">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

// Modernized Home Section with Animated Text
const HomeSection = ({ setActiveSection }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <ParticlesBackground />
      
      <div className={`z-10 text-center transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative mb-8">
          <div className="w-56 h-56 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-spin-slow opacity-70 blur-md"></div>
            <img
              src="img/profile.png"
              alt="Kavishka S"
              className="w-48 h-48 rounded-full mx-auto object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
          </div>
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2.5 rounded-full rotate-12 animate-bounce shadow-lg">
            <Zap size={20} />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 mb-4 leading-tight tracking-tight">
          Kavishka Sashmitha
        </h1>
        
        <div className="relative text-2xl text-purple-50/90 mb-8 flex flex-wrap justify-center gap-2">
          <span className="inline-block py-1 px-3 bg-indigo-900/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
            Software Engineer
          </span>
          <span className="inline-block py-1 px-3 bg-purple-900/30 backdrop-blur-sm rounded-lg border border-purple-500/20">
            Tech Enthusiast
          </span>
          <span className="inline-block py-1 px-3 bg-blue-900/30 backdrop-blur-sm rounded-lg border border-blue-500/20">
            Problem Solver
          </span>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/kavishka-sashmitha/"
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-7 py-3.5 rounded-lg border border-blue-400/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition flex items-center gap-3 transform hover:-translate-y-1"
          >
            <Linkedin size={20} className="group-hover:animate-bounce" />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/kavishkasashmitha"
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-r from-gray-700 to-gray-900 text-white px-7 py-3.5 rounded-lg border border-gray-600/20 hover:shadow-[0_0_20px_rgba(75,85,99,0.5)] transition flex items-center gap-3 transform hover:-translate-y-1"
          >
            <Github size={20} className="group-hover:animate-bounce" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <button
            onClick={() => setActiveSection('projects')}
            className="group bg-gradient-to-r from-purple-600 to-indigo-800 text-white px-7 py-3.5 rounded-lg border border-purple-400/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition flex items-center gap-3 transform hover:-translate-y-1"
          >
            <Code size={20} className="group-hover:animate-bounce" />
            <span className="font-medium">View My Work</span>
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-purple-300/70">
          <Calendar size={16} />
          <span className="text-sm">Available for new opportunities</span>
        </div>
      </div>
      
      <div className="absolute bottom-24 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => setActiveSection('about')} 
          className="text-purple-300 hover:text-white bg-purple-900/30 p-2 rounded-full hover:bg-purple-800/50 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronUp size={24} className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

// Modernized About Section with Glass Effects
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 md:p-16 overflow-hidden relative text-white">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-5xl font-bold mb-16 text-center relative">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
            About Me
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></span>
        </h2>
        
        <div className="description max-w-4xl mx-auto mb-16">
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl border border-white/20 shadow-xl hover:shadow-purple-500/10 transition-shadow">
            <p className="text-lg text-purple-50/90 leading-relaxed">
              A motivated Software Engineering student with expertise in full-stack
              development, specializing in the MERN stack and Next.js. Currently an
              intern at Tea Tang (Pvt) Ltd, contributing to the development of ERP
              systems and real-world applications. Skilled in modern web technologies,
              Agile methodologies, and building responsive, user-friendly interfaces.
              Passionate about mastering React and advancing as a software engineer.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="transform transition-all hover:scale-102 hover:shadow-xl duration-300 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 hover:shadow-purple-500/10">
            <Proffesional />
          </div>
          <div className="transform transition-all hover:scale-102 hover:shadow-xl duration-300 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 hover:shadow-blue-500/10">
            <Technical />
          </div>
          <div className="transform transition-all hover:scale-102 hover:shadow-xl duration-300 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 hover:shadow-cyan-500/10 md:col-span-2">
            <Education />
          </div>
        </div>
        
        <div className="mt-16 transform transition-all hover:scale-102 hover:shadow-xl duration-300">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 hover:shadow-purple-500/10">
            <Earned />
          </div>
        </div>
      </div>
    </div>
  );
};

// Modernized Volunteer Section
const VolunteerSection = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-cyan-900 p-8 relative overflow-hidden">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-5xl font-bold text-center mb-16 relative">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300">
          Volunteer Experience
        </span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></span>
      </h2>
      <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-8 shadow-xl">
        <Volunteer />
      </div>
    </div>
  </div>
);

// Modernized Blog Section
const BlogSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-amber-900 pt-16 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <h2 className="text-5xl font-bold text-center mb-16 relative z-10">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-purple-300">
          Blog
        </span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-purple-500"></span>
      </h2>
      <div className="relative z-10">
        <BlogPage />
      </div>
    </div>
  );
};

// Modernized Project Section
const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 pt-16 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <h2 className="text-5xl font-bold text-center mb-16 relative z-10">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
          Projects
        </span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></span>
      </h2>
      <div className="relative z-10">
        <Projects />
      </div>
    </div>
  );
};

// Main App Component
const KavishkaPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  // Track mouse for custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Update cursor position with smooth animation
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
    }
  }, [cursorPosition]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'volunteer':
        return <VolunteerSection />;
      case 'blog':
        return <BlogSection />;
      case 'projects':
        return <ProjectSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="font-sans text-white relative">
      {renderSection()}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white p-3 rounded-full shadow-lg transition-all hover:shadow-xl z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 pointer-events-none z-50"
        style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
      />
    </div>
  );
};

export default KavishkaPortfolio;
