import { Button } from "@/components/ui/button";
import heroImage from "@/assets/travel-coding-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper-texture">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Outdoor coding setup with mountain views and bicycle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-journey opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent-foreground rounded-full text-lg font-medium border border-accent/30">
            🚴‍♂️ Digital Nomad • Developer • Adventurer
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="block text-foreground font-handwrite font-bold">
            Hey there, I'm
          </span>
          <span className="block text-foreground font-handwrite font-bold">
            Kavishka Sashmitha
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          I code from mountain tops, coffee shops, and anywhere my bike takes
          me. Mixing wanderlust with web development, one adventure at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="flex-1">
            <Button
              size="lg"
              className="w-full bg-accent text-primary font-bold shadow-2xl hover:bg-primary hover:text-accent-foreground transition-all duration-200 border-2 border-accent px-8 py-4 text-xl rounded-full"
            >
              <span className="mr-2">🗺️</span> Explore My Journey
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/kavishka-sashmitha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              size="lg"
              className="w-full bg-primary text-muted font-bold shadow-2xl hover:bg-accent hover:text-accent-foreground transition-all duration-200 border-2 border-primary px-8 py-4 text-xl rounded-full"
            >
              <span className="mr-2">☕</span> Let's Chat
            </Button>
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground ">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Currently in Colombo</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>Remote Available</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none"
        onClick={() => {
          const el = document.getElementById("projects");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label="Scroll to Projects"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center backdrop-blur-sm bg-accent/10">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
