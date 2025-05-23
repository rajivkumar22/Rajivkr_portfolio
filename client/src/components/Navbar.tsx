import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Rajiv</span>
            <span className="text-2xl font-bold text-secondary">/&gt;</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("achievements")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection("certifications")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-all text-yellow-500"
              aria-label="Toggle theme"
            >
              <i className="fas fa-sun text-lg" />
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-all"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("achievements")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection("certifications")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
