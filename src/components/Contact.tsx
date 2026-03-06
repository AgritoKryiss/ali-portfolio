import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const emailjsData = {
  serviceID: "service_d02wn11",
  templateId: "template_ddvc28l",
  publicKey: "vtLjy58DO80jgDyeJ",
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // alert('Thank you for your message! I will get back to you soon.');
    emailjs
      .send(
        emailjsData.serviceID,
        emailjsData.templateId,
        formData,
        emailjsData.publicKey,
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "agrito.kryiss@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+973 3648 7095",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Bahrain (Remote Available)",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {contactInfo.map((info) => (
              <Card
                key={info.label}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-gray-900 mb-1">
                        {info.label}
                      </div>
                      <div className="text-sm sm:text-base text-gray-600 break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Available for Freelance
                </h3>
                <p className="text-sm sm:text-base text-blue-100">
                  I'm currently available for freelance work and new projects.
                  Let's create something amazing together!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="w-full min-h-[120px] sm:min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
