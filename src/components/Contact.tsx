
import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would connect to an API
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message (would use a toast in a real app)
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section id="contact" className="py-24 bg-design-light" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div data-scroll data-scroll-speed="0.2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal">Get In Touch</h2>
            <p className="mb-10 reveal reveal-delay-1">
              Have a project in mind or just want to learn more about our services? Our team is ready to answer any questions you may have.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 reveal reveal-delay-2">
                <MapPin className="text-design-accent mt-1" />
                <div>
                  <h3 className="font-serif mb-1">Visit Us</h3>
                  <p className="text-design-muted">123 Design Street, Creative City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 reveal reveal-delay-2">
                <Phone className="text-design-accent mt-1" />
                <div>
                  <h3 className="font-serif mb-1">Call Us</h3>
                  <p className="text-design-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 reveal reveal-delay-3">
                <Mail className="text-design-accent mt-1" />
                <div>
                  <h3 className="font-serif mb-1">Email Us</h3>
                  <p className="text-design-muted">info@espaciodesign.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-lg" data-scroll data-scroll-speed="0.1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="reveal">
                <label htmlFor="name" className="block font-serif mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-design-accent outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="reveal reveal-delay-1">
                <label htmlFor="email" className="block font-serif mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-design-accent outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="reveal reveal-delay-2">
                <label htmlFor="message" className="block font-serif mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 focus:border-design-accent outline-none transition-colors"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-design-dark text-white font-serif hover:bg-design-accent transition-colors duration-300 reveal reveal-delay-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
