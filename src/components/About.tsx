import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Heart } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "I love turning complex challenges into elegant solutions through code and AI.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring new technologies, from LLMs to 3D web experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Creative Thinker",
      description: "Blending engineering with design to build products that feel magical.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Leading teams at Jazz Xlr8 and collaborating with developers worldwide.",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated liquid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future, one line of code at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar placeholder with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-square rounded-3xl glass-strong overflow-hidden relative">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-8xl font-bold text-gradient">SA</div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Hey there! 👋</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Safwan Ahmad, a <span className="text-primary font-semibold">GenAI Engineer</span> and 
              full-stack developer passionate about building intelligent systems that actually solve real problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently leading teams at <span className="text-primary font-semibold">Jazz Xlr8</span> while 
              researching AI at Virtual University. I've won hackathons, built ML pipelines, and shipped 
              products used by thousands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me competing in international hackathons (Shell, NASA, Intel), 
              exploring new frameworks, or mentoring aspiring developers.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full glass text-sm font-mono">🎯 Product-minded</span>
              <span className="px-4 py-2 rounded-full glass text-sm font-mono">⚡ Fast executor</span>
              <span className="px-4 py-2 rounded-full glass text-sm font-mono">🚀 Always learning</span>
            </div>
          </motion.div>
        </div>

        {/* Personality traits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <trait.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">{trait.title}</h4>
              <p className="text-sm text-muted-foreground font-mono">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
