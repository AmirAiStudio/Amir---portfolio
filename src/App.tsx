/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
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
  MessageSquare,
  Languages,
  MoreHorizontal,
  Cpu,
  Code,
  Palette,
  BookOpen,
  Sparkles,
  Laptop,
  Play
} from "lucide-react";

const ServiceCard = ({ service, icon, lang }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      className="relative h-[450px] w-full perspective-2000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-white p-12 rounded-[3rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.1)] hover:border-blue-100 flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-10 shadow-inner">
            {icon}
          </div>
          <h3 className="text-2xl font-black mb-6 leading-tight text-gray-900">{service.title}</h3>
          <p className="text-gray-500 leading-relaxed font-medium text-lg">
            {service.description}
          </p>
          <div className="mt-auto pt-10 flex items-center justify-between">
            <div className="flex gap-2">
              <div 
                onClick={handleFlip}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${!isFlipped ? 'bg-blue-600 w-4' : 'bg-gray-200'}`} 
              />
              <div 
                onClick={handleFlip}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isFlipped ? 'bg-blue-600 w-4' : 'bg-gray-200'}`} 
              />
            </div>
            <div 
              onClick={handleFlip}
              className="flex items-center gap-2 text-blue-600 group-hover:gap-4 transition-all"
            >
              <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                {lang === "en" ? "Details" : "التفاصيل"}
              </span>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <ChevronRight size={18} className={lang === "ar" ? "rotate-180" : ""} />
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-blue-600 p-12 rounded-[3rem] flex flex-col text-white shadow-2xl"
          style={{ 
            transform: "rotateY(180deg)", 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-blue-100">
            {lang === "en" ? "Key Benefits" : "المميزات الرئيسية"}
          </h3>
          <ul className="space-y-5 flex-grow">
            {service.details.map((detail: string, di: number) => (
              <li key={di} className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} />
                </div>
                <span className="font-bold text-sm leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex gap-2">
              <div 
                onClick={handleFlip}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${!isFlipped ? 'bg-white w-4' : 'bg-white/30'}`} 
              />
              <div 
                onClick={handleFlip}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isFlipped ? 'bg-white w-4' : 'bg-white/30'}`} 
              />
            </div>
            <div 
              onClick={handleFlip}
              className="flex items-center gap-2 text-white/80 cursor-pointer"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">
                {lang === "en" ? "Back" : "عودة"}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <ChevronRight size={18} className={lang === "en" ? "rotate-180" : ""} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CaseStudyCard = ({ study, t, lang, whatsappLink }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative h-[600px] w-full perspective-2000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ 
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col overflow-hidden group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Decorative Gradient Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
          
          {/* Subtle Arrowhead Pattern */}
          <div className="absolute bottom-10 right-10 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <ChevronRight size={24} />
                <ChevronRight size={24} />
              </div>
              <div className="flex gap-1 ml-4">
                <ChevronRight size={24} />
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {study.tags.map((tag: string, ti: number) => (
              <span key={ti} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-100/50">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-black mb-6 leading-tight text-gray-900 relative z-10">
            {study.title}
          </h3>

          <div className="space-y-6 flex-grow relative z-10">
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100/50">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                {t.caseStudies.challenge}
              </p>
              <p className="text-gray-600 font-medium leading-relaxed text-sm line-clamp-3 italic">
                "{study.challenge}"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 relative overflow-hidden group/result">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/result:opacity-100 transition-opacity" />
              <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Award size={12} />
                {t.caseStudies.result}
              </p>
              <p className="text-white font-bold leading-relaxed text-base">
                {study.result}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            <span>{lang === "en" ? "Deep Dive" : "تفاصيل أكثر"}</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ChevronRight size={16} className={lang === "ar" ? "rotate-180" : ""} />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-[#0f172a] rounded-[2rem] p-8 flex flex-col text-white shadow-2xl border border-white/5"
          style={{ 
            transform: "rotateY(180deg)", 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
          
          <h3 className="text-lg font-black mb-8 text-blue-400 uppercase tracking-widest flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Zap size={16} className="text-blue-400" />
            </div>
            {t.caseStudies.whatIDid}
          </h3>

          <ul className="space-y-5 flex-grow relative z-10">
            {study.actions.map((action: string, ai: number) => (
              <motion.li 
                key={ai} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (ai * 0.1) }}
                className="flex items-start gap-4 group/item"
              >
                <div className="mt-1 w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/50 transition-all">
                  <CheckCircle2 size={12} className="text-blue-500" />
                </div>
                <span className="text-gray-300 font-medium leading-relaxed text-sm group-hover/item:text-white transition-colors">{action}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-auto relative z-10">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between group/cta transition-all mb-6"
            >
              <span className="text-sm font-bold text-blue-400">{t.caseStudies.cta}</span>
              <ExternalLink size={16} className="text-blue-400 group-hover/cta:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-2 text-white/40 font-bold text-[10px] uppercase tracking-widest justify-center">
              <ChevronRight size={12} className={lang === "en" ? "rotate-180" : ""} />
              <span>{lang === "en" ? "Back to summary" : "العودة للملخص"}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AhmedPortfolio = () => {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const translations = {
    en: {
      nav: {
        logo: "AHMED AMIR.",
        services: "Services",
        caseStudies: "Case Studies",
        about: "About",
        contact: "Contact",
      },
      hero: {
        badge: "AI, Operations & Digital Transformation Consultant",
        headline: "Transforming Businesses Through AI, Systems & Innovation",
        subheadline: "Helping organizations automate workflows, develop management systems, optimize operations, train teams, and scale efficiently through technology and AI.",
        ctaBook: "Book a Consultation",
        ctaWork: "View My Work",
        efficiency: "Automation Rate",
        growth: "Operations Scaled",
        optimizing: "Systemizing",
        operations: "Operations & AI"
      },
      clients: {
        title: "Companies I’ve Worked With"
      },
      whatIDid: "What I Did",
      whatIDo: {
        title: "What I Do",
        subtitle: "Delivering multi-disciplinary expertise at the intersection of AI, technology, operations, and creative strategy.",
        cards: [
          {
            title: "Software & Web Developer",
            desc: "Building integrated management systems, custom business platforms, and advanced web solutions.",
            tech: "React • Node.js • Tailored Business Systems • WordPress"
          },
          {
            title: "AI Trainer",
            desc: "Teaching professionals and teams how to leverage AI effectively in their daily workflows to maximize output.",
            tech: "Generative AI • ChatGPT • Midjourney • Custom Automation"
          },
          {
            title: "Operations Consultant",
            desc: "Designing operational systems, KPI structures, and optimizing workflow performance to scale businesses.",
            tech: "SOP Design • KPI Frameworks • Bottleneck Analysis • Scaling"
          },
          {
            title: "Content Creator",
            desc: "Founder of Amir AI Studio and creator of educational AI and tech content to inspire modern professionals.",
            tech: "Amir AI Studio • YouTube • Tech Community Engagement"
          },
          {
            title: "Corporate Trainer",
            desc: "Training company employees and managers on software and frameworks that improve work efficiency and productivity.",
            tech: "Corporate Coaching • Workplace Productivity • Software Training"
          },
          {
            title: "Creative Director",
            desc: "15+ years of experience in visual design, cohesive branding, visual communication and high-impact advertising.",
            tech: "Brand Identity • Packaging Design • Creative Campaigns"
          }
        ]
      },
      services: {
        title: "What I Can Help You With",
        subtitle: "High-impact solutions combining cutting-edge technology, intelligent automation, operational efficiency, and creative identity.",
        items: [
          {
            title: "AI & Automation",
            description: "Deploying intelligent AI integrations and custom automations to optimize your workflows and accelerate business operations.",
            details: [
              "AI Integration",
              "AI Agents",
              "Workflow Automation",
              "Prompt Engineering"
            ]
          },
          {
            title: "Software Development",
            description: "Developing robust, fully tailored management systems, business dashboards, and digital products built to scale.",
            details: [
              "Management Systems",
              "Business Dashboards",
              "Web Applications",
              "WordPress Solutions"
            ]
          },
          {
            title: "Operations Excellence",
            description: "Restructuring business processes, creating data-driven KPI dashboards, and training your team to scale without friction.",
            details: [
              "Process Optimization",
              "KPI Frameworks",
              "Team Management",
              "Performance Systems"
            ]
          },
          {
            title: "Corporate Training",
            description: "Providing interactive training and workshops for corporate staff and executives on critical digital tools and workflows to boost daily efficiency.",
            details: [
              "Employee Onboarding",
              "Management Training",
              "Workplace Productivity",
              "Software & Tool Mastery"
            ]
          },
          {
            title: "AI Training",
            description: "Tailored educational programs and workshops for companies, professionals, and teams to master generative AI.",
            details: [
              "Corporate AI Training",
              "AI Workshops",
              "AI Courses"
            ]
          },
          {
            title: "Branding & Design",
            description: "Leveraging 15+ years of visual communication experience to craft memorable, market-winning brand identities and assets.",
            details: [
              "Brand Identity",
              "Packaging Design",
              "Marketing Materials"
            ]
          }
        ]
      },
      caseStudies: {
        title: "Case Studies",
        subtitle: "Real-world examples of system builders in action and business transformation.",
        challenge: "The Challenge",
        result: "The Result",
        whatIDid: "What I Did",
        cta: "Want similar results? Let's talk",
        items: [
          {
            title: "Integrated Operations Management System",
            challenge: "A fire safety and firefighting equipment company struggled with disconnected communication between departments, field engineers, installation projects, maintenance contracts, supply operations, and client follow-ups.",
            result: "Built a centralized management system that connected all departments, streamlined communication, tracked installations, maintenance contracts, supply orders, field visits, and engineer activities in one integrated platform.",
            tags: ["Management System", "Operations", "Automation"],
            actions: [
              "Designed a complete management workflow",
              "Connected internal departments through one system",
              "Tracked installation and maintenance contracts",
              "Managed field engineer activities and site visits",
              "Centralized supplier and procurement processes",
              "Improved communication and reporting accuracy",
              "Reduced operational delays and information gaps"
            ]
          },
          {
            title: "Call Center Performance Transformation",
            challenge: "Low efficiency and inconsistent service quality in a high-pressure environment.",
            result: "Improved team performance by restructuring workflows and implementing a custom KPI tracking system.",
            tags: ["Operations", "KPIs", "Training"],
            actions: [
              "Redesigned workflows for efficiency",
              "Built KPI tracking system",
              "Improved team structure",
              "Enhanced service consistency"
            ]
          },
          {
            title: "Startup Scalability Framework",
            challenge: "A rapidly growing startup lacked the structure to handle increasing demand.",
            result: "Built a complete operational system, improving organization and providing a clear path for scalability.",
            tags: ["System Building", "Scaling", "Process"],
            actions: [
              "Built full operational system",
              "Defined workflows & responsibilities",
              "Created scalable structure",
              "Improved execution and organization"
            ]
          },
          {
            title: "School Management System Transformation",
            challenge: "The school faced major administrative challenges, including poor organization, lack of clear data tracking, and difficulty managing students, staff, and daily operations.",
            result: "Transformed school operations by building a fully customized management system, enabling better control, reporting, and decision-making.",
            tags: ["Education", "System Building", "Management"],
            actions: [
              "Designed a fully customized School Management System (SMS)",
              "Organized student and staff data into a structured system",
              "Built reporting dashboards",
              "Simplified workflows and daily operations",
              "Improved visibility and decision-making"
            ]
          }
        ]
      },
      about: {
        title: "From Design to AI, From Operations to Innovation",
        text1: "With more than 15 years of experience across design, branding, software development, operations management, and AI solutions, I help organizations build smarter systems, automate workflows, train teams, and scale sustainably.",
        text2: "As the founder of Amir AI Studio, I create educational content, train professionals in AI technologies, and develop digital solutions that drive measurable business growth.",
        points: ["Smarter Systems", "Workflow Automation", "AI Integration", "Sustainable Scaling"],
        experience: "Years of Multi-Disciplinary Excellence"
      },
      contact: {
        title: "Let’s Improve Your Business Together",
        subtitle: "Ready to optimize your operations and scale your team? Let's discuss how we can build a more efficient future for your company.",
        ctaBook: "Book a Consultation",
        ctaEmail: "Contact via Email"
      },
      footer: {
        description: "AI Consultant • Software Developer • Operations Strategist • Founder of Amir AI Studio",
        rights: "© 2026 Ahmed Amir Ahmed."
      }
    },
    ar: {
      nav: {
        logo: "أحمد أمير.",
        services: "الخدمات",
        caseStudies: "دراسات الحالة",
        about: "من أنا",
        contact: "تواصل معي",
      },
      hero: {
        badge: "مستشار الذكاء الاصطناعي والعمليات والتحول الرقمي",
        headline: "تحويل الأعمال من خلال الذكاء الاصطناعي والأنظمة والابتكار",
        subheadline: "أساعد المؤسسات على أتمتة خطوط العمل، وتطوير أنظمة الإدارة والتحكم التشغيلي، ودمج أدوات الذكاء الاصطناعي التوليدي، وتدريب الفرق لضمان نموها بسلاسة وكفاءة.",
        ctaBook: "احجز استشارة",
        ctaWork: "عرض أعمالي",
        efficiency: "معدل الأتمتة",
        growth: "توسيع العمليات",
        optimizing: "منهجية وهيكلة",
        operations: "العمليات والذكاء"
      },
      clients: {
        title: "شركات وبنوك عملت معها"
      },
      whatIDid: "ماذا فعلت",
      whatIDo: {
        title: "مجالات عملي وخبرتي",
        subtitle: "أقدم خدمات متكاملة تدمج بين الذكاء الاصطناعي، التكنولوجيا، هندسة العمليات، والإبداع الفني كصانع ومؤسس حلول.",
        cards: [
          {
            title: "مطور برمجيات وويب",
            desc: "بناء أنظمة إدارة العمليات المخصصة، ومنصات الأعمال المتطورة، وحلول تطبيقات الويب الذكية.",
            tech: "React • Node.js • أنظمة الإدارة المخصصة • ووردبريس"
          },
          {
            title: "مدرب ذكاء اصطناعي",
            desc: "تدريب المحترفين والمؤسسات والفرق على كيفية الاستفادة من أدوات الذكاء الاصطناعي التوليدي والعمل الإبداعي اليومي لزيادة الإنتاجية.",
            tech: "الذكاء الاصطناعي التوليدي • ChatGPT • هندسة الأوامر"
          },
          {
            title: "مستشار ومخطط عمليات تشغيلية",
            desc: "تصميم النظم التشغيلية، وصياغة مؤشرات قياس الأداء (KPIs)، وتبسيط وتعديل مسارات العمل لزيادة العوائد والأرباح.",
            tech: "هيكلة SOP • رصد KPI • إزالة العقبات في خطوط الأعمال • التوسع"
          },
          {
            title: "صانع محتوى تعليمي",
            desc: "مؤسس Amir AI Studio للتوعية والتدريب التقني، وصانع محتوى تعليمي ذكي لتبسيط الذكاء الاصطناعي للمجتمع العربي.",
            tech: "Amir AI Studio • صناعة المحتوى • تبسيط التكنولوجيا للجميع"
          },
          {
            title: "مدرب شركات ومؤسسات",
            desc: "تدريب موظفي الشركات والمديرين على البرامج والأدوات الرقمية التي تحسن مستوى العمل وترفع الإنتاجية اليومية والأداء العام.",
            tech: "تدريب الموظفين • كفاءة الإنتاجية • برامج وتطبيقات الأعمال"
          },
          {
            title: "مدير إبداعي وفني",
            desc: "أكثر من 15 عاماً من الخبرة في بناء العلامات التجارية والهوية البصرية المتكاملة وتصميم وتخطيط الحملات الإعلانية المبتكرة.",
            tech: "العلامات التجارية • تصميم أغلفة المنتجات • الإعلانات المبتكرة"
          }
        ]
      },
      services: {
        title: "الخدمات التي أقدمها",
        subtitle: "حلول رقمية وتشغيلية متكاملة مصممة خصيصاً لمساعدة الشركات على تحقيق الكفاءة والابتكار والنمو المستدام.",
        items: [
          {
            title: "الذكاء الاصطناعي والأتمتة",
            description: "تطبيق أدوات الذكاء الاصطناعي وبناء الأتمتة الذكية لرفع كفاءة سير العمل وتسريع عمليات الأعمال اليومية.",
            details: [
              "دمج الذكاء الاصطناعي",
              "وكلاء الذكاء الاصطناعي الذاتية",
              "أتمتة سير العمل والمهمات",
              "هندسة الأوامر الرقمية"
            ]
          },
          {
            title: "تطوير البرمجيات والويب",
            description: "تطوير برمجيات الأعمال القوية وأنظمة الإدارة المخصصة بالكامل ولوحات البيانات التي تدعم قراراتك وتنمي أعمالك الكبيرة.",
            details: [
              "أنظمة الإدارة والتحكم",
              "لوحات تحكم الأعمال",
              "تطبيقات الويب الحديثة",
              "حلول ووردبريس وحلول مخصصة"
            ]
          },
          {
            title: "التميز التشغيلي والهندسة العملياتية",
            description: "إعادة هيكلة وحوكمة عمليات الأعمال، وبناء مؤشرات قياس الأداء (KPIs)، وتوجيه الفرق لتحقيق أعلى درجات الكفاءة التشغيلية.",
            details: [
              "تحسين وتبسيط العمليات",
              "أطر عمل مؤشرات الأداء",
              "إدارة وتطوير مهارات الفرق",
              "أنظمة تقييم ومتابعة الأداء"
            ]
          },
          {
            title: "تدريب الشركات والمؤسسات",
            description: "إعداد وتقديم حقائب تدريبية تفاعلية لتأهيل موظفي الشركات والمديرين التنفيذيين على البرامج التقنية ومنهجيات تزيد كفاءة وجودة العمل اليومي.",
            details: [
              "تأهيل الموظفين الجدد",
              "تدريب الكوادر والمديرين",
              "مقاومة الهدر في الإنتاجية",
              "إتقان برامج وتطبيقات العمل"
            ]
          },
          {
            title: "التدريب على الذكاء الاصطناعي",
            description: "برامج تعليمية وورش عمل مخصصة للشركات والمحترفين لتمكينهم من أدوات الذكاء الاصطناعي التوليدي ومهمات العمل اليومية.",
            details: [
              "تدريب الشركات على الذكاء الاصطناعي",
              "ورش العمل المتخصصة",
              "مساقات وكورسات الذكاء الاصطناعي"
            ]
          },
          {
            title: "الهوية والتصميم الإبداعي",
            description: "نستفيد من خبرة تزيد عن 15 عاماً في الاتصال البصري والغرافيك لنصنع لشركتك هوية تجارية مميزة تكسب السوق وعقول العملاء.",
            details: [
              "بناء الهوية البصرية المتكاملة",
              "تصميم منتجات وتغليف فاخر",
              "المواد والمطبوعات الدعائية والتسويقية"
            ]
          }
        ]
      },
      caseStudies: {
        title: "دراسات حالة من واقع العمل",
        subtitle: "أمثلة حية لأنظمة برمجية وتطوير عمليات تشغيلية قمت ببنائها وحققت نجاحاً تشغيلياً كبيراً.",
        challenge: "التحدي التشغيلي",
        result: "النتيجة والأثر",
        whatIDid: "ما قمت به بالتفصيل",
        cta: "تريد تحقيق نتائج مماثلة؟ تواصل معي اليوم",
        items: [
          {
            title: "نظام متكامل لإدارة العمليات التشغيلية",
            challenge: "كانت إحدى شركات معدات مكافحة الحرائق والسلامة تعاني من تشتت الاتصال والبيانات بين الإدارات المختلفة، والمهندسين الميدانيين، ومشاريع التركيب، وعقود الصيانة، وعمليات التوريد، ومتابعة العملاء.",
            result: "تم بناء نظام إدارة مركزي يربط جميع الإدارات، ويبسط الاتصالات، ويتتبع التركيبات وعقود الصيانة، وأوامر التوريد، والزيارات الميدانية، وأنشطة المهندسين في منصة واحدة متكاملة.",
            tags: ["نظام إدارة", "عمليات تشغيلية", "أتمتة الأنظمة"],
            actions: [
              "تصميم وتوثيق هيكل خطط العمل التشغيلية بالكامل",
              "ربط الإدارات الداخلية من خلال نظام موحد مستند للويب",
              "تتبع عقود التركيبات والصيانة الدورية للعملاء بدقة فائقة",
              "إدارة وتنسيق زيارات مهندسي الميدان وجدولة تحركاتهم",
              "مركزية عمليات التوريد والشراء والتحكم في المخازن لسرعة الإمداد",
              "تحسين تدفق التواصل والتقارير بدقة وسرعة عالية",
              "تقليص فترات التأخير التشغيلية وفجوات المعلومات في المنشأة"
            ]
          },
          {
            title: "تحول أداء مركز الاتصال",
            challenge: "كفاءة منخفضة وجودة خدمة غير متسقة في بيئة عالية الضغط التشغيلي وعمليات معقدة.",
            result: "تحسين أداء الفريق من خلال إعادة هيكلة سير العمل وتنفيذ نظام مخصص لتتبع مؤشرات الأداء والإنتاجية.",
            tags: ["العمليات", "مؤشرات الأداء", "التدريب"],
            actions: [
              "إعادة تصميم سير العمل لتحقيق الفاعلية التشغيلية وقصر زمن الاستجابة",
              "بناء نظام لتتبع مؤشرات الأداء الحيوية والتقارير الرقمية",
              "تحسين هيكل الفريق وتوزيع الأدوار والمسؤوليات بوضوح",
              "تعزيز اتساق وجودة الخدمة المقدمة للعملاء ورفع رضاهم"
            ]
          },
          {
            title: "إطار قابلية التوسع للشركات الناشئة",
            challenge: "افتقرت شركة ناشئة سريعة النمو إلى الهيكل والآليات والأنظمة اللاحة للتعامل مع الطلب المتزايد.",
            result: "بناء نظام تشغيلي كامل، وتحسين التنظيم وتوفير مسار واضح ومستدام لقابلية التوسع دون فوضى.",
            tags: ["بناء الأنظمة", "التوسع", "العمليات"],
            actions: [
              "بناء نظام تشغيلي متكامل يدعم النمو والتطور السريع للحجم",
              "تحديد قنوات سير العمل وتفصيل المسؤوليات وتنسيق المهام للأقسام",
              "إنشاء هيكل تنظيمي قابل للتوسع والتمكين الرقمي الفوري والفعال",
              "تحسين تنفيذ وسرعة عمليات المؤسسة بأعلى درجات الموثوقية"
            ]
          },
          {
            title: "تحول نظام إدارة المدارس",
            challenge: "واجهت إحدى المدرسة تحديات إدارية وتشغيلية كبرى، بما في ذلك سوء التنظيم ونقص تتبع البيانات لإشراك أولياء الأمور.",
            result: "تحويل عمليات المدرسة من خلال بناء نظام إدارة مخصص بالكامل، مما أتاح سلاسة اتخاد القرار وإشراك الطلاب.",
            tags: ["التعليم", "بناء الأنظمة", "الإدارة"],
            actions: [
              "تصميم نظام إدارة مدرسي (SMS) مخصص بالكامل بمواصفات تقنية حديثة",
              "تنظيم بيانات الطلاب والموظفين والشؤون المالية في نظام مركزي ذكي",
              "بناء لوحات تحكم ديناميكية لتقارير الإدارة والمتابعة التشغيلية",
              "تبسيط سير العمل والعمليات اليومية لتسهيل التعليم والاتصال المشترك",
              "تحسين الرؤية واتخاذ القرار الفوري بالارتكاز على إحصاءات حية"
            ]
          }
        ]
      },
      about: {
        title: "من التصميم الفني إلى هندسة الذكاء والعمليات",
        text1: "مع أكثر من 15 عاماً من الخبرة المتكاملة في حقول التصميم البصري، بناء الهوية، وتطوير البرمجيات، وإدارة العمليات، وحلول الذكاء الاصطناعي، أساعد الشركات على دمج التكنولوجيا الحيوية لبناء أنظمة غاية في الدقة تعمل بمثابة العقل المفكر.",
        text2: "بصفتي مؤسساً لمنصة Amir AI Studio المتخصصة بالتوعية والتدريب التقني، أركز على صناعة محتوى تعليمي في حقول الذكاء الاصطناعي، وتدريب المحترفين والشركات، وتطوير الأدوات التي تحقق الكفاءة وتحافظ على وتيرة نمو مستدامة للأعمال.",
        points: ["أنظمة ذكية بالكامل", "أتمتة خطوط العمل", "تطبيقات مخصصة", "توسع ونمو تشغيلي"],
        experience: "عاماً من التميز الفني والتقني"
      },
      contact: {
        title: "دعنا نصنع المستقبل ونطور عملك معاً",
        subtitle: "جاهز لتسليح شركتك بأنظمة الذكاء الاصطناعي المتقدمة وأتمتة العمليات؟ دعنا نناقش كيف يمكننا هندسة وبناء مستقبل متميز من الكفاءة لشركتك.",
        ctaBook: "احجز جلستك الاستشارية",
        ctaEmail: "تواصل عبر البريد الإلكتروني"
      },
      footer: {
        description: "مستشار ذكاء اصطناعي • مطور برمجيات • مخطط عمليات استراتيجي • مؤسس Amir AI Studio",
        rights: "© 2026 أحمد أمير أحمد. جميع الحقوق محفوظة لـه."
      }
    }
  };

  const t = translations[lang];
  const whatsappLink = "https://wa.me/201090123456";
  const clients = ["Amazon", "Vodafone", "Etisalat", "B.TECH", "Connect Squad", "Smart Solution"];
  const servicesIcons = [
    <Cpu className="text-blue-600" size={32} />,
    <Code className="text-blue-600" size={32} />,
    <BarChart3 className="text-blue-600" size={32} />,
    <Users className="text-blue-600" size={32} />,
    <BookOpen className="text-blue-600" size={32} />,
    <Palette className="text-blue-600" size={32} />
  ];

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
    setCurrentSlide(0);
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white ${lang === "ar" ? "rtl" : "ltr"}`} style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      {/* Navbar Container */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-xl border-b border-gray-50" dir="ltr">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <span className="font-black text-2xl tracking-tighter text-blue-600 select-none">
            {t.nav.logo}
          </span>
          <nav className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#case-studies" className="hover:text-blue-600 transition-colors">{t.nav.caseStudies}</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLang} 
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer shadow-sm"
              title={lang === "en" ? "Translate to Arabic" : "ترجمة إلى الإنجليزية"}
            >
              <Languages size={18} />
            </button>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              {lang === "en" ? "Get in touch" : "ابدأ بالتواصل"}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-44 pb-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:60px_60px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-blue-100/50 shadow-sm">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-10 tracking-tighter text-gray-900">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-14 max-w-2xl font-medium opacity-80">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center gap-4 text-base uppercase tracking-widest"
              >
                {t.hero.ctaBook} <ChevronRight size={20} className={lang === "ar" ? "rotate-180" : ""} />
              </a>
              <a 
                href="#case-studies"
                className="bg-white text-gray-900 border-2 border-gray-100 px-12 py-6 rounded-[2rem] font-black hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-4 text-base uppercase tracking-widest"
              >
                {t.hero.ctaWork}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:block"
          >
            {/* Ambient AI Glow background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-cyan-500/10 rounded-[4.5rem] blur-2xl opacity-70 pointer-events-none animate-pulse duration-[8s]" />
            
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(37,99,235,0.12)] bg-[#0c1222] relative border border-blue-500/10">
              {/* Technical background elements */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-blue-400 rounded-full animate-spin [animation-duration:40s]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-blue-500/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-cyan-400/20 rounded-full animate-spin [animation-duration:60s] reverse"></div>
              </div>
              
              {/* Actual Consultant Image with referral policy and soft blend */}
              <img 
                src="https://res.cloudinary.com/deuwh0ysg/image/upload/v1780799105/Gemini_Generated_Image_aodtozaodtozaodt_zmhses.png" 
                alt="Ahmed Amir - AI & Operations Consultant"
                className="w-full h-full object-cover relative z-10 select-none transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Soft edge bottom fade & top ambient lights */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent opacity-80 z-20 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 z-30 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white font-black text-xs tracking-widest uppercase">
                    {lang === "en" ? "Available for consulting" : "متاح للمشاريع والاستشارات"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                  <span className="text-[10px] font-black tracking-widest uppercase text-cyan-300">
                    {lang === "en" ? "AI POWERED" : "مدعوم بالذكاء"}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Overlap subtle tech metrics for professional consulting flavor */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-1/4 p-6 bg-[#0c1222]/90 border border-blue-500/20 backdrop-blur-xl rounded-3xl hidden xl:block shadow-2xl z-30"
            >
              <p className="text-[9px] font-black text-cyan-400 uppercase tracking-widest mb-1">{t.hero.efficiency}</p>
              <p className="text-2xl font-black text-white">95%+</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-1/4 p-6 bg-[#0c1222]/90 border border-indigo-500/20 backdrop-blur-xl rounded-3xl hidden xl:block shadow-2xl z-30"
            >
              <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1">{t.hero.growth}</p>
              <p className="text-2xl font-black text-white">150%+</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section (New) */}
      <section id="what-i-do" className="py-32 px-6 bg-gradient-to-b from-[#fcfcfc] to-white relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100/50 mb-6 shadow-sm">
              <Sparkles size={12} className="text-blue-600 animate-pulse" />
              {lang === "en" ? "Multidisciplinary Approach" : "نموذج عمل متكامل"}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">{t.whatIDo.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {t.whatIDo.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Software & Web Developer */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[0].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[0].desc}
              </p>
              <div className="text-[11px] font-black text-blue-600 tracking-wider uppercase bg-blue-50/50 px-4 py-2 rounded-xl border border-blue-100/20 w-fit">
                {t.whatIDo.cards[0].tech}
              </div>
            </motion.div>

            {/* Card 2: AI Trainer */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[1].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[1].desc}
              </p>
              <div className="text-[11px] font-black text-blue-600 tracking-wider uppercase bg-blue-50/50 px-4 py-2 rounded-xl border border-blue-100/20 w-fit">
                {t.whatIDo.cards[1].tech}
              </div>
            </motion.div>

            {/* Card 3: Operations Consultant */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[2].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[2].desc}
              </p>
              <div className="text-[11px] font-black text-emerald-600 tracking-wider uppercase bg-emerald-50/50 px-4 py-2 rounded-xl border border-emerald-100/20 w-fit">
                {t.whatIDo.cards[2].tech}
              </div>
            </motion.div>

            {/* Card 4: Content Creator */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Play size={24} className="translate-x-0.5" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[3].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[3].desc}
              </p>
              <div className="text-[11px] font-black text-red-600 tracking-wider uppercase bg-red-50/50 px-4 py-2 rounded-xl border border-red-100/20 w-fit">
                {t.whatIDo.cards[3].tech}
              </div>
            </motion.div>

            {/* Card 5: Corporate Trainer */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[4].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[4].desc}
              </p>
              <div className="text-[11px] font-black text-amber-600 tracking-wider uppercase bg-amber-50/50 px-4 py-2 rounded-xl border border-amber-100/20 w-fit">
                {t.whatIDo.cards[4].tech}
              </div>
            </motion.div>

            {/* Card 6: Creative Director */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.06)] hover:border-blue-100 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-[50px] pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{t.whatIDo.cards[5].title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                {t.whatIDo.cards[5].desc}
              </p>
              <div className="text-[11px] font-black text-purple-600 tracking-wider uppercase bg-purple-50/50 px-4 py-2 rounded-xl border border-purple-100/20 w-fit">
                {t.whatIDo.cards[5].tech}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Social Proof / Clients */}
      <section className="py-32 bg-white border-y border-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-20">{t.clients.title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {clients.map((client, i) => (
              <span key={i} className="text-3xl font-black text-gray-900 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.services.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => (
              <ServiceCard 
                key={i} 
                service={service} 
                icon={servicesIcons[i]} 
                lang={lang} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 px-10 md:px-24 bg-gray-50 rounded-[4rem] mx-4 md:mx-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t.caseStudies.title}</h2>
              <p className="text-gray-500 max-w-md text-lg font-medium">{t.caseStudies.subtitle}</p>
            </div>
          </motion.div>

          <div className="relative group/carousel">
            {/* Left Arrow */}
            <button 
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className={`absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center transition-all ${currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-blue-600 hover:text-white hover:scale-110"}`}
            >
              <ChevronLeft size={28} className={lang === "ar" ? "rotate-180" : ""} />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={() => {
                const maxSlide = isMobile 
                  ? t.caseStudies.items.length - 1 
                  : t.caseStudies.items.length - 2;
                setCurrentSlide(prev => Math.min(maxSlide, prev + 1));
              }}
              disabled={currentSlide >= (isMobile ? t.caseStudies.items.length - 1 : t.caseStudies.items.length - 2)}
              className={`absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center transition-all ${currentSlide >= (isMobile ? t.caseStudies.items.length - 1 : t.caseStudies.items.length - 2) ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-blue-600 hover:text-white hover:scale-110"}`}
            >
              <ChevronRight size={28} className={lang === "ar" ? "rotate-180" : ""} />
            </button>

            <div className="overflow-hidden -mx-4 px-4">
              <motion.div 
                className="flex gap-6 md:gap-10"
                animate={{ x: lang === "en" ? `-${currentSlide * (isMobile ? 100 : 50)}%` : `${currentSlide * (isMobile ? 100 : 50)}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                style={{ 
                  width: isMobile ? "300%" : "150%",
                  display: 'flex'
                }}
              >
                {t.caseStudies.items.map((study, i) => (
                  <div key={i} className="w-full flex-shrink-0" style={{ width: "33.333%" }}>
                    <CaseStudyCard study={study} t={t} lang={lang} whatsappLink={whatsappLink} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Decorative Navigation (Dots & Arrowheads) */}
          <div className="mt-20 flex flex-col items-center gap-10">
            <div className="flex items-center gap-3">
              {t.caseStudies.items.map((_, i) => {
                const maxSlide = isMobile 
                  ? t.caseStudies.items.length - 1 
                  : t.caseStudies.items.length - 2;
                if (i > maxSlide) return null;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentSlide === i ? 'w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                );
              })}
            </div>

            {/* Subtle Arrowhead Accents */}
            <div className="flex items-center gap-20 opacity-10">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <ChevronLeft key={i} size={16} />)}
              </div>
              <div className="w-20 h-px bg-gray-400" />
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <ChevronRight key={i} size={16} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: lang === "en" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] bg-gray-100 overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://res.cloudinary.com/deuwh0ysg/image/upload/v1780799105/Gemini_Generated_Image_aodtozaodtozaodt_zmhses.png" 
                alt="Ahmed Amir"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`absolute -bottom-12 bg-blue-600 text-white p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(37,99,235,0.3)] hidden md:block ${lang === "en" ? "-right-12" : "-left-12"}`}>
              <p className="text-6xl font-black mb-3">8+</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-90 leading-loose">{t.about.experience.split(' ').map((word, i) => <span key={i}>{word} {i === 2 ? <br /> : ""}</span>)}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: lang === "en" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{t.about.title}</h2>
            <div className="space-y-8 text-lg text-gray-500 font-medium leading-relaxed">
              <p>
                {t.about.text1}
              </p>
              <p>
                {t.about.text2.split(':').map((part, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="text-gray-900 font-bold underline decoration-blue-600 decoration-4 underline-offset-4">{part}</span> : part}
                    {i === 0 && t.about.text2.includes(':') ? ":" : ""}
                  </span>
                ))}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                {t.about.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-gray-900 font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                {t.contact.title.split('Together').map((part, i) => <span key={i}>{part} {i === 0 && lang === "en" ? <><br />Together</> : ""}</span>)}
                {lang === "ar" && t.contact.title}
              </h2>
              <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                {t.contact.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-14 py-7 rounded-[2rem] font-black hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] text-xl uppercase tracking-widest"
                >
                  {t.contact.ctaBook}
                </a>
                <a 
                  href="mailto:maro.1261981@gmail.com"
                  className="bg-white/5 text-white border border-white/10 px-14 py-7 rounded-[2rem] font-black hover:bg-white/10 transition-all text-xl uppercase tracking-widest backdrop-blur-sm"
                >
                  {t.contact.ctaEmail}
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
            <span className="font-black text-xl tracking-tighter text-blue-600">{t.nav.logo}</span>
            <p className="text-gray-400 text-sm mt-2 font-medium">{t.footer.description}</p>
          </div>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-gray-400">
            <a href="https://www.linkedin.com/in/cap-amir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">WhatsApp</a>
            <a href="mailto:maro.1261981@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
          </div>
          <p className="text-gray-400 text-xs font-medium">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default AhmedPortfolio;
