import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              Senior WordPress Developer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm
              <span className="text-blue-600"> Ali Haider</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              7+ years building scalable WordPress platforms, E-Commerce
              systems, and high-performance websites for global clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300"
                onClick={scrollToPortfolio}
              >
                <BriefcaseBusiness className="mr-2" size={20} /> View Portfolio
              </Button>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-gray-900">7+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1651684195895-38708dc94cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="WordPress Developer Workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-3xl">💻</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-3xl">🚀</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
