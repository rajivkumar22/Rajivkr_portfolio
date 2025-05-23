import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AchievementsSection() {
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
    <section id="achievements" className="py-20 bg-background" ref={ref}>
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
            <span className="text-foreground"> Achievements</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Recognition of my dedication to continuous learning and problem-solving
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
            variants={itemVariants}
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-code text-green-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">100+ LeetCode Problems</h3>
            <p className="text-muted-foreground mb-6">
              Solved over 100 algorithmic problems demonstrating strong problem-solving skills and data structure knowledge.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
              <i className="fas fa-external-link-alt mr-2" />
              View Profile
            </button>
          </motion.div>

          <motion.div 
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
            variants={itemVariants}
          >
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-chart-line text-blue-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Striver's A2Z DSA Sheet</h3>
            <p className="text-muted-foreground mb-6">
              Completed 100+ problems from the comprehensive Data Structures and Algorithms practice sheet by Striver.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
              <i className="fas fa-external-link-alt mr-2" />
              View Progress
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
