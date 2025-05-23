import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Sports Community Platform",
    description: "A comprehensive MERN stack application for sports communities to connect, organize events, and share experiences with integrated user management and real-time features.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    hasGithub: true,
    hasDemo: true
  },
  {
    title: "Travel Website: From Clicks to Journey",
    description: "Researched AI-enhanced travel recommendations and developed personalized itinerary planning based on user preferences and real-time data.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "UX Research", "AI Integration"],
    hasGithub: true
  },
  {
    title: "IoT Air Quality Monitoring System",
    description: "Developed an IoT solution to monitor air quality with real-time data displayed on a web interface, using MQ135 sensor and ESP8266.",
    image: "https://images.unsplash.com/photo-1581092918484-8313de6f6c8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Arduino", "JavaScript", "ESP8266"],
    hasGithub: true
  }
];

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
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
            <span className="text-foreground"> Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and interests in 
            development.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              variants={itemVariants}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.hasGithub && (
                    <button className="flex items-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground px-4 py-2 rounded-lg transition-all text-sm font-medium">
                      <i className="fab fa-github" />
                      GitHub
                    </button>
                  )}
                  {project.hasDemo && (
                    <button className="flex items-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground px-4 py-2 rounded-lg transition-all text-sm font-medium">
                      <i className="fas fa-external-link-alt" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
