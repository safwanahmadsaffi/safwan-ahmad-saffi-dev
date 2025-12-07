import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Sparkles, Brain, Database, TrendingUp, Bot, Video, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
  featured?: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    id: "recall-ai",
    title: "Recall – Interactive Video AI Tutor",
    description: "Multimodal AI tutor combining Whisper, CLIP, and GPT-4o for intelligent video-based learning experiences.",
    techStack: ["Python", "Whisper", "CLIP", "GPT-4o", "FastAPI"],
    icon: Video,
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
    gradient: "from-primary to-secondary",
  },
  {
    id: "scholarship-chatbot",
    title: "Scholarship Chatbot",
    description: "Smart assistant with Excel ingestion, web scraping, and LLM inference for scholarship discovery.",
    techStack: ["Python", "LangChain", "RAG", "Streamlit"],
    icon: Bot,
    github: "https://github.com/safwanahmadsaffi",
    featured: true,
    gradient: "from-secondary to-primary",
  },
  {
    id: "psx-analyzer",
    title: "PSX Market Analyzer",
    description: "Real-time sentiment analysis with weighted scoring for Pakistan Stock Exchange insights.",
    techStack: ["Python", "NLP", "Pandas", "Plotly"],
    icon: TrendingUp,
    github: "https://github.com/safwanahmadsaffi",
    gradient: "from-primary/80 to-secondary/80",
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "AI-powered data science ecosystem with automated EDA, dynamic visualizations, and 24/7 AI assistant.",
    techStack: ["Python", "Streamlit", "OpenAI", "Pandas"],
    icon: Database,
    github: "https://github.com/safwanahmadsaffi",
    gradient: "from-secondary/80 to-primary/80",
  },
  {
    id: "watson-assistant",
    title: "Watson-style Research Assistant",
    description: "Coming soon: Advanced research assistant with multi-document synthesis and knowledge graphs.",
    techStack: ["Python", "Neo4j", "LLM", "RAG"],
    icon: Brain,
    gradient: "from-primary/60 to-secondary/60",
  },
  {
    id: "infraseek360",
    title: "InfraSeek360",
    description: "Infrastructure-focused search and analysis platform for enhanced developer productivity.",
    techStack: ["TypeScript", "Next.js", "Elasticsearch"],
    icon: Search,
    github: "https://github.com/safwanahmadsaffi",
    gradient: "from-secondary/60 to-primary/60",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BentoGrid = () => {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_100%_57%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI systems and products that solve real problems and create impact
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={cn(
                "group relative rounded-2xl p-8 glass-card overflow-hidden",
                "hover:border-primary/30 transition-all duration-500",
                "card-hover cursor-pointer",
                index === 0 && "lg:col-span-2 lg:row-span-1",
                index === 1 && "lg:col-span-1"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                project.gradient
              )} />

              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br",
                    project.gradient,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  {project.featured && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      <span className="text-xs font-medium text-secondary">Featured</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary rounded-lg"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      Case Study
                      <FileText className="h-3.5 w-3.5 ml-2" />
                    </Link>
                  </Button>
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
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
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="group px-8 bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 rounded-full"
            asChild
          >
            <Link to="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
