import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      
      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }
  }, []);

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
      color: "from-cyan-500 to-blue-500"
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
      color: "from-purple-500 to-pink-500"
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
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building products, leading teams, and solving complex problems
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline path */}
          <svg 
            className="absolute left-8 top-0 h-full w-1 hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <path
              ref={pathRef}
              d={`M 0 0 L 0 ${experiences.length * 400}`}
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" />
                <stop offset="50%" stopColor="#8338ec" />
                <stop offset="100%" stopColor="#ff006e" />
              </linearGradient>
            </defs>
          </svg>

          {/* Experience cards */}
          <div className="space-y-16 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 lg:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))] hidden lg:block" />

                {/* Card */}
                <div className="glass-strong rounded-2xl p-8 hover:border-primary/50 transition-all group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-mono text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground font-mono">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity rounded-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
