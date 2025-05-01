
import React from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Villa",
      category: "Residential",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Urban Apartment",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Luxury Office",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-design-light" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-scroll data-scroll-speed="0.3">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 reveal">Our Projects</h2>
          <p className="text-design-muted max-w-xl mx-auto reveal reveal-delay-1">
            Explore our curated collection of exceptional design projects that showcase our passion for luxury and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden h-80 reveal"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/80 text-sm mb-1">{project.category}</p>
                <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                  <a href="#" className="inline-block text-white border-b border-white pb-1 transition-colors hover:text-design-accent hover:border-design-accent">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-scroll data-scroll-speed="0.2">
          <a href="#" className="px-8 py-3 border-2 border-design-dark text-design-dark hover:bg-design-dark hover:text-white transition-all duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
