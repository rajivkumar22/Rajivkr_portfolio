import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { InteractiveCard } from "./ui/interactive-card";

const certifications = [
  {
    title: "IoT: Design Concepts and Use Cases",
    provider: "NPTEL",
    year: "2023",
    score: "91%",
    icon: "fas fa-wifi",
    status: "Completed",
    link: "https://drive.google.com/file/d/1PhtqOX6ikjKy6kDcga157zshz9sIdFMQ/view"
  },
  {
    title: "Multi-Core Computer Architecture",
    provider: "NPTEL",
    year: "2023",
    icon: "fas fa-microchip",
    status: "Completed",
    link: "https://drive.google.com/file/d/1PDZbj2cys7snnrYO8cRnG3Ba0i9HWNx9/view"
  },
  {
    title: "Introduction to Databases",
    provider: "Coursera",
    year: "2023",
    icon: "fas fa-database",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/AVZY8T3R2STL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Blockchain Technology",
    provider: "Metacrafters",
    year: "2023",
    icon: "fab fa-bitcoin",
    status: "Completed",
    link: "https://drive.google.com/file/d/1PZqqQF11FLvRjE-5jaHAKacXoxhxRR5j/view"
  }
];

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCerts, setVisibleCerts] = useState(3);

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

  const nextSlide = () => {
    if (currentIndex < certifications.length - visibleCerts) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedCerts = certifications.slice(currentIndex, currentIndex + visibleCerts);

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
          {displayedCerts.map((cert, index) => (
            <motion.div 
              key={cert.title}
              variants={itemVariants}
            >
              <InteractiveCard>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 border border-primary/30 hover:border-primary/50 transition-all duration-300 h-full">
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
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="text-sm font-medium">View Certificate</span>
                    </a>
                  </div>
                </div>
              </InteractiveCard>
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
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(certifications.length / visibleCerts) }).map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleCerts) === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= certifications.length - visibleCerts}
            className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}