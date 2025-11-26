import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Main logo container */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center overflow-hidden">
        {/* Animated background particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--secondary) / 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* SA Text */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.span
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            S
          </motion.span>
          <motion.span
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A
          </motion.span>
        </div>
        
        {/* Orbiting dot */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-primary rounded-full"
          animate={{
            x: [15, -15, -15, 15, 15],
            y: [-15, -15, 15, 15, -15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;
