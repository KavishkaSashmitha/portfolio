const About = () => {
  // Import profile image
  const profileImage = "/profile.png"; // Using the profile image from build/img

  return (
    <section id="about" className="py-20 px-6 bg-gradient-map">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-handwrite font-bold text-center mb-16 text-foreground">
          My Story So Far...
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-route border border-border/50">
              <h3 className="font-handwrite text-2xl text-accent mb-3">
                🚀 The Journey
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                From my early coding experiments to working as a Software
                Engineering Associate at{" "}
                <span className="font-semibold">Tea Tang (Pvt) Ltd</span>, my
                path has been about continuous learning and growth. I’ve built
                systems ranging from ERP modules to community-driven apps, and
                I’m always pushing to explore the next challenge.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-route border border-border/50">
              <h3 className="font-handwrite text-2xl text-accent mb-3">
                💻 The Craft
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                I specialize in building modern web applications with
                <span className="font-semibold">
                  {" "}
                  React, Next.js, Node.js, and Laravel
                </span>
                . Beyond academics, I contribute to community projects like the
                <span className="font-semibold"> Leo Club</span> and{" "}
                <span className="font-semibold">Forest Friends</span>, and I
                enjoy mentoring others in ReactJS. For me, tech isn’t just about
                code – it’s about solving real problems and creating meaningful
                experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border border-border/50">
                👨‍💻 Software Engineer (in progress)
              </span>
              <span className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border border-border/50">
                🌱 Community Builder
              </span>
              <span className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border border-border/50">
                🚲 Motorbike Traveler
              </span>
              <span className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border border-border/50">
                ☕ Coffee & Late-Night Coding
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-paper-texture rounded-3xl shadow-adventure flex items-center justify-center border-2 border-border/30 rotate-3 relative overflow-hidden group hover:rotate-1 transition-transform duration-300">
              {/* Decorative overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-70"></div>

              {/* Full profile image filling frame */}
              <img
                src={profileImage}
                alt="Kavishka Sashmitha"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Floating icons */}
            <div className="absolute top-4 right-8 text-2xl animate-float">
              💡
            </div>
            <div className="absolute bottom-12 left-4 text-2xl animate-float delay-300">
              🚀
            </div>
            <div className="absolute top-1/2 right-2 text-2xl animate-float delay-700">
              📚
            </div>
            <div className="absolute top-16 left-0 text-2xl animate-float delay-500">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
