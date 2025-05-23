import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  {
    name: "C",
    icon: "fas fa-code",
    color: "text-purple-500"
  },
  {
    name: "C++",
    icon: "fas fa-code",
    color: "text-blue-500"
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    color: "text-orange-500"
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    color: "text-blue-600"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    color: "text-yellow-500"
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "text-cyan-400"
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "text-green-500"
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    color: "text-gray-400"
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "text-green-600"
  }
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
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
            <span className="text-primary">My</span>
            <span className="text-foreground"> Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Technologies and tools I've worked with
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                <i className={`${skill.icon} text-3xl ${skill.color}`} />
              </div>
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            variants={itemVariants}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
