import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    category: "frontend",
    githubUrl: "https://github.com/VanshNazwani/SaaS-Landing-Page",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "projects/project2.png",
    tags: ["React", "Node.js", "Stripe"],
    category: "fullstack",
    githubUrl: "https://github.com/VanshNazwani/E-commerce-Platform",
  },
  {
    id: 3,
    title: "Chatbot Web App",
    description:
      "A simple AI chatbot implemented using Node.js and a basic NLP model.",
    image: "projects/project3.png",
    tags: ["Node.js", "AI", "NLP"],
    category: "AI & ML",
    githubUrl: "https://github.com/VanshNazwani/Chatbot-Web-App",
  },
  {
    id: 4,
    title: "Mental Health Prediction From Social Media",
    description:
      "A machine learning and NLP-based project that analyzes social media posts to predict mental health conditions using Python, scikit-learn, and Flask",
    image: "projects/project4.png",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP"],
    category: "AI & ML",
    githubUrl: "https://github.com/VanshNazwani/AI-for-Mental-Health-Prediction",
  },
  {
    id: 5,
    title: "TaskFLow Project",
    description:
      "A simple task management app that lets users create, update, and organize daily tasks with a clean and efficient workflow.",
    image: "projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    category: "fullstack",
    githubUrl: "https://github.com/VanshNazwani/TaskFlow-Pro",
  },
];

const categories = ["all", "frontend", "fullstack", "AI & ML"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/VanshNazwani"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
