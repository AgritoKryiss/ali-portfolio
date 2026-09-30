import { Award, Code, Users, Shield, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { TRUST_BAR_CONTENT } from '../content/trustBar';

const iconMap: Record<string, typeof Award> = { Award, Code, Users, Shield, ShoppingCart };

export function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="section-heading">{TRUST_BAR_CONTENT.heading}</h2>
          <p className="section-subheading mx-auto">
            {TRUST_BAR_CONTENT.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BAR_CONTENT.cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

