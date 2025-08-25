import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactRoutes = [
    {
      title: "Email Trail",
      value: "sashmithakavihska@gmail.com",
      href: "mailto:sashmithakavishka@gmail.com",
      icon: "📧",
      description: "Best for project discussions",
    },
    {
      title: "LinkedIn Path",
      value: "/in/alexchen-nomad",
      href: "https://linkedin.com/in/kavishka-sashmitha",
      icon: "🤝",
      description: "Professional connections",
    },
    {
      title: "GitHub Repository",
      value: "@kavishka-sashmitha",
      href: "https://github.com/KavishkaSashmitha",
      icon: "🛠️",
      description: "Code adventures & contributions",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-paper-texture">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-handwrite font-bold mb-8 text-foreground">
          Let’s Connect
        </h2>

        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-adventure mb-12 border border-border/50">
          <p className="text-xl text-card-foreground mb-6 font-handwrite max-w-3xl mx-auto">
            🚀 I’m a Software Engineering student & associate from Sri Lanka,
            always open to learning, collaborating, and exploring new
            opportunities. Whether it’s a project, internship, or just a chat
            about tech – feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>GMT +5:30 (Sri Lanka Time)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💬</span>
              <span>Replies within 24hrs</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactRoutes.map((contact, index) => (
            <Card
              key={contact.title}
              className="shadow-route hover:shadow-adventure transition-all duration-300 hover:scale-105 border-0 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-accent/30 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(contact.href, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-semibold text-card-foreground mb-1 font-handwrite text-lg">
                  {contact.title}
                </h3>
                <p className="text-accent text-sm mb-2">{contact.value}</p>
                <p className="text-muted-foreground text-xs">
                  {contact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-adventure"
            onClick={() =>
              window.open("mailto:sashmithakavishka@gmail.com", "_blank")
            }
          >
            🚀 Start a Conversation
          </Button>

          <p className="text-sm text-muted-foreground font-handwrite">
            Or just say hi if you’re ever around Colombo! ☕👨‍💻
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
