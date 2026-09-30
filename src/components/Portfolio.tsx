import { ExternalLink, Code, Layout, ShoppingCart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';
import { projects } from '../content/projects';

// Project images - using local assets
const projectImages = import.meta.glob<{ default: string }>("../assets/projects/*.webp", {
  eager: true,
});

const getProjectImage = (filename: string): string => {
  const path = `../assets/projects/${filename}`;
  const module = projectImages[path];
  if (!module) {
    return 'https://via.placeholder.com/800x600?text=Project';
  }
  return module.default;
};

const categories = [
  { id: 'featured', label: 'Featured Projects', icon: Layout },
  { id: 'all', label: 'All Projects', icon: Layout },
  { id: 'healthcare-medical', label: 'Healthcare & Medical', icon: Code },
  { id: 'veterinary-animal-health', label: 'Veterinary & Animal Health', icon: ShoppingCart },
  { id: 'ecommerce-retail', label: 'E-commerce & Retail', icon: ShoppingCart },
  { id: 'corporate-professional-services', label: 'Corporate & Professional Services', icon: Globe },
  { id: 'industrial-manufacturing', label: 'Industrial & Manufacturing', icon: Code },
  { id: 'travel-immigration', label: 'Travel & Immigration', icon: Globe },
  { id: 'home-services-environmental-health', label: 'Home Services & Environmental Health', icon: Code },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A selection of production websites I've built and maintained for clients worldwide
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleProjects(6);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={getProjectImage(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  {/* Role Badge */}
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-0">
                      {project.role}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={loadMore}
              className="border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white px-8"
            >
              Load More Projects ({filteredProjects.length - visibleProjects} more)
            </Button>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-sm text-slate-500">
          Showing {displayedProjects.length} of {filteredProjects.length} projects
        </div>
      </div>
    </section>
  );
}

