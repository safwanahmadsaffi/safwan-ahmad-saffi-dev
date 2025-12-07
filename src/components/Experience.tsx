import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, GraduationCap, Trophy, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Judge SME Lead",
      company: "Jazz Xlr8",
      period: "Nov 2024 - Present",
      description: "Leading a team of 15+ staff members overseeing judging operations for Pakistan's largest startup accelerator program.",
      achievements: [
        "Supervised 15+ team members",
        "Managed judging operations for 150+ startup teams",
        "Coordinated evaluation processes for national-level competition"
      ],
      icon: Users,
      gradient: "from-primary to-secondary",
    },
    {
      title: "AI Research Intern",
      company: "Virtual University",
      period: "Sep 2024 - Present",
      description: "Developing advanced ML models and AI systems for educational technology applications.",
      achievements: [
        "Built generative AI models",
        "Optimized ML pipelines",
        "Published research findings"
      ],
      icon: GraduationCap,
      gradient: "from-secondary to-primary",
    },
    {
      title: "Freelance AI Engineer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      description: "Building custom AI solutions, ML systems, and full-stack applications for clients worldwide.",
      achievements: [
        "Delivered 20+ AI/ML projects",
        "Built scalable systems for 10+ clients",
        "Specialized in GenAI and LLM applications"
      ],
      icon: Briefcase,
      gradient: "from-primary/80 to-secondary/80",
    },
  ];

  const achievements = [
    { 
      title: "CALICO Programming Competition", 
      description: "Top performer in competitive programming",
      icon: Trophy 
    },
    { 
      title: "Shell.ai Hackathon 2025", 
      description: "Advanced sustainable aviation fuel optimization",
      icon: Award 
    },
    { 
      title: "NASA Space Apps Challenge", 
      description: "Participant in global innovation challenge",
      icon: Award 
    },
    { 
      title: "Intel AI Hackathon", 
      description: "Built ML solutions for real-world problems",
      icon: Award 
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(220_100%_57%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Experience & Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building products, leading teams, and winning competitions
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="mb-24">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/50 hidden lg:block" />

            {/* Experience cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-0 lg:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[26px] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_hsl(220_100%_57%_/_0.5)] hidden lg:block" />

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.gradient} group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            <span className="text-gradient">Competitions & Recognition</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-secondary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
