import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Award, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
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
    id: "shell-ai-hackathon",
    title: "Shell.ai Hackathon 2025",
    description: "Mathematical models and prototypes to predict 10 fuel blend properties from 55 input features, optimizing sustainable aviation fuel.",
    impact: "Advanced sustainable aviation fuel optimization",
    tags: ["Python", "ML", "Optimization"],
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "Revolutionary AI-powered data science ecosystem with automated EDA, dynamic visualizations, and 24/7 AI assistant.",
    impact: "Transforms data science workflow",
    tags: ["Python", "AI", "Data Science"],
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
  },
  {
    id: "nextedge-lablab",
    title: "NextEdge LabLab Hackathon",
    description: "Tool-calling chatbot with database integration that answers questions without hallucinations.",
    impact: "Zero-hallucination AI assistant",
    tags: ["Jupyter", "NLP", "RAG"],
    github: "https://github.com/safwanahmadsaffi",
  },
  {
    id: "infraseek360",
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

const Projects = () => {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground hover:text-primary"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gradient">All Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of AI-powered solutions, ML systems, and full-stack applications built with modern technologies
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={cn(
                "group relative rounded-2xl p-8 bg-card border border-border overflow-hidden",
                "hover:border-primary/50 transition-all duration-300",
                "hover:shadow-[0_0_30px_hsl(190_95%_55%/0.15)]",
                "flex flex-col h-full"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.impact && (
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-mono">{project.impact}</span>
                      </div>
                    )}
                  </div>
                  {project.featured && (
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      View Details
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Link>
                  </Button>
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
      </div>
    </main>
  );
};

export default Projects;
