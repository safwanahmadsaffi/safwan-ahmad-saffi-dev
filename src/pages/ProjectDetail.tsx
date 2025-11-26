import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Target, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shellAiCaseStudy } from "@/data/project-case-study";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // For now, only Shell.ai has full case study data
  const project = id === "shell-ai-hackathon" ? shellAiCaseStudy : null;

  if (!project) {
    return (
      <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Details Coming Soon</h1>
          <p className="text-muted-foreground mb-8">
            Detailed case study for this project is being prepared.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-6">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <span className="text-primary">Timeline:</span> {project.timeline}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">Role:</span> {project.role}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">Team:</span> {project.team}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button size="sm" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        {/* Metrics cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {project.result.metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-sm font-mono text-muted-foreground mb-2">{metric.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{metric.impact}</p>
            </div>
          ))}
        </motion.div>

        {/* STAR sections */}
        <div className="space-y-12">
          {/* Situation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Situation</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.situation.context}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">Key Challenges:</h3>
              <ul className="space-y-2">
                {project.situation.challenge.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Task */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Task</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Objectives:</h3>
                <ul className="space-y-2">
                  {project.task.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-mono">→</span>
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Constraints:</h3>
                <ul className="space-y-2">
                  {project.task.constraints.map((constraint, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-mono">!</span>
                      <span className="text-muted-foreground">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Action</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{project.action.approach}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Architecture:</h3>
                <ul className="space-y-2">
                  {project.action.technical.architecture.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary">▪</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.action.technical.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Innovations:</h3>
                <ul className="space-y-2">
                  {project.action.technical.innovations.map((innovation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent">★</span>
                      <span className="text-muted-foreground">{innovation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Tradeoffs:</h3>
                <ul className="space-y-2">
                  {project.action.process.tradeoffs.map((tradeoff, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary">⚖</span>
                      <span className="text-muted-foreground">{tradeoff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Result */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Result</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Outcomes:</h3>
                <ul className="space-y-2">
                  {project.result.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Learnings:</h3>
                <ul className="space-y-2">
                  {project.result.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent">💡</span>
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.result.nextSteps && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Next Steps:</h3>
                  <ul className="space-y-2">
                    {project.result.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-secondary">→</span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.section>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-border flex flex-wrap gap-4 justify-center"
        >
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
          {project.links.github && (
            <Button variant="outline" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail;
