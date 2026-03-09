import { ArrowRight, Globe, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const stats = [
  { icon: Award, value: '7+', label: 'Years Experience' },
  { icon: Users, value: '30+', label: 'Client Projects' },
  { icon: Globe, value: 'Global', label: 'Clients Served' },
];

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Available for new projects
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Building Scalable
              <br />
              <span className="text-gradient">WordPress Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Senior WordPress Developer with 7+ years of experience building scalable 
              WordPress platforms, WooCommerce stores, and high-performance websites for global clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-3 text-base font-medium rounded-lg"
              >
                Hire Me
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 px-3 py-1 bg-white rounded text-xs text-slate-500 flex-1 text-center">
                    alihaiderr.com
                  </div>
                </div>
                
                {/* Code Preview */}
                <div className="p-6 bg-slate-900 font-mono text-sm">
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <span className="text-purple-400">class</span>
                    <span className="text-yellow-400">WordPressDeveloper</span>
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="text-slate-300">
                      <span className="text-blue-400">experience</span>: 
                      <span className="text-orange-400"> "7+ years"</span>,
                    </div>
                    <div className="text-slate-300">
                      <span className="text-blue-400">specialties</span>: [
                      <span className="text-green-400">"Custom Themes"</span>,
                      <span className="text-green-400">"WooCommerce"</span>,
                      <span className="text-green-400">"Performance"</span>
                      ],
                    </div>
                    <div className="text-slate-300">
                      <span className="text-blue-400">projects</span>: 
                      <span className="text-orange-400"> 30+</span>,
                    </div>
                    <div className="text-slate-300">
                      <span className="text-blue-400">clients</span>: 
                      <span className="text-orange-400"> "Global"</span>,
                    </div>
                    <div className="text-slate-300">
                      <span className="text-purple-400">buildSolutions</span>() {'{'}
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-purple-400">return</span> scalablePlatforms;
                    </div>
                    <div className="text-slate-400">{'}'}</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Performance</div>
                    <div className="text-xs text-slate-500">95+ Score</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">30+</div>
                    <div className="text-xs text-slate-500">Projects Delivered</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

