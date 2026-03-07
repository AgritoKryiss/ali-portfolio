import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    // ==========================================
    // WORDPRESS SITES (29 sites)
    // ==========================================

    // Premier Consultancy Group
    {
      title: "Premier Consultancy",
      description:
        "VIP immigration and international tax consultancy for high-net-worth individuals. Features citizenship by investment programs, residency solutions, and global mobility services with 20+ years of industry experience.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Consulting", "Financial Services", "Custom Theme"],
      link: "https://premierconsultancy.com/",
    },
    {
      title: "Premier Consultancy - Thailand",
      description:
        "Thailand office of Premier Consultancy serving Southeast Asian clients with residency by investment, second citizenship programs, and international tax planning services.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Multilingual", "Consulting", "Booking System"],
      link: "https://premierconsultancy.co.th/",
    },
    {
      title: "Premier Travelogue",
      description:
        "Travel and tourism platform showcasing luxury destinations, travel guides, and bespoke vacation experiences for discerning travelers seeking unique global adventures.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Travel", "Luxury", "Gallery"],
      link: "https://premiertravelogue.com/",
    },

    // Lafeber Company Multi-site Ecosystem
    {
      title: "Lafeber Company",
      description:
        "Multi-site WordPress ecosystem for premium pet nutrition company. Includes retail, veterinary, and specialty pet bird divisions with WooCommerce integration and custom product catalogs.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "Multisite", "ACF", "CPT"],
      link: "https://lafeber.com/",
    },
    {
      title: "Lafeber Pet Shop",
      description:
        "E-commerce storefront for Lafeber's premium pet products featuring subscription services, auto-ship functionality, and educational resources for pet owners.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1080",
      tags: ["WooCommerce", "E-commerce", "Subscription", "ACF"],
      link: "https://lafeber.com/petshop",
    },
    {
      title: "Lafeber Vet",
      description:
        "Veterinary professional portal with specialized nutrition resources, practice management tools, and wholesale ordering system for veterinary clinics.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "B2B", "Veterinary", "ACF"],
      link: "https://lafeber.com/vet",
    },
    {
      title: "Lafeber Mammals",
      description:
        "Specialized division focusing on small mammal nutrition with species-specific feeding guides, product recommendations, and care resources for exotic pet owners.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Custom Theme", "Educational", "ACF"],
      link: "https://lafeber.com/mammals",
    },
    {
      title: "Lafeber Pet Birds",
      description:
        "Avian nutrition authority featuring species-specific diets, bird care guides, and premium pellet food products backed by veterinary research.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Custom Theme", "Educational", "ACF", "CPT"],
      link: "https://lafeber.com/pet-birds",
    },

    // Emeraid Healthcare
    {
      title: "Emeraid Healthcare",
      description:
        "Critical care nutrition for exotic animals and pets. Features veterinary-grade recovery diets, feeding protocols, and clinical resources for animal hospitals.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "Healthcare", "Veterinary"],
      link: "https://emeraid.com/",
    },
    {
      title: "Emeraid Veterinary",
      description:
        "Veterinary professional portal for Emeraid's critical care nutrition products with clinical studies, feeding calculators, and practice integration tools.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "B2B", "Veterinary"],
      link: "https://emeraid.com/vet",
    },

    // Additional Sites from Research
    {
      title: "Essential Data Corporation",
      description:
        "Nationwide technical writing and documentation services with 40+ years of expertise. Features service catalogs, industry solutions, and client portal for document management.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "B2B", "Professional Services", "Custom Theme"],
      link: "https://essentialdata.com/",
    },
    {
      title: "The Salisbury Center",
      description:
        "Northern Virginia's premier event venue hosting comedy shows, MMA events, and live performances. Features event calendar, ticketing integration, and virtual tours.",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Events", "Venue", "Ticketing"],
      link: "https://thesalisburycenter.com/",
    },
    {
      title: "Eagle Rigging & Transport",
      description:
        "Industrial machinery moving and heavy rigging services. Features service portfolio, equipment showcase, quote request system, and project case studies.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Industrial", "Logistics", "Custom Theme"],
      link: "https://eaglerigging.com/",
    },
    {
      title: "Iron & Fire Coffee",
      description:
        "Award-winning specialty coffee roaster offering premium beans, brewing equipment, and subscription services. Features e-commerce, brewing guides, and coffee education resources.",
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "Subscription", "Food & Beverage"],
      link: "https://ironandfire.co.uk/",
    },
    {
      title: "Trinity Credit",
      description:
        "Debt relief and financial counseling services helping individuals manage unsecured debt and mortgage assistance. Features consultation booking and resource library.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1080",
      tags: [
        "WordPress",
        "Financial Services",
        "Consulting",
        "Lead Generation",
      ],
      link: "https://trinitycredit.org/",
    },
    {
      title: "Passarella & Associates",
      description:
        "Environmental consulting firm specializing in ecological assessments, permitting, and listed species surveys. Features service portfolio and project case studies.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Environmental", "Consulting", "Custom Theme"],
      link: "https://passarella.net/",
    },
    {
      title: "Dynamic Capital",
      description:
        "Revenue-based financing and business line of credit solutions for small businesses. Features loan calculators, application portal, and merchant resources.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Financial Services", "Fintech", "Custom Portal"],
      link: "https://www.dynamiccap.com/",
    },
    {
      title: "Dynamic Cap Funding",
      description:
        "Quick pre-qualification portal for Dynamic Capital's business financing solutions with streamlined application process and funding status tracking.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Fintech", "Landing Page", "Lead Generation"],
      link: "https://funding.dynamiccap.com/",
    },
    {
      title: "Sunshine4Health",
      description:
        "Nature's Sunshine Products independent distributor featuring natural supplements, wellness education, and personalized health consultations.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "E-commerce", "Health & Wellness", "MLM"],
      link: "https://sunshine4health.com/",
    },
    {
      title: "iHeartCats",
      description:
        "Cat rescue and advocacy platform featuring pet food donations, flight rescue programs, and community-driven initiatives to help shelter cats.",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Nonprofit", "Pet Rescue", "Community"],
      link: "https://iheartcats.com/",
    },
    {
      title: "iHeartDogs",
      description:
        "Dog rescue organization with mission-driven e-commerce. Every purchase funds food donations, flight rescues, and support for domestic violence survivors with pets.",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "Nonprofit", "Social Impact"],
      link: "https://iheartdogs.com/",
    },
    {
      title: "Cannanine",
      description:
        "Organic hemp CBD oil products for dogs and cats. Features educational content, product subscriptions, and give-back program feeding shelter dogs with every purchase.",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "WooCommerce", "Pet Health", "Subscription"],
      link: "https://cannanine.com/",
    },
    {
      title: "Meridian Integration",
      description:
        "Oracle Energy and Water implementation partner driving digital evolution for utility companies. Features service portfolios, case studies, and partner integrations.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Enterprise", "Technology", "B2B"],
      link: "https://www.meridian-integration.com/",
    },
    {
      title: "Crisp Regional Hospital",
      description:
        "Full-service hospital serving Central Georgia with modern medical practices. Features patient portal, physician directory, service information, and online bill pay.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Patient Portal", "Custom Theme"],
      link: "https://crispregional.org/",
    },
    {
      title: "ARC Group",
      description:
        "American Recruiting & Consulting Group with 40+ years of experience. Features job board, recruitment intelligence services, and candidate/client portals.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Recruitment", "Job Board", "Custom Portal"],
      link: "https://www.arcgonline.com/",
    },
    {
      title: "Amida Care",
      description:
        "New York's largest Special Needs Plan providing health coverage with expert HIV and gender-affirming care. Features provider directories and member resources.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Insurance", "Member Portal"],
      link: "https://www.amidacareny.org/",
    },
    {
      title: "Space Print",
      description:
        "Australia's #1 online printing service offering business cards, stationery, and marketing materials with free delivery and next-day dispatch.",
      image:
        "https://images.unsplash.com/photo-1561839561-b13bcfe95249?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "E-commerce", "Printing", "B2B"],
      link: "https://www.spaceprint.com.au/",
    },
    {
      title: "Health Source Acupuncture",
      description:
        "Acupuncture and integrative medicine clinic in Linwood, NJ. Features educational blog, appointment booking, and holistic health resources.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Booking System", "Blog"],
      link: "https://www.healthsourceacupuncture.com/",
    },
    {
      title: "Revival Health & Wellness",
      description:
        "Holistic chiropractic and wellness center in Fenton, MO. Features neuropathy treatment, nutritional counseling, and comprehensive patient care programs.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Chiropractic", "Lead Generation"],
      link: "https://chirorevival.com/",
    },
    {
      title: "Dr. Jason Tripp",
      description:
        "Chronic pain and illness specialist offering neurologic, metabolic, and structural healing approaches. Features patient testimonials and treatment protocols.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Functional Medicine", "Custom Theme"],
      link: "https://www.drjasontripp.com/",
    },
    {
      title: "Nerve Health Institute",
      description:
        "Functional and holistic medicine clinic in Lafayette specializing in nerve health, chronic pain, and alternative healing therapies.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Healthcare", "Functional Medicine", "Custom Theme"],
      link: "https://nervehealth.com/",
    },
    {
      title: "Fusynth",
      description:
        "Strategic business growth partner offering growth marketing, e-commerce solutions, design systems, and web development services.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Agency", "Marketing", "Portfolio"],
      link: "https://fusynth.com/",
    },
    {
      title: "Shad Rentals",
      description:
        "Australian car rental and rent-to-own service featuring hybrid vehicles for rideshare drivers. Features vehicle catalog and booking system.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Automotive", "Rental", "Booking System"],
      link: "https://shadrentals.com.au/",
    },
    {
      title: "Tippitoes Dance",
      description:
        "Dance studio website with class scheduling, registration system, and showcase galleries for student performances and events.",
      image:
        "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Dance", "Booking System", "Gallery"],
      link: "https://www.tippitoesdance.com/",
    },
    {
      title: "CHG Institute",
      description:
        "Educational institution offering professional development courses, certification programs, and corporate training solutions.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Education", "LMS", "Custom Portal"],
      link: "https://www.thechginstitute.com/",
    },
    {
      title: "Heritage Signs FL",
      description:
        "Full-service custom sign company serving North Florida since 2007. Family-owned business specializing in design, custom fabrication, and installation of commercial signage for businesses, schools, and organizations across Jacksonville and Northeast Florida.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Local Business", "Portfolio", "Service"],
      link: "https://www.heritagesignsfl.com/",
    },
    {
      title: "International Translation Bureau",
      description:
        "Multilingual translation services with project submission portal, language selection system, and professional interpreter network.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1080",
      tags: ["WordPress", "Multilingual", "Translation", "WPML"],
      link: "https://www.internationaltercumeburosu.com/",
    },

    // ==========================================
    // SHOPIFY SITES (4 sites)
    // ==========================================

    {
      title: "Whitney Jordan Naturals",
      description:
        "Premium air-dried fruit snacks with clean ingredients. Shopify store featuring subscription boxes, wholesale portal, and product education content.",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1080",
      tags: ["Shopify", "E-commerce", "Food & Beverage", "Subscription"],
      link: "https://whitneyjordan.net/",
    },
    {
      title: "Audae Club",
      description:
        "Luxury dress rental platform offering secondhand designer gowns. Features rental calendar, size filtering, and professional cleaning services.",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1080",
      tags: ["Shopify", "Rental", "Fashion", "Luxury"],
      link: "https://audaeclub.com/",
    },
    {
      title: "The Hero Company",
      description:
        "Patriotic jewelry and accessories brand that donates 20% of proceeds to fund service dogs for veterans battling PTSD. Over $1.7M funded to date.",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1080",
      tags: ["Shopify", "Jewelry", "Social Impact", "Veterans"],
      link: "https://theherocompany.co/",
    },
    {
      title: "STRĀ Worldwide",
      description:
        "Innovative pet feeding solutions that fund street feeders globally. Every bracelet purchase provides 10 meals to stray dogs and cats with tracking updates.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1080",
      tags: ["Shopify", "Pet Products", "Social Impact", "Innovation"],
      link: "https://straworldwide.com/",
    },

    // ==========================================
    // WEBFLOW SITES (2 sites)
    // ==========================================

    {
      title: "Live in Alignment",
      description:
        "Functional medicine clinic specializing in Energy Recharge System therapies, hyperbaric oxygen treatment, and holistic healing for complex chronic conditions.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080",
      tags: ["Webflow", "Healthcare", "Functional Medicine", "Animations"],
      link: "https://www.liveinalignment.org/",
    },
    {
      title: "NeuroLife Healing",
      description:
        "TMS and neurofeedback therapy center in Salt Lake City treating depression, anxiety, ADHD, and brain-based conditions without medication.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1080",
      tags: ["Webflow", "Healthcare", "Mental Health", "Modern Design"],
      link: "https://www.neurolifehealing.com/",
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
                        onClick={() => window.open(project.link, "_blank")}
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
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                        >
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
