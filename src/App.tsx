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
  CheckCircle2
} from "lucide-react";

const AhmedPortfolio = () => {
  const experiences = [
    {
      title: "Operations Manager",
      company: "Connect Squad",
      period: "July 2025 – Present",
      description: "Oversee daily operations and team performance to ensure service quality and efficiency across multiple projects. Lead strategic planning and workflow optimization.",
      skills: ["Hubspot", "Zoho", "KPI Monitoring", "Strategic Planning"]
    },
    {
      title: "Team Leader & LOB Manager",
      company: "Intouch CX",
      period: "July 2024 – July 2025",
      description: "Managed customer support team in a call center environment. Oversaw Nutrition and Fitness LOB. Top Performer Q1 2025.",
      skills: ["Zendesk", "Team Leadership", "Performance Tracking"]
    },
    {
      title: "Customer Service | SME | Assistant Trainer",
      company: "Amazon",
      period: "July 2022 – May 2024",
      description: "Promoted to Subject Matter Expert (SME). Supported training initiatives and onboarded new hires. Ensured alignment with Amazon service standards.",
      skills: ["AC2/AC3", "Process Guidance", "Training"]
    },
    {
      title: "Freelance Business Consultant",
      company: "Self-Employed",
      period: "Jan 2017 – Present",
      description: "Providing consulting, training, and operational solutions for businesses across diverse industries including Construction, Hospitality, and Retail.",
      skills: ["SOPs", "Business Scaling", "Training Programs"]
    }
  ];

  const skills = {
    technical: ["CRM Systems (Zendesk, HubSpot, Zoho)", "Microsoft Office", "Google Workspace", "AI Tools", "Canva", "Photoshop"],
    core: ["Operations Management", "Business Development", "Training & Coaching", "Performance Management", "Process Optimization", "Team Leadership"]
  };

  const clients = [
    "B.TECH & B.TECH School", "Connect Squad", "Intouch CX", "Al Manhal School", 
    "Servo Travel", "El Helou Group", "El Pharonieah Group", "AOI", 
    "Rehana Hotels", "Delta Sharm Hotels", "Travelways Egypt", "CompuCon Software"
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-blue-600">AA.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="https://wa.me/201144240400"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Freelance Business Consultant
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Ahmed Amir <br />
              <span className="text-blue-600">Ahmed</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
              Expert Business Consultant providing strategic operational solutions, team training, and performance optimization for diverse industries since 2017.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Globe size={18} />
                <span>English & Arabic</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-900 p-12 flex flex-col justify-center relative group">
              {/* Abstract Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 border border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white"></div>
              </div>

              <div className="relative z-10 space-y-8">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
                >
                  <TrendingUp size={40} className="text-white" />
                </motion.div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    Optimizing <br />
                    <span className="text-blue-300">Operations</span>
                  </h3>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-1 w-8 bg-blue-400/30 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="h-full w-full bg-blue-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Efficiency</p>
                    <p className="text-xl font-bold text-white">98%</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Growth</p>
                    <p className="text-xl font-bold text-white">+24%</p>
                  </div>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute top-8 right-8 text-white/20">
                <Settings size={64} className="animate-spin-slow" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">Top Performer</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Q1 2025 • Intouch CX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Operations", icon: <Settings className="text-blue-500" /> },
            { label: "Consulting", icon: <Briefcase className="text-blue-500" /> },
            { label: "Training", icon: <Users className="text-blue-500" /> },
            { label: "Leadership", icon: <Award className="text-blue-500" /> }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <p className="font-bold text-gray-900">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
              <p className="text-gray-500 max-w-md italic">A track record of excellence in operations and management across diverse industries.</p>
            </div>
            <div className="h-px flex-grow bg-gray-200 mx-8 hidden md:block mb-4"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid md:grid-cols-[200px_1fr] gap-8"
              >
                <div className="text-gray-400 font-medium pt-1">
                  {exp.period}
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all group-hover:border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-lg text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, si) => (
                      <span key={si} className="text-[11px] font-bold uppercase tracking-wider text-gray-400 border border-gray-100 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="py-32 bg-[#1a1a1a] text-white rounded-[3rem] mx-4 md:mx-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8">Expertise & <br /><span className="text-blue-500">Core Competencies</span></h2>
              <p className="text-gray-400 mb-12 leading-relaxed max-w-md">
                Specialized in building efficient operational systems and developing high-performing teams across multiple industries.
              </p>
              <div className="space-y-6">
                {skills.core.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Settings size={20} className="text-blue-500" />
                Technical Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.technical.map((tech, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm leading-tight">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap size={20} className="text-blue-500" />
                  Education
                </h3>
                <p className="text-gray-300 font-medium">Bachelor's in Computer Science</p>
                <p className="text-gray-500 text-sm">Information Security • Future Academy (2002)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-16">Selected Clients & Partners</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, i) => (
              <span key={i} className="text-lg font-bold text-gray-800 whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's build something <br /><span className="text-blue-600 italic serif font-normal">exceptional</span> together.</h2>
          <p className="text-xl text-gray-500 mb-12">Available for consulting, operational leadership, and strategic advisory roles.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="mailto:maro.1261981@gmail.com" className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
              <Mail className="mx-auto mb-4 text-gray-400 group-hover:text-blue-600 transition-colors" size={32} />
              <p className="font-bold text-gray-900">Email</p>
              <p className="text-sm text-gray-500 truncate">maro.1261981@gmail.com</p>
            </a>
            <a href="tel:01144240400" className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
              <Phone className="mx-auto mb-4 text-gray-400 group-hover:text-blue-600 transition-colors" size={32} />
              <p className="font-bold text-gray-900">Phone</p>
              <p className="text-sm text-gray-500">01144240400</p>
            </a>
            <a href="https://www.linkedin.com/in/cap-amir" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
              <Linkedin className="mx-auto mb-4 text-gray-400 group-hover:text-blue-600 transition-colors" size={32} />
              <p className="font-bold text-gray-900">LinkedIn</p>
              <p className="text-sm text-gray-500">cap-amir</p>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Download CV <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm font-medium">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Ahmed Amir Ahmed. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AhmedPortfolio;
