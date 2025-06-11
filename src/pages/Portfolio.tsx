// pages/Portfolio.tsx
import { useState } from "react"

interface ProjectData {
  title: string;
  image: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
}

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 overflow-y-auto">
      <div className="relative bg-gray-800 rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full mx-auto my-8 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold p-2 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Close project details"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
          {project.title}
        </h2>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg mb-6 shadow-md"
        />

        <p className="text-gray-300 text-lg mb-4">{project.description}</p>

        <h3 className="text-xl font-semibold text-white mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          {project.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-white mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Visit Live Site
          </a>
        )}
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "E-commerce Platform",
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=E-commerce+Platform",
      description: "Developed a scalable e-commerce solution with custom features for a fashion retailer, focusing on user experience and robust backend functionality.",
      details: [
        "Secure user authentication & authorization",
        "Product catalog management",
        "Shopping cart & checkout process",
        "Payment gateway integration (Stripe)",
        "Order tracking & history"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      image: "https://placehold.co/600x400/9333EA/FFFFFF?text=SaaS+Dashboard",
      description: "Designed an intuitive and powerful analytics dashboard for a SaaS product, providing real-time data visualization and customizable reports.",
      details: [
        "Real-time data visualization with D3.js",
        "Customizable user dashboards",
        "Role-based access control",
        "API integration for external data sources"
      ],
      technologies: ["React", "TypeScript", "Redux", "D3.js", "Chart.js"],
      link: "#"
    },
    {
      title: "Mobile-First Blog",
      image: "https://placehold.co/600x400/EF4444/FFFFFF?text=Mobile-First+Blog",
      description: "Created a responsive and content-rich blog platform optimized for all devices, with an emphasis on fast loading times and SEO.",
      details: [
        "Markdown support for rich content",
        "Categorization and tagging",
        "Search functionality",
        "Responsive design for all screen sizes"
      ],
      technologies: ["Next.js", "GraphQL", "Strapi CMS", "PostgreSQL"],
      link: "#"
    }
  ];

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="text-center p-8 w-full">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">Our Portfolio</h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Showcasing our best work across various industries, from e-commerce to complex web applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <button
                onClick={() => openModal(project)}
                className="mt-4 inline-block text-blue-300 hover:underline hover:text-blue-200 transition duration-300"
              >
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
      <PortfolioDetailModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  )
}

export default Portfolio