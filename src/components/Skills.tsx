import { motion } from "framer-motion";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Generative AI", "NLP", "RAG Systems", "Model Optimization", "API Integration"],
    color: "primary",
  },
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["Python", "TypeScript", "React", "Next.js", "FastAPI"],
    color: "secondary",
  },
  {
    title: "Data & Infrastructure",
    icon: <Database className="h-6 w-6" />,
    skills: ["Data Science", "Web Scraping", "PostgreSQL", "Data Modeling", "ETL Pipelines"],
    color: "accent",
  },
  {
    title: "Tools & Platforms",
    icon: <Sparkles className="h-6 w-6" />,
    skills: ["Git", "Docker", "Jupyter", "ML Ops", "Cloud Services"],
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack AI engineering with a focus on production-ready solutions
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-muted text-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default">
            <div className="text-5xl font-bold text-primary mb-2 animate-pulse">30+</div>
            <div className="text-muted-foreground font-mono text-sm">International Hackathons</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 hover:scale-105 cursor-default">
            <div className="text-5xl font-bold text-secondary mb-2">3x</div>
            <div className="text-muted-foreground font-mono text-sm">National Finalist</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 hover:scale-105 cursor-default">
            <div className="text-5xl font-bold text-accent mb-2">150+</div>
            <div className="text-muted-foreground font-mono text-sm">Projects Evaluated</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
