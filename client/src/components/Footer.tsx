export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Rajiv Kumar</h3>
            <p className="text-slate-400 leading-relaxed">
              Computer Science student passionate about AI, web development, and creating 
              innovative solutions for real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-slate-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/rajivkumar12945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all"
              >
                <i className="fab fa-github" />
              </a>
              <a 
                href="https://linkedin.com/in/rajivkumar12945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a 
                href="https://leetcode.com/rajivkumar12945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all"
              >
                <i className="fas fa-code" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              <i className="fas fa-envelope mr-2" />
              kumarrajiv12945@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Rajiv Kumar. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
