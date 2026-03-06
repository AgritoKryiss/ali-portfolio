import { ExternalLink, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  // const projects = [
  //   {
  //     title: 'Premier Consultancy',
  //     description: 'Enterprise WordPress website for international consultancy firm with custom functionality and responsive design.',
  //     image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'PHP'],
  //     link: 'https://premierconsultancy.com/',
  //   },
  //   {
  //     title: 'Premier Consultancy - Thai',
  //     description: 'Enterprise WordPress website for international consultancy firm with custom functionality and responsive design.',
  //     image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Elementor',  'Booking System',  'ACF', 'CPT', 'AJAX', 'PHP'],
  //     link: 'https://premierconsultancy.co.th/',
  //   },
  //   {
  //     title: 'Premier Travelogue',
  //     description: 'Enterprise WordPress website for international consultancy firm with custom functionality and responsive design.',
  //     image: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Elementor', 'PHP'],
  //     link: 'https://premiertravelogue.com/',
  //   },
  //   {
  //     title: 'Premier Travelogue',
  //     description: 'Travel and tourism website with booking integration, destination galleries, and interactive travel guides.',
  //     image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MjUyNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Booking System', 'Gallery'],
  //     link: 'https://premiertravelogue.com/',
  //   },
  //   {
  //     title: 'Lafeber Company',
  //     description: 'Multi-site WordPress ecosystem including retail, vet, mammals, and pet shop with WooCommerce integration and ACF.',
  //     image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MjUyMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'Custom Design', 'ACF', 'CPT', 'AJAX'],
  //     link: 'https://lafeber.com/',
  //   },
  //   {
  //     title: 'Lafeber Company - Shop',
  //     description: 'Multi-site WordPress ecosystem including retail, vet, mammals, and pet shop with WooCommerce integration and ACF.',
  //     image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MjUyMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WooCommerce', 'Elementor', 'Custom Design', 'ACF', 'CPT', 'AJAX'],
  //     link: 'https://lafeber.com/petshop',
  //   },
  //   {
  //     title: 'Lafeber Company - Vet',
  //     description: 'Multi-site WordPress ecosystem including retail, vet, mammals, and pet shop with WooCommerce integration and ACF.',
  //     image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MjUyMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WooCommerce', 'Custom Theme', 'Custom Design', 'ACF', 'CPT', 'AJAX'],
  //     link: 'https://lafeber.com/vet',
  //   },
  //   {
  //     title: 'Lafeber Company - Mammals',
  //     description: 'Multi-site WordPress ecosystem including retail, vet, mammals, and pet shop with WooCommerce integration and ACF.',
  //     image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MjUyMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'Custom Design', 'ACF', 'CPT', 'AJAX'],
  //     link: 'https://lafeber.com/mammals',
  //   },
  //   {
  //     title: 'Lafeber Company - Pet Birds',
  //     description: 'Multi-site WordPress ecosystem including retail, vet, mammals, and pet shop with WooCommerce integration and ACF.',
  //     image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3MjUyMjc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'Custom Design', 'ACF', 'CPT', 'AJAX'],
  //     link: 'https://lafeber.com/pet-birds',
  //   },
  //   {
  //     title: 'Emeraid Healthcare',
  //     description: 'Healthcare focused WordPress site with custom features, responsive design, and optimized performance.',
  //     image: 'https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyNTM5MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'WooCommerce', 'Custom Design', 'Responsive'],
  //     link: 'https://emeraid.com/',
  //   },
  //   {
  //     title: 'Emeraid Healthcare - Vet',
  //     description: 'Healthcare focused WordPress site with custom features, responsive design, and optimized performance.',
  //     image: 'https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyNTM5MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'WooCommerce', 'Custom Design', 'Responsive'],
  //     link: 'https://emeraid.com/vet',
  //   },
  //   {
  //     title: 'Tippitoes Dance',
  //     description: 'Creative website for dance studio with booking functionality, gallery management, and mobile-first design.',
  //     image: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzI1MTk3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'PHP', 'jQuery'],
  //     link: 'https://www.tippitoesdance.com/',
  //   },
  //   {
  //     title: 'Dynamic Cap Funding',
  //     description: 'Financial services platform with secure user authentication, custom dashboards, and investment tracking functionality.',
  //     image: 'https://images.unsplash.com/photo-1761735486549-5c2b19dfed09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwaW52ZXN0bWVudCUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyNTM5MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Custom Theme', 'Security'],
  //     link: 'https://www.funding.dynamiccap.com/',
  //   },
  //   {
  //     title: 'CHG Institute',
  //     description: 'Educational institution website with course management, enrollment system, and student portal integration.',
  //     image: 'https://images.unsplash.com/photo-1659080907099-1706246332a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbnN0aXR1dGUlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MjUzOTMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'LMS', 'Custom Portal'],
  //     link: 'https://www.thechginstitute.com/',
  //   },
  //   {
  //     title: 'Iron & Fire',
  //     description: 'Industrial company website with project portfolio, service catalog, and client testimonial showcase.',
  //     image: 'https://images.unsplash.com/photo-1648671921845-895549805092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcm9uJTIwZmlyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI1MzkzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Portfolio', 'Business'],
  //     link: 'https://ironandfire.co.uk/',
  //   },
  //   {
  //     title: 'Heritage GS NFL',
  //     description: 'Sports organization website with team management, event scheduling, and member registration features.',
  //     image: 'https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Events', 'Registration'],
  //     link: 'https://www.heritagegsnfl.com/',
  //   },
  //   {
  //     title: 'International Translation Bureau',
  //     description: 'Multilingual website for translation services with project submission portal and language selection system.',
  //     image: 'https://images.unsplash.com/photo-1651684195895-38708dc94cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //     tags: ['WordPress', 'Multilingual', 'WPML'],
  //     link: 'https://www.internationaltercumeburosu.com/',
  //   },
  // ];

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
      "MySQL"
    ],
    role: "Senior WordPress Developer",
    live: "https://lafeber.com",
    subsites: [
      "https://lafeber.com/vet",
      "https://lafeber.com/petshop",
      "https://lafeber.com/mammals"
    ]
  },

  {
    title: "Premier Consultancy",
    description:
      "Corporate immigration consultancy platform helping global investors secure residency and citizenship programs.",
    image: "/projects/premier.webp",
    tech: ["WordPress", "PHP", "Custom Theme", "JavaScript", "Performance Optimization"],
    role: "Senior WordPress Developer",
    live: "https://premierconsultancy.com"
  },

  {
    title: "Premier Consultancy Thailand",
    description:
      "Regional expansion website targeting Thailand based investors seeking global immigration services.",
    image: "/projects/premier-th.webp",
    tech: ["WordPress", "PHP", "CSS", "Hosting Optimization"],
    role: "Senior WordPress Developer",
    live: "https://premierconsultancy.co.th"
  },

  {
    title: "Premier Travelogue",
    description:
      "Content-driven travel platform focused on global investment destinations and residency opportunities.",
    image: "/projects/travelogue.webp",
    tech: ["WordPress", "PHP", "Content Architecture"],
    role: "WordPress Developer",
    live: "https://premiertravelogue.com"
  },

  {
    title: "Emeraid Veterinary Nutrition",
    description:
      "Veterinary nutrition platform delivering specialized recovery formulas for exotic animals.",
    image: "/projects/emeraid.webp",
    tech: ["WordPress", "PHP", "Theme Customization"],
    role: "Full Stack WordPress Developer",
    live: "https://emeraid.com"
  },

  {
    title: "Dynamic Capital Funding",
    description:
      "Financial services funding platform providing business capital solutions.",
    image: "/projects/dynamiccap.webp",
    tech: ["WordPress", "PHP", "Backend Customization"],
    role: "WordPress Developer",
    live: "https://funding.dynamiccap.com"
  },

  {
    title: "Tippitoes Dance Company",
    description:
      "Franchise-based dance education platform serving multiple locations across the United States.",
    image: "/projects/tippitoes.webp",
    tech: ["WordPress", "JavaScript", "UI Improvements"],
    role: "WordPress Developer",
    live: "https://www.tippitoesdance.com"
  },

  {
    title: "International Tercume Burosu",
    description:
      "Professional translation and document services platform serving international clients.",
    image: "/projects/tercume.webp",
    tech: ["WordPress", "PHP", "Performance Optimization"],
    role: "WordPress Developer",
    live: "https://www.internationaltercumeburosu.com"
  }
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Portfolio</h2>
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
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white hover:bg-gray-100"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" /> View Live
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
              {showAll ? 'Show Less' : `View More Projects (${projects.length - 6} more)`}
              <ChevronDown 
                className={`ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}