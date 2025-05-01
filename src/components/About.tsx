

const About = () => {
  const services = [
    {
      title: "Interior Design",
      description: "Comprehensive design solutions tailored to your specific lifestyle and preferences.",
    },
    {
      title: "Architecture",
      description: "Innovative architectural concepts that harmonize form and function.",
    },
    {
      title: "Decoration",
      description: "Curated selection of furnishings and accessories to complete your space.",
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight ensuring seamless execution and quality control.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-design-dark text-design-light" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-scroll data-scroll-speed="0.3">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal">Our Approach to Design</h2>
            <p className="mb-6 reveal reveal-delay-1">
              At ESPACIO, we believe in the transformative power of thoughtful design. Our process begins with understanding your unique vision and requirements, followed by meticulous planning and execution.
            </p>
            <p className="mb-10 reveal reveal-delay-2">
              With over 15 years of experience in luxury interior design, we create spaces that seamlessly blend aesthetics and functionality, resulting in environments that inspire and endure.
            </p>
            <div className="flex space-x-6 reveal reveal-delay-3">
              <a href="#contact" className="px-8 py-3 bg-design-accent text-white hover:bg-opacity-90 transition-colors duration-300">
                Contact Us
              </a>
              <a href="#projects" className="px-8 py-3 border border-white/30 text-white hover:border-white transition-all duration-300">
                Our Work
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-scroll data-scroll-speed="0.1">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 border border-white/10 hover:border-design-accent transition-colors duration-300 reveal"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
