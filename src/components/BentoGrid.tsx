import { motion } from "framer-motion";
import { ExternalLink, Github, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Shell.ai Hackathon 2025",
    description: "Mathematical models and prototypes to predict 10 fuel blend properties from 55 input features, optimizing sustainable aviation fuel.",
    impact: "Advanced sustainable aviation fuel optimization",
    tags: ["Python", "ML", "Optimization"],
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
  },
  {
    title: "DataVue",
    description: "Revolutionary AI-powered data science ecosystem with automated EDA, dynamic visualizations, and 24/7 AI assistant.",
    impact: "Transforms data science workflow",
    tags: ["Python", "AI", "Data Science"],
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
  },
  {
    title: "NextEdge LabLab Hackathon",
    description: "Tool-calling chatbot with database integration that answers questions without hallucinations.",
    impact: "Zero-hallucination AI assistant",
    tags: ["Jupyter", "NLP", "RAG"],
    github: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "InfraSeek360",
    description: "Infrastructure-focused search and analysis platform built with TypeScript for enhanced developer productivity.",
    tags: ["TypeScript", "Infrastructure", "DevOps"],
    github: "https://github.com/safwanahmadsaffi",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BentoGrid = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AI systems that solve real-world problems at scale
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className={cn(
                "group relative rounded-2xl p-6 bg-card border border-border overflow-hidden",
                "hover:border-primary/50 transition-all duration-300",
                "hover:shadow-[0_0_30px_hsl(190_95%_55%/0.15)]",
                project.featured && "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-card-hover"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.impact && (
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-mono">{project.impact}</span>
                      </div>
                    )}
                  </div>
                  {project.featured && (
                    <Award className="h-5 w-5 text-accent" />
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                        <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            variant="ghost"
            size="lg"
            className="group text-primary hover:text-primary hover:bg-primary/10"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
