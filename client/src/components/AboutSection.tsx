import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-primary">About</span>
            <span className="text-foreground"> Me</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="w-80 h-80 bg-muted rounded-full flex items-center justify-center">
              <i className="fas fa-user text-6xl text-muted-foreground" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Computer Science Undergraduate</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I'm a driven and passionate 3rd-year Computer Science 
                student at Chandigarh University with a proficiency in coding, 
                problem-solving, and building innovative software solutions.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                I'm actively honing my skills through hands-on projects and 
                eager to dive into real-world challenges. My areas of interest 
                include Web Development, Artificial Intelligence, and IoT.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-graduation-cap text-primary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Education</h4>
                    <p className="text-muted-foreground text-sm">B.E. Computer Science</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-code text-primary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Interests</h4>
                    <p className="text-muted-foreground text-sm">Web Dev, AI, Problem Solving</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-map-marker-alt text-secondary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Location</h4>
                    <p className="text-muted-foreground text-sm">Madhubani, Bihar, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-envelope text-secondary text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Email</h4>
                    <p className="text-muted-foreground text-sm">kumarrajiv12945@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
