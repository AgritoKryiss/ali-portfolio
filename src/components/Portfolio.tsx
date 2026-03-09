import { ExternalLink, Code, Layout, ShoppingCart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';

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

// Project type definitions
type ProjectCategory = 'wordpress' | 'woocommerce' | 'shopify' | 'webflow';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: ProjectCategory;
  role: string;
}

const projects: Project[] = [
  // WordPress Ecosystem Projects
  {
    title: 'Lafeber Company',
    description: 'Large-scale WordPress multisite ecosystem supporting veterinary education, e-commerce, and animal nutrition platforms with custom themes and plugins.',
    image: getProjectImage('Lafeber.webp'),
    tags: ['WordPress', 'WooCommerce', 'ACF', 'Custom Post Types', 'Multisite'],
    link: 'https://lafeber.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Premier Consultancy',
    description: 'Corporate immigration consultancy platform helping global investors obtain residency and citizenship programs through investment.',
    image: getProjectImage('premierconsultancy.webp'),
    tags: ['WordPress', 'Custom Theme', 'Consulting', 'Financial Services'],
    link: 'https://premierconsultancy.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Premier Consultancy Thailand',
    description: 'Localized platform targeting the Thai market and international investors with multilingual support.',
    image: getProjectImage('premierconsultancy-co-th.webp'),
    tags: ['WordPress', 'Multilingual', 'Custom Theme', 'WPML'],
    link: 'https://premierconsultancy.co.th/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Emeraid Veterinary',
    description: 'Veterinary nutrition platform delivering specialized recovery formulas for exotic animals with B2B portal.',
    image: getProjectImage('emeraid.webp'),
    tags: ['WordPress', 'WooCommerce', 'B2B', 'Healthcare'],
    link: 'https://emeraid.com/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Premier Travelogue',
    description: 'Content platform focused on global investment destinations and lifestyle migration.',
    image: getProjectImage('premiertravelogue.webp'),
    tags: ['WordPress', 'Custom Theme', 'Travel', 'Content'],
    link: 'https://premiertravelogue.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Dynamic Capital Funding',
    description: 'Financial services platform providing funding solutions for businesses with application portal.',
    image: getProjectImage('funding-dynamiccap.webp'),
    tags: ['WordPress', 'Fintech', 'Custom Portal', 'Lead Generation'],
    link: 'https://funding.dynamiccap.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Tippitoes Dance',
    description: 'Franchise dance education platform serving multiple locations with class scheduling and registration.',
    image: getProjectImage('tippitoesdance.webp'),
    tags: ['WordPress', 'Booking System', 'Franchise', 'Education'],
    link: 'https://www.tippitoesdance.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Essential Data Corporation',
    description: 'Nationwide technical writing and documentation services with 40+ years of expertise.',
    image: getProjectImage('essentialdata.webp'),
    tags: ['WordPress', 'Custom Theme', 'B2B', 'Professional Services'],
    link: 'https://essentialdata.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'The Salisbury Center',
    description: 'Premier event venue hosting comedy shows, MMA events, and live performances.',
    image: getProjectImage('thesalisburycenter.webp'),
    tags: ['WordPress', 'Events', 'Venue', 'Ticketing'],
    link: 'https://thesalisburycenter.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Eagle Rigging & Transport',
    description: 'Industrial machinery moving and heavy rigging services with quote request system.',
    image: getProjectImage('eaglerigging.webp'),
    tags: ['WordPress', 'Industrial', 'Custom Theme', 'Lead Generation'],
    link: 'https://eaglerigging.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Iron & Fire Coffee',
    description: 'Award-winning specialty coffee roaster with e-commerce and subscription services.',
    image: getProjectImage('ironandfire.webp'),
    tags: ['WordPress', 'WooCommerce', 'Subscription', 'E-commerce'],
    link: 'https://ironandfire.co.uk/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Trinity Credit',
    description: 'Debt relief and financial counseling services with consultation booking.',
    image: getProjectImage('trinitycredit-org.webp'),
    tags: ['WordPress', 'Financial Services', 'Lead Generation', 'Booking'],
    link: 'https://trinitycredit.org/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Passarella & Associates',
    description: 'Environmental consulting firm specializing in ecological assessments and permitting.',
    image: getProjectImage('passarella.webp'),
    tags: ['WordPress', 'Environmental', 'Consulting', 'Custom Theme'],
    link: 'https://passarella.net/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Crisp Regional Hospital',
    description: 'Full-service hospital with patient portal, physician directory, and online bill pay.',
    image: getProjectImage('crispregional-org.webp'),
    tags: ['WordPress', 'Healthcare', 'Patient Portal', 'Custom Theme'],
    link: 'https://crispregional.org/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Amida Care',
    description: "New York's largest Special Needs Plan providing health coverage with expert HIV care.",
    image: getProjectImage('amidacareny-org.webp'),
    tags: ['WordPress', 'Healthcare', 'Insurance', 'Member Portal'],
    link: 'https://www.amidacareny.org/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'ARC Group',
    description: 'American Recruiting & Consulting Group with 40+ years experience in recruitment.',
    image: getProjectImage('arcgonline.webp'),
    tags: ['WordPress', 'Recruitment', 'Job Board', 'Custom Portal'],
    link: 'https://www.arcgonline.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Meridian Integration',
    description: 'Oracle Energy and Water implementation partner for utility companies.',
    image: getProjectImage('meridian-integration.webp'),
    tags: ['WordPress', 'Enterprise', 'Technology', 'B2B'],
    link: 'https://www.meridian-integration.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Health Source Acupuncture',
    description: 'Acupuncture and integrative medicine clinic with appointment booking.',
    image: getProjectImage('healthsourceacupuncture.webp'),
    tags: ['WordPress', 'Healthcare', 'Booking System', 'Blog'],
    link: 'https://www.healthsourceacupuncture.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Nerve Health Institute',
    description: 'Functional medicine clinic specializing in nerve health and chronic pain.',
    image: getProjectImage('nervehealth.webp'),
    tags: ['WordPress', 'Healthcare', 'Functional Medicine', 'Custom Theme'],
    link: 'https://nervehealth.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Dr. Jason Tripp',
    description: 'Chronic pain and illness specialist with neurologic, metabolic healing approaches.',
    image: getProjectImage('drjasontripp.webp'),
    tags: ['WordPress', 'Healthcare', 'Functional Medicine', 'Custom Theme'],
    link: 'https://www.drjasontripp.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Chiro Revival',
    description: 'Holistic chiropractic and wellness center with comprehensive patient care.',
    image: getProjectImage('chirorevival.webp'),
    tags: ['WordPress', 'Healthcare', 'Chiropractic', 'Lead Generation'],
    link: 'https://chirorevival.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Fusynth',
    description: 'Strategic business growth partner with marketing and web development services.',
    image: getProjectImage('fusynth.webp'),
    tags: ['WordPress', 'Agency', 'Marketing', 'Portfolio'],
    link: 'https://fusynth.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Shad Rentals',
    description: 'Australian car rental and rent-to-own service for rideshare drivers.',
    image: getProjectImage('shadrentals-au.webp'),
    tags: ['WordPress', 'Automotive', 'Rental', 'Booking'],
    link: 'https://shadrentals.com.au/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Space Print Australia',
    description: "Australia's #1 online printing service with next-day dispatch.",
    image: getProjectImage('spaceprint-au.webp'),
    tags: ['WordPress', 'E-commerce', 'Printing', 'B2B'],
    link: 'https://www.spaceprint.com.au/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Heritage Signs FL',
    description: 'Full-service custom sign company serving North Florida since 2007.',
    image: getProjectImage('heritagesignsfl.webp'),
    tags: ['WordPress', 'Local Business', 'Portfolio', 'Service'],
    link: 'https://www.heritagesignsfl.com/',
    category: 'wordpress',
    role: 'Senior WordPress Developer',
  },
  // WooCommerce
  {
    title: 'iHeartDogs',
    description: 'Dog rescue organization with mission-driven e-commerce. Every purchase funds food donations.',
    image: getProjectImage('iheartdogs.webp'),
    tags: ['WooCommerce', 'Nonprofit', 'Social Impact', 'E-commerce'],
    link: 'https://iheartdogs.com/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'iHeartCats',
    description: 'Cat rescue and advocacy platform with pet food donations and flight rescue programs.',
    image: getProjectImage('iheartcats.webp'),
    tags: ['WooCommerce', 'Nonprofit', 'Pet Rescue', 'Community'],
    link: 'https://iheartcats.com/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Cannanine',
    description: 'Organic hemp CBD oil products for dogs and cats with subscription options.',
    image: getProjectImage('cannanine.webp'),
    tags: ['WooCommerce', 'Pet Health', 'Subscription', 'E-commerce'],
    link: 'https://cannanine.com/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Sunshine4Health',
    description: "Nature's Sunshine Products distributor with wellness education and consultations.",
    image: getProjectImage('sunshine4health.webp'),
    tags: ['WooCommerce', 'Health & Wellness', 'MLM', 'E-commerce'],
    link: 'https://sunshine4health.com/',
    category: 'woocommerce',
    role: 'Senior WordPress Developer',
  },
  // Shopify
  {
    title: 'Whitney Jordan Naturals',
    description: 'Premium air-dried fruit snacks with subscription boxes and wholesale portal.',
    image: getProjectImage('whitneyjordan.webp'),
    tags: ['Shopify', 'E-commerce', 'Subscription', 'Food & Beverage'],
    link: 'https://whitneyjordan.net/',
    category: 'shopify',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'Audae Club',
    description: 'Luxury dress rental platform offering secondhand designer gowns.',
    image: getProjectImage('audaeclub.webp'),
    tags: ['Shopify', 'Rental', 'Fashion', 'Luxury'],
    link: 'https://audaeclub.com/',
    category: 'shopify',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'The Hero Company',
    description: 'Patriotic jewelry brand that donates 20% of proceeds to fund service dogs for veterans.',
    image: getProjectImage('theherocompany.webp'),
    tags: ['Shopify', 'Jewelry', 'Social Impact', 'Veterans'],
    link: 'https://theherocompany.co/',
    category: 'shopify',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'STRĀ Worldwide',
    description: 'Innovative pet feeding solutions that fund street feeders globally.',
    image: getProjectImage('straworldwide.webp'),
    tags: ['Shopify', 'Pet Products', 'Social Impact', 'Innovation'],
    link: 'https://straworldwide.com/',
    category: 'shopify',
    role: 'Senior WordPress Developer',
  },
  // WebFlow
  {
    title: 'Live in Alignment',
    description: 'Functional medicine clinic specializing in Energy Recharge System therapies.',
    image: getProjectImage('liveinalignment-org.webp'),
    tags: ['Webflow', 'Healthcare', 'Functional Medicine', 'Animations'],
    link: 'https://www.liveinalignment.org/',
    category: 'webflow',
    role: 'Senior WordPress Developer',
  },
  {
    title: 'NeuroLife Healing',
    description: 'TMS and neurofeedback therapy center treating depression and anxiety.',
    image: getProjectImage('neurolifehealing.webp'),
    tags: ['Webflow', 'Healthcare', 'Mental Health', 'Modern Design'],
    link: 'https://www.neurolifehealing.com/',
    category: 'webflow',
    role: 'Senior WordPress Developer',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Layout },
  { id: 'wordpress', label: 'WordPress', icon: Code },
  { id: 'woocommerce', label: 'WooCommerce', icon: ShoppingCart },
  { id: 'shopify', label: 'Shopify', icon: ShoppingCart },
  { id: 'webflow', label: 'Webflow', icon: Globe },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.link, '_blank')}
                      className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
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
                    {project.tags.slice(0, 3).map((tag) => (
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

