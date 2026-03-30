/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ChevronRight, 
  Award, 
  Users, 
  TrendingUp, 
  Settings,
  GraduationCap,
  Globe,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Layers,
  Zap,
  MessageSquare
} from "lucide-react";

const AhmedPortfolio = () => {
  const services = [
    {
      title: "Operations Setup & System Building",
      icon: <Layers className="text-blue-600" size={28} />,
      description: "Building robust operational frameworks from the ground up to ensure your business runs like a well-oiled machine."
    },
    {
      title: "Team Training (Agents, Leaders, Managers)",
      icon: <Users className="text-blue-600" size={28} />,
      description: "Developing high-performing teams through tailored training programs for every level of leadership and staff."
    },
    {
      title: "KPI & Performance Management Systems",
      icon: <BarChart3 className="text-blue-600" size={28} />,
      description: "Implementing data-driven systems to track, analyze, and improve performance across all business units."
    },
    {
      title: "Customer Support Optimization",
      icon: <MessageSquare className="text-blue-600" size={28} />,
      description: "Streamlining support workflows and tools (Zendesk, HubSpot) to deliver exceptional customer experiences."
    },
    {
      title: "Business Process Improvement",
      icon: <Zap className="text-blue-600" size={28} />,
      description: "Identifying bottlenecks and optimizing workflows to increase efficiency and reduce operational costs."
    }
  ];

  const caseStudies = [
    {
      title: "Call Center Performance Transformation",
      challenge: "Low efficiency and inconsistent service quality in a high-pressure environment.",
      result: "Improved team performance by restructuring workflows and implementing a custom KPI tracking system.",
      tags: ["Operations", "KPIs", "Training"]
    },
    {
      title: "Startup Scalability Framework",
      challenge: "A rapidly growing startup lacked the structure to handle increasing demand.",
      result: "Built a complete operational system, improving organization and providing a clear path for scalability.",
      tags: ["System Building", "Scaling", "Process"]
    }
  ];

  const clients = [
    "Amazon", "Intouch CX", "AOI", "B.Tech", "Connect Squad", "Servo Travel", "El Helou Group", "Rehana Hotels"
  ];

  const experiences = [
    {
      title: "Operations Manager",
      company: "Connect Squad",
      period: "July 2025 – Present",
      description: "Overseeing daily operations and team performance. Leading strategic planning and workflow optimization to support client goals.",
    },
    {
      title: "Team Leader & LOB Manager",
      company: "Intouch CX",
      period: "July 2024 – July 2025",
      description: "Managed customer support teams. Top Performer Q1 2025. Focused on performance tracking and team development.",
    },
    {
      title: "Customer Service | SME | Assistant Trainer",
      company: "Amazon",
      period: "July 2022 – May 2024",
      description: "Subject Matter Expert and Assistant Trainer. Onboarded new hires and maintained high service standards.",
    }
  ];

  const whatsappLink = "https://wa.me/201144240400";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-black text-2xl tracking-tighter text-blue-600">AHMED AMIR.</span>
          <div className="hidden md:flex gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-blue-600 transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Book a Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-black uppercase tracking-[0.2em] mb-8">
              Operations & Business Consultant
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tight text-gray-900">
              I Help Businesses <br />
              <span className="text-blue-600">Build Systems,</span> <br />
              Train Teams & Scale Operations
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl font-medium">
              Operations Manager & Business Consultant with 8+ years of experience helping companies improve performance, structure operations, and grow efficiently.
            </p>
            <div className="flex flex-wrap gap-5">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-3"
              >
                Book a Consultation <ChevronRight size={20} />
              </a>
              <a 
                href="#case-studies"
                className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-3"
              >
                View My Work
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl bg-gradient-to-br from-blue-600 to-indigo-900 p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 border border-white rounded-full"></div>
              </div>
              <div className="relative z-10 space-y-10">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <TrendingUp size={48} className="text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-white leading-tight">
                    Optimizing <br />
                    <span className="text-blue-300">Operations</span>
                  </h3>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-1.5 w-10 bg-blue-400/30 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="h-full w-full bg-blue-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-xs font-black text-blue-300 uppercase tracking-widest mb-2">Efficiency</p>
                    <p className="text-3xl font-black text-white">98%</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-xs font-black text-blue-300 uppercase tracking-widest mb-2">Growth</p>
                    <p className="text-3xl font-black text-white">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Clients */}
      <section className="py-20 bg-white border-y border-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-16">Companies I’ve Worked With</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {clients.map((client, i) => (
              <span key={i} className="text-2xl font-black text-gray-900 tracking-tighter">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">What I Can Help You With</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Strategic solutions designed to solve operational problems and drive sustainable business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-4 leading-tight text-gray-900">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 px-6 bg-gray-50 rounded-[4rem] mx-4 md:mx-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Case Studies</h2>
              <p className="text-gray-500 max-w-md text-lg font-medium">Real-world examples of operational excellence and business transformation.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                <ChevronRight size={24} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-blue-600 flex items-center justify-center text-blue-600">
                <ChevronRight size={24} />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {caseStudies.map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-700"
              >
                <div className="p-12">
                  <div className="flex gap-2 mb-8">
                    {study.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black mb-6 leading-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">The Challenge</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">The Result</p>
                      <p className="text-gray-900 font-bold leading-relaxed text-lg">{study.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Consultant"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-12 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-5xl font-black mb-2">8+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Solving <br />Operational Problems</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Focused on Results, <br />Driven by Systems.</h2>
            <div className="space-y-8 text-lg text-gray-500 font-medium leading-relaxed">
              <p>
                I don't just consult; I partner with businesses to build the systems that allow them to scale without chaos. My approach is rooted in practical experience with global giants like Amazon.
              </p>
              <p>
                Whether it's training your team to reach peak performance or restructuring your entire operational workflow, my goal is always the same: <span className="text-gray-900 font-bold underline decoration-blue-600 decoration-4 underline-offset-4">measurable efficiency and sustainable growth.</span>
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-900 font-bold">Building Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-900 font-bold">Training Teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-900 font-bold">Solving Problems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-900 font-bold">Scaling Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Let’s Improve Your <br />Business Together
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                Ready to optimize your operations and scale your team? Let's discuss how we can build a more efficient future for your company.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/20 text-lg"
                >
                  Book a Free Consultation
                </a>
                <a 
                  href="mailto:maro.1261981@gmail.com"
                  className="bg-white/5 text-white border border-white/10 px-12 py-6 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg"
                >
                  Contact via Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-black text-xl tracking-tighter text-blue-600">AHMED AMIR.</span>
            <p className="text-gray-400 text-sm mt-2 font-medium">Operations Manager & Business Consultant</p>
          </div>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-gray-400">
            <a href="https://www.linkedin.com/in/cap-amir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">WhatsApp</a>
            <a href="mailto:maro.1261981@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
          </div>
          <p className="text-gray-400 text-xs font-medium">© {new Date().getFullYear()} Ahmed Amir Ahmed.</p>
        </div>
      </footer>
    </div>
  );
};

export default AhmedPortfolio;
