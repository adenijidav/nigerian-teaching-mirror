
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Fellowship", href: "#programs" },
    { name: "Apply Now", href: "#contact" },
    { name: "Alumni", href: "#" },
    { name: "News", href: "#" },
    { name: "Careers", href: "#" }
  ];

  const programs = [
    { name: "Teaching Fellowship", href: "#" },
    { name: "Leadership Development", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Innovation Lab", href: "#" },
    { name: "Partner Schools", href: "#" },
    { name: "Training Institute", href: "#" }
  ];

  const resources = [
    { name: "Impact Report", href: "#" },
    { name: "Research", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Support", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Teach for Nigeria</div>
            <p className="text-gray-300 mb-6">
              Transforming education across Nigeria by recruiting, training, and supporting 
              exceptional individuals to teach in high-need schools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-gray-300 hover:text-white transition-colors">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-300 hover:text-white transition-colors">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Teach for Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
