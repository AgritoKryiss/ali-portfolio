import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Lafeber Company Ecosystem",
      description:
        "Large scale WordPress ecosystem supporting veterinary education, e-commerce, and animal nutrition platforms with multiple specialized sub-sites.",
      image: "/projects/lafeber.webp",
      tech: [
        "WordPress",
        "WooCommerce",
        "ACF",
        "Custom Post Types",
        "PHP",
        "JavaScript",
        "MySQL",
      ],
      role: "Senior WordPress Developer",
      live: "https://lafeber.com",
      subsites: [
        "https://lafeber.com/vet",
        "https://lafeber.com/petshop",
        "https://lafeber.com/mammals",
      ],
    },

    {
      title: "Premier Consultancy",
      description:
        "Corporate immigration consultancy platform helping global investors secure residency and citizenship programs.",
      image: "/projects/premier.webp",
      tech: [
        "WordPress",
        "PHP",
        "Custom Theme",
        "JavaScript",
        "Performance Optimization",
      ],
      role: "Senior WordPress Developer",
      live: "https://premierconsultancy.com",
    },

    {
      title: "Premier Consultancy Thailand",
      description:
        "Regional expansion website targeting Thailand based investors seeking global immigration services.",
      image: "/projects/premier-th.webp",
      tech: ["WordPress", "PHP", "CSS", "Hosting Optimization"],
      role: "Senior WordPress Developer",
      live: "https://premierconsultancy.co.th",
    },

    {
      title: "Premier Travelogue",
      description:
        "Content-driven travel platform focused on global investment destinations and residency opportunities.",
      image: "/projects/travelogue.webp",
      tech: ["WordPress", "PHP", "Content Architecture"],
      role: "WordPress Developer",
      live: "https://premiertravelogue.com",
    },

    {
      title: "Emeraid Veterinary Nutrition",
      description:
        "Veterinary nutrition platform delivering specialized recovery formulas for exotic animals.",
      image: "/projects/emeraid.webp",
      tech: ["WordPress", "PHP", "Theme Customization"],
      role: "Full Stack WordPress Developer",
      live: "https://emeraid.com",
    },

    {
      title: "Dynamic Capital Funding",
      description:
        "Financial services funding platform providing business capital solutions.",
      image: "/projects/dynamiccap.webp",
      tech: ["WordPress", "PHP", "Backend Customization"],
      role: "WordPress Developer",
      live: "https://funding.dynamiccap.com",
    },

    {
      title: "Tippitoes Dance Company",
      description:
        "Franchise-based dance education platform serving multiple locations across the United States.",
      image: "/projects/tippitoes.webp",
      tech: ["WordPress", "JavaScript", "UI Improvements"],
      role: "WordPress Developer",
      live: "https://www.tippitoesdance.com",
    },

    {
      title: "International Tercume Burosu",
      description:
        "Professional translation and document services platform serving international clients.",
      image: "/projects/tercume.webp",
      tech: ["WordPress", "PHP", "Performance Optimization"],
      role: "WordPress Developer",
      live: "https://www.internationaltercumeburosu.com",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent projects that showcase my expertise and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  key={project.title}
                  className="overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-200 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      Role: {project.role}
                    </div>

                    <a
                      href={project.live}
                      target="_blank"
                      className="text-blue-600 font-semibold"
                    >
                      View Website →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {showAll
                ? "Show Less"
                : `View More Projects (${projects.length - 6} more)`}
              <ChevronDown
                className={`ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                size={20}
              />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
