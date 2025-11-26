import { motion } from "framer-motion";
import { Trophy, Award, Target, Users, Code, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Achievements3D = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      value: "1st Place",
      description: "National WordPress Hackathon",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Top 10 Finalist",
      value: "National Level",
      description: "Qualified in Top 10 Teams",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Competitive Programming",
      value: "MIT, Meta, Harvard",
      description: "Participated in prestigious competitions",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Leadership",
      value: "15+ Team Members",
      description: "Judge SME Lead - Supervised 15 staff",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Hackathons",
      value: "10+ International",
      description: "Shell, NASA, Intel Hackathons",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Stanford Code-In Place",
      value: "Selected",
      description: "Student Code-In Place Stanford",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll(".achievement-card");
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left - rect.left + cardRect.width / 2;
        const cardY = cardRect.top - rect.top + cardRect.height / 2;

        const deltaX = x - cardX;
        const deltaY = y - cardY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 500;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * 20;
          const rotateX = (deltaY / distance) * strength;
          const rotateY = -(deltaX / distance) * strength;

          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        } else {
          (card as HTMLElement).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements & Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record in competitions, hackathons, and leadership roles
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="achievement-card"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="relative group h-full">
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative h-full p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-border group-hover:border-primary/50 transition-all">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 shadow-lg`}
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                    <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.value}
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <StatCard label="Hackathons" value="10+" />
          <StatCard label="Team Projects" value="150+" />
          <StatCard label="Competitions" value="15+" />
          <StatCard label="Leadership" value="15 Team" />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
      <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-muted-foreground font-mono">{label}</div>
    </div>
  );
};

export default Achievements3D;
