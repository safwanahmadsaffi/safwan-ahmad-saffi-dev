import { motion } from "framer-motion";
import { Download, Trophy, Home, FolderKanban, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 h-screen w-20 bg-card/80 backdrop-blur-xl border-r border-border z-50 flex flex-col items-center py-8 gap-6"
    >
      {/* Logo/Home */}
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center cursor-pointer shadow-glow"
        >
          <span className="text-2xl font-bold text-primary-foreground">S</span>
        </motion.div>
      </Link>

      <div className="flex-1 flex flex-col gap-4 mt-8">
        {/* Navigation Items */}
        <NavButton icon={Home} onClick={() => scrollToSection("hero")} tooltip="Home" />
        <NavButton icon={FolderKanban} onClick={() => scrollToSection("projects")} tooltip="Projects" />
        <NavButton icon={Code} onClick={() => scrollToSection("skills")} tooltip="Skills" />
        <NavButton icon={Trophy} onClick={() => scrollToSection("achievements")} tooltip="Achievements" />
        <NavButton icon={Mail} onClick={() => scrollToSection("contact")} tooltip="Contact" />
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4">
        {/* CV Download Button */}
        <motion.a
          href="/Safwan_Ahmad_CV.pdf"
          download="Safwan_Ahmad_CV.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <Button
            size="icon"
            className="w-12 h-12 rounded-xl bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 hover:shadow-[0_0_30px_hsl(190_95%_55%/0.5)] transition-all"
          >
            <Download className="h-5 w-5" />
          </Button>
          <Tooltip text="Download CV" />
        </motion.a>

        {/* Achievements Button */}
        <motion.button
          onClick={() => scrollToSection("achievements")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <Button
            size="icon"
            className="w-12 h-12 rounded-xl bg-secondary/20 hover:bg-secondary text-secondary hover:text-secondary-foreground border border-secondary/50 hover:shadow-[0_0_30px_hsl(280_70%_60%/0.5)] transition-all"
          >
            <Trophy className="h-5 w-5" />
          </Button>
          <Tooltip text="Achievements" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

interface NavButtonProps {
  icon: React.ElementType;
  onClick: () => void;
  tooltip: string;
}

const NavButton = ({ icon: Icon, onClick, tooltip }: NavButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Button
        size="icon"
        variant="ghost"
        className="w-12 h-12 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all"
      >
        <Icon className="h-5 w-5" />
      </Button>
      <Tooltip text={tooltip} />
    </motion.button>
  );
};

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg text-sm font-mono whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none">
      {text}
      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-border" />
    </div>
  );
};

export default Navigation;
