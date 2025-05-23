import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const certifications = [
  {
    title: "IoT: Design Concepts and Use Cases",
    provider: "NPTEL",
    year: "2023",
    score: "91%",
    icon: "fas fa-wifi",
    status: "Completed"
  },
  {
    title: "Multi-Core Computer Architecture",
    provider: "NPTEL",
    year: "2023",
    icon: "fas fa-microchip",
    status: "Completed"
  },
  {
    title: "Introduction to Databases",
    provider: "Coursera",
    year: "2023",
    icon: "fas fa-database",
    status: "Completed"
  }
];

export default function CertificationsSection() {
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
    <section id="certifications" className="py-20 bg-background" ref={ref}>
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
            <span className="text-foreground"> Certifications</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Continuous learning and professional development
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 border border-primary/30 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <i className={`${cert.icon} text-primary text-xl`} />
                </div>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {cert.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.provider}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{cert.year}</span>
                {cert.score && (
                  <span className="text-sm font-medium text-primary">{cert.score}</span>
                )}
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <span className="text-sm font-medium">View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation arrows */}
        <motion.div 
          className="flex justify-center items-center gap-4 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <button className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-chevron-left" />
          </button>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
          <button className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all">
            <i className="fas fa-chevron-right" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}