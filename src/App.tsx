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
  MoreHorizontal
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
        badge: "Operations & Business Consultant",
        headline: "I Help Businesses Build Systems, Train Teams & Scale Operations",
        subheadline: "Operations Manager & Business Consultant with 8+ years of experience helping companies improve performance, structure operations, and grow efficiently.",
        ctaBook: "Book a Consultation",
        ctaWork: "View My Work",
        efficiency: "Efficiency",
        growth: "Growth",
        optimizing: "Optimizing",
        operations: "Operations"
      },
      clients: {
        title: "Companies I’ve Worked With"
      },
      services: {
        title: "What I Can Help You With",
        subtitle: "Strategic solutions designed to solve operational problems and drive sustainable business growth.",
        items: [
          {
            title: "Operations Setup & System Building",
            description: "Building robust operational frameworks from the ground up to ensure your business runs like a well-oiled machine.",
            details: [
              "Custom SOPs & Documentation",
              "Workflow Automation",
              "Resource Allocation",
              "System Integration"
            ]
          },
          {
            title: "Team Training (Agents, Leaders, Managers)",
            description: "Developing high-performing teams through tailored training programs for every level of leadership and staff.",
            details: [
              "Leadership Workshops",
              "Soft Skills Training",
              "Technical Onboarding",
              "Performance Coaching"
            ]
          },
          {
            title: "KPI & Performance Management Systems",
            description: "Implementing data-driven systems to track, analyze, and improve performance across all business units.",
            details: [
              "Dashboard Creation",
              "Data Analysis",
              "Incentive Programs",
              "Real-time Reporting"
            ]
          },
          {
            title: "Customer Support Optimization",
            description: "Streamlining support workflows and tools (Zendesk, HubSpot) to deliver exceptional customer experiences.",
            details: [
              "Tool Configuration",
              "Response Time Reduction",
              "Quality Assurance",
              "CSAT/NPS Improvement"
            ]
          },
          {
            title: "Business Process Improvement",
            description: "Identifying bottlenecks and optimizing workflows to increase efficiency and reduce operational costs.",
            details: [
              "Lean Methodology",
              "Cost Reduction",
              "Bottleneck Analysis",
              "Change Management"
            ]
          }
        ]
      },
      caseStudies: {
        title: "Case Studies",
        subtitle: "Real-world examples of operational excellence and business transformation.",
        challenge: "The Challenge",
        result: "The Result",
        whatIDid: "What I Did",
        cta: "Want similar results? Let's talk",
        items: [
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
        title: "Focused on Results, Driven by Systems.",
        text1: "I don't just consult; I partner with businesses to build the systems that allow them to scale without chaos. My approach is rooted in practical experience with global giants like Amazon.",
        text2: "Whether it's training your team to reach peak performance or restructuring your entire operational workflow, my goal is always the same: measurable efficiency and sustainable growth.",
        points: ["Building Systems", "Training Teams", "Solving Problems", "Scaling Growth"],
        experience: "Years of Solving Operational Problems"
      },
      contact: {
        title: "Let’s Improve Your Business Together",
        subtitle: "Ready to optimize your operations and scale your team? Let's discuss how we can build a more efficient future for your company.",
        ctaBook: "Book a Consultation",
        ctaEmail: "Contact via Email"
      },
      footer: {
        description: "Operations Manager & Business Consultant",
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
        badge: "مستشار عمليات وأعمال",
        headline: "أساعد الشركات على بناء الأنظمة، تدريب الفرق وتوسيع العمليات",
        subheadline: "مدير عمليات ومستشار أعمال بخبرة تزيد عن 8 سنوات في مساعدة الشركات على تحسين الأداء وهيكلة العمليات والنمو بكفاءة.",
        ctaBook: "احجز استشارة",
        ctaWork: "عرض أعمالي",
        efficiency: "الكفاءة",
        growth: "النمو",
        optimizing: "تحسين",
        operations: "العمليات"
      },
      clients: {
        title: "شركات عملت معها"
      },
      services: {
        title: "كيف يمكنني مساعدتك",
        subtitle: "حلول استراتيجية مصممة لحل المشكلات التشغيلية ودفع نمو الأعمال المستدام.",
        items: [
          {
            title: "إعداد العمليات وبناء الأنظمة",
            description: "بناء أطر عمل تشغيلية قوية من الألف إلى الياء لضمان سير عمل عملك بسلاسة تامة.",
            details: [
              "إجراءات التشغيل القياسية (SOPs)",
              "أتمتة سير العمل",
              "تخصيص الموارد",
              "تكامل الأنظمة"
            ]
          },
          {
            title: "تدريب الفرق (وكلاء، قادة، مديرين)",
            description: "تطوير فرق عالية الأداء من خلال برامج تدريبية مخصصة لكل مستوى من مستويات القيادة والموظفين.",
            details: [
              "ورش عمل قيادية",
              "تدريب المهارات الناعمة",
              "التدريب التقني",
              "التدريب على الأداء"
            ]
          },
          {
            title: "أنظمة إدارة الأداء والمؤشرات الرئيسية",
            description: "تنفيذ أنظمة قائمة على البيانات لتتبع وتحليل وتحسين الأداء عبر جميع وحدات العمل.",
            details: [
              "إنشاء لوحات التحكم",
              "تحليل البيانات",
              "برامج التحفيز",
              "التقارير الفورية"
            ]
          },
          {
            title: "تحسين دعم العملاء",
            description: "تبسيط سير عمل الدعم والأدوات (Zendesk، HubSpot) لتقديم تجارب استثنائية للعملاء.",
            details: [
              "إعداد الأدوات",
              "تقليل وقت الاستجابة",
              "ضمان الجودة",
              "تحسين رضا العملاء"
            ]
          },
          {
            title: "تحسين العمليات التجارية",
            description: "تحديد الاختناقات وتحسين سير العمل لزيادة الكفاءة وتقليل التكاليف التشغيلية.",
            details: [
              "منهجية Lean",
              "تقليل التكاليف",
              "تحليل الاختناقات",
              "إدارة التغيير"
            ]
          }
        ]
      },
      caseStudies: {
        title: "دراسات حالة",
        subtitle: "أمثلة واقعية للتميز التشغيلي وتحول الأعمال.",
        challenge: "التحدي",
        result: "النتيجة",
        whatIDid: "ماذا فعلت",
        cta: "هل تريد نتائج مماثلة؟ دعنا نتحدث",
        items: [
          {
            title: "تحول أداء مركز الاتصال",
            challenge: "كفاءة منخفضة وجودة خدمة غير متسقة في بيئة عالية الضغط.",
            result: "تحسين أداء الفريق من خلال إعادة هيكلة سير العمل وتنفيذ نظام مخصص لتتبع مؤشرات الأداء.",
            tags: ["العمليات", "مؤشرات الأداء", "التدريب"],
            actions: [
              "إعادة تصميم سير العمل لتحقيق الكفاءة",
              "بناء نظام تتبع مؤشرات الأداء",
              "تحسين هيكل الفريق",
              "تعزيز اتساق الخدمة"
            ]
          },
          {
            title: "إطار قابلية التوسع للشركات الناشئة",
            challenge: "افتقرت شركة ناشئة سريعة النمو إلى الهيكل اللازم للتعامل مع الطلب المتزايد.",
            result: "بناء نظام تشغيلي كامل، وتحسين التنظيم وتوفير مسار واضح لقابلية التوسع.",
            tags: ["بناء الأنظمة", "التوسع", "العمليات"],
            actions: [
              "بناء نظام تشغيلي كامل",
              "تحديد سير العمل والمسؤوليات",
              "إنشاء هيكل قابل للتوسع",
              "تحسين التنفيذ والتنظيم"
            ]
          },
          {
            title: "تحول نظام إدارة المدارس",
            challenge: "واجهت المدرسة تحديات إدارية كبرى، بما في ذلك سوء التنظيم، ونقص تتبع البيانات الواضح، وصعوبة إدارة الطلاب والموظفين والعمليات اليومية.",
            result: "تحويل عمليات المدرسة من خلال بناء نظام إدارة مخصص بالكامل، مما أتاح تحكماً وتقارير وقدرة أفضل على اتخاذ القرار.",
            tags: ["التعليم", "بناء الأنظمة", "الإدارة"],
            actions: [
              "تصميم نظام إدارة مدرسي (SMS) مخصص بالكامل",
              "تنظيم بيانات الطلاب والموظفين في نظام مهيكل",
              "بناء لوحات تقارير",
              "تبسيط سير العمل والعمليات اليومية",
              "تحسين الرؤية واتخاذ القرار"
            ]
          }
        ]
      },
      about: {
        title: "التركيز على النتائج، مدفوع بالأنظمة.",
        text1: "أنا لا أقدم الاستشارات فحسب؛ بل أشارك الشركات في بناء الأنظمة التي تسمح لها بالتوسع دون فوضى. نهجي متجذر في الخبرة العملية مع عمالقة عالميين مثل أمازون.",
        text2: "سواء كان الأمر يتعلق بتدريب فريقك للوصول إلى ذروة الأداء أو إعادة هيكلة سير العمل التشغيلي بالكامل، فإن هدفي هو نفسه دائماً: كفاءة قابلة للقياس ونمو مستدام.",
        points: ["بناء الأنظمة", "تدريب الفرق", "حل المشكلات", "توسيع النمو"],
        experience: "سنوات من حل المشكلات التشغيلية"
      },
      contact: {
        title: "دعنا نحسن عملك معاً",
        subtitle: "هل أنت مستعد لتحسين عملياتك وتوسيع فريقك؟ دعنا نناقش كيف يمكننا بناء مستقبل أكثر كفاءة لشركتك.",
        ctaBook: "احجز استشارة",
        ctaEmail: "تواصل عبر البريد"
      },
      footer: {
        description: "مدير عمليات ومستشار أعمال",
        rights: "© 2026 أحمد أمير أحمد. جميع الحقوق محفوظة."
      }
    }
  };

  const t = translations[lang];
  const whatsappLink = "https://wa.me/201211111111";
  const clients = ["Amazon", "Vodafone", "Etisalat", "Orange", "B.TECH", "Raya"];
  const servicesIcons = [
    <Settings className="text-blue-600" size={32} />,
    <Users className="text-blue-600" size={32} />,
    <BarChart3 className="text-blue-600" size={32} />,
    <MessageSquare className="text-blue-600" size={32} />,
    <TrendingUp className="text-blue-600" size={32} />
  ];

  const toggleLang = () => {
    setLang(prev => prev === "en" ? "ar" : "en");
  };

  return (
    <div className={`min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-blue-100 ${lang === "ar" ? "font-arabic" : ""}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-black text-2xl tracking-tighter text-blue-600 hover:opacity-80 transition-opacity"
          >
            {t.nav.logo}
          </a>
          <div className="hidden md:flex gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="#services" className="hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#case-studies" className="hover:text-blue-600 transition-colors">{t.nav.caseStudies}</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t.nav.contact}</a>
          </div>
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-gray-50 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all border border-gray-100"
          >
            <Languages size={18} className="text-blue-600" />
            {lang === "en" ? "العربية" : "English"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:60px_60px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-5 py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100/50 shadow-sm">
              {t.hero.badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-gray-900">
              {t.hero.headline.split(',').map((part, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-blue-600">{part}</span> : part}
                </span>
              ))}
            </h1>
            <p className="text-2xl text-gray-500 leading-relaxed mb-14 max-w-2xl font-medium opacity-80">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center gap-4 text-lg uppercase tracking-widest"
              >
                {t.hero.ctaBook} <ChevronRight size={22} className={lang === "ar" ? "rotate-180" : ""} />
              </a>
              <a 
                href="#case-studies"
                className="bg-white text-gray-900 border-2 border-gray-100 px-12 py-6 rounded-[2rem] font-black hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-4 text-lg uppercase tracking-widest"
              >
                {t.hero.ctaWork}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5.5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] bg-[#0a0a0a] p-16 flex flex-col justify-center relative border border-white/5">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 border border-blue-500/30 rounded-full blur-sm"></div>
                <div className="absolute bottom-40 right-20 w-80 h-80 border border-indigo-500/20 rounded-full blur-md"></div>
              </div>
              <div className="relative z-10 space-y-12">
                <div className="w-28 h-28 bg-blue-600/20 backdrop-blur-2xl rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl">
                  <TrendingUp size={56} className="text-blue-400" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl font-black text-white leading-[1.1] tracking-tight">
                    {t.hero.optimizing} <br />
                    <span className="text-blue-500">{t.hero.operations}</span>
                  </h3>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 w-12 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                          className="h-full w-full bg-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">{t.hero.efficiency}</p>
                    <p className="text-4xl font-black text-white">98%</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3">{t.hero.growth}</p>
                    <p className="text-4xl font-black text-white">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Consultant"
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
