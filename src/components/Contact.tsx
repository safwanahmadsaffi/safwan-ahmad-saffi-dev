import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ChatBot from "@/components/ChatBot";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_100%_57%_/_0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(186_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open for freelance projects, collaborations, and full-time opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:sticky lg:top-24"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new projects, innovative ideas, or opportunities to bring your vision to life with AI and modern tech.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:safwanahmadsaffi836@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium group-hover:text-primary transition-colors">safwanahmadsaffi836@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl glass-card">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-primary">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Faisalabad, Pakistan</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/safwanahmadsaffi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:border-secondary/30 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>

            {/* Status card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">Current Status</span>
              </div>
              <div className="text-xl font-bold mb-2">Open to Internships & Collabs</div>
              <div className="text-sm text-muted-foreground">
                Actively seeking opportunities in AI/ML, GenAI, and full-stack development roles
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Send a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="bg-muted/30 border-border/50 focus:border-primary h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-muted/30 border-border/50 focus:border-primary h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="bg-muted/30 border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-muted/30 border-border/50 focus:border-primary resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group h-14 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-[0_0_40px_hsl(220_100%_57%_/_0.4)] transition-all duration-300 rounded-xl"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* AI Chatbot */}
      <ChatBot />
    </section>
  );
};

export default Contact;
