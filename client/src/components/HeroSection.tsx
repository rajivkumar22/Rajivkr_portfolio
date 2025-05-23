import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Rajiv Kumar</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-secondary font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Computer Science Undergraduate
          </motion.p>
          
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A Computer Science undergraduate at Chandigarh University with a strong 
            interest in Coding, Artificial Intelligence, and Web Development. Known for a 
            learning attitude and problem-solving mindset.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <i className="fas fa-eye" />
              View Projects
            </button>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <i className="fas fa-envelope" />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a 
              href="https://linkedin.com/in/rajivkumar12945" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-muted-foreground hover:text-white"
            >
              <i className="fab fa-linkedin-in text-xl" />
            </a>
            <a 
              href="https://github.com/rajivkumar12945" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted hover:bg-slate-800 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-muted-foreground hover:text-white"
            >
              <i className="fab fa-github text-xl" />
            </a>
            <a 
              href="https://leetcode.com/u/kumarrajiv12945/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 text-muted-foreground hover:text-white"
            >
              <i className="fas fa-code text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <i className="fas fa-chevron-down text-2xl text-primary" />
      </motion.div>
    </section>
  );
}
