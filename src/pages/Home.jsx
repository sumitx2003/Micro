import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  Compass, 
  Zap, 
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Quote,
  Users,
  UserCheck,
  CheckCircle,
  MapPin,
  Building2,
  Briefcase,
  TrendingUp,
  Globe2
} from 'lucide-react';

// 🌟 IMPORT: Bring in your Security Modal Component layer here
import SecurityAlertModal from '../components/SecurityAlertModal'; 

export default function Home({ setActivePage }) {
  // 1. Updated State Hooks (Defaulting strictly to new calculator baselines)
  const [loanAmount, setLoanAmount] = useState(55000);
  const [tenure, setTenure] = useState(18);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);

  // 2. Data Definitions (Slides, Customers, FAQs)
  const slides = [
    {
      image: "1.jpeg", 
      tagline: "AAPKI ZAROORAT KE SAATHI",
      subText: "Supporting local grocery storefronts and small community trade stalls."
    },
    {
      image: "2.jpeg", 
      tagline: "AAPKI SAFALTA KE SAATHI",
      subText: "Empowering micro tailoring businesses and home production units."
    },
    {
      image: "3.jpeg", 
      tagline: "CHOTA LOAN, BADE SAPNE",
      subText: "Providing quick capital pathways for rural dairy and micro-farming ventures."
    }
  ];

  const customers = [
    {
      name: "",
      location: "Our Happy Customer",
      headline: "STITCHING A BRIGHTER FUTURE",
      story1: "They are crop trader, and because of a sudden slowdown in business, their income was not sufficient enough to make a respectful living.",
      story2: "We sensed the need to support them financially and thus started journey with a loan amount of INR 55,000/- to scale her home tailoring business. Today, they parallelly sells customized clothes, receiving full support from her family as they yield profits from hard work.",
      tagline: "-Small Loan Big Dreams-",
      image: "4.jpeg" 
    },
    {
      name: "",
      location: " Our Happy Customer",
      headline: "RETAIL EXPANSION & INDEPENDENCE",
      story1: "she ran a very small local grocery kiosk, but a lack of liquid working capital restricted her from storing essential daily utility inventory during festive quarters.",
      story2: "Through an individual micro loan support setup, she managed to replenish bulk inventory storage seamlessly. Her daily customer footfall doubled within months, turning her single stall layout into a prominent local market provisions store.",
      tagline: "-Empowering Local Commerce-",
      image: "5.jpeg" 
    },
    {
      name: "",
      location: "Our Happy Customer",
      headline: "MODERN AGRICULTURE DEVELOPMENT",
      story1: "They owned a small farmland plot and relied on traditional farming methods, resulting in low crop productivity and limited seasonal income.",
      story2: "Through a Joint Liability Group loan, they invested in drip irrigation systems, quality seeds, and modern farming equipment. Within two harvest cycles, their crop yield increased significantly, helping him expand cultivation and improve his family's financial security.",
      tagline: "-Empowering Farmers, Growing Prosperity-",
      image: "6.jpeg"
    },
    {
      name: "",
      location: "Our Happy Customer",
      headline: "TAILORING BUSINESS GROWTH",
      story1: "She worked as a home-based tailor using an old sewing machine, making it difficult to handle large orders and earn a stable income.",
      story2: "After receiving a micro-enterprise loan, she purchased advanced stitching equipment and expanded her tailoring services. Today, she manages a small tailoring unit, serves customers across nearby communities, and provides employment opportunities to other women in her area.",
      tagline: "-Stitching Dreams Into Success-",
      image: "3.jpeg"
    }
  ];

  const faqs = [
    { 
      q: "Is collateral or a guarantee deposit required?", 
      a: "No physical collateral, land property documents, or gold assets are ever required. Our JLG loans rely completely on community trust and mutual support." 
    },
    { 
      q: "What can these micro loans be used for?", 
      a: "Loans are explicitly provided for income-generating micro projects such as tailoring, livestock rearing, setting up small retail storefronts, or purchasing agricultural raw tools." 
    },
    { 
      q: "How do group repayment structures operate?", 
      a: "Repayments are collected during scheduled weekly or monthly meetings by designated field collection agents straight from your local community cluster." 
    },
    {
      q: "What is the processing time for loan approval?",
      a: "Once group alignment and basic verification are completed by our field agents, approved funds are directly wired to your verified bank account within 2 to 3 working days."
    },
    {
      q: "Who is eligible to apply for a JLG loan?",
      a: "Any self-employed individual or rural entrepreneur aged between 18 and 58 years who forms a mutual guarantee group with 3 to 30 members from their local community cluster can apply."
    }
  ];

  // 3. Carousel Automation Effects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCustomerIndex((prev) => (prev + 1) % customers.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [customers.length]);

  // 4. Manual Controller Callbacks
  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const nextCustomer = () => setCurrentCustomerIndex((prev) => (prev + 1) % customers.length);
  const prevCustomer = () => setCurrentCustomerIndex((prev) => (prev - 1 + customers.length) % customers.length);

  return (
    // 🌟 WRAPPER MODIFICATION: Transformed layout container into a full-screen context root node with hidden overflow bounds
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* 🌟 OVERLAY INJECTION: Mount the premium full-screen first-time warning engine */}
      <SecurityAlertModal />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 pb-24">
        
        {/* SECTION 1: HERO CONTAINER WITH CAROUSEL */}
        <div className="pt-12 md:pt-20 grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-600/20 bg-emerald-50/60 text-emerald-700 text-xs font-semibold backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" /> RBI Licensed NBFC-MFI
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-emerald-950 leading-[1.1]">
              Empowering Rural Communities Through <br />
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-orange-600 bg-clip-text text-transparent">
                Financial Inclusion
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-800/80 max-w-xl leading-relaxed font-medium">
              Providing transparent, completely collateral-free systems designed to transform home-grown micro projects into scalable realities.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setActivePage('products')} 
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3.5 rounded-xl font-bold shadow-md shadow-emerald-900/10 transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Micro Loans <ArrowRight className="w-4 h-4 text-orange-300" />
              </button>
              <button 
                onClick={() => setActivePage('about')}
                className="border border-emerald-900/20 bg-white/60 backdrop-blur-md hover:bg-white text-emerald-800 transition-all px-8 py-3.5 rounded-xl font-bold"
              >
                Our Philosophy
              </button>
            </div>
          </motion.div>

          <div className="md:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-orange-500/5 rounded-3xl blur-2xl" />
            
            <div className="relative border-2 border-white bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-xl shadow-emerald-950/5 overflow-hidden">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-emerald-950/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={slides[currentSlide].image} 
                      alt="Micro Finance Beneficiary" 
                      className="w-full h-full object-cover brightness-[0.85]"
                    />

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-emerald-950/90 via-emerald-950/50 to-transparent p-6 text-white pt-16">
                      <p className="text-orange-400 text-xs font-black tracking-widest uppercase mb-1">
                        {slides[currentSlide].tagline}
                      </p>
                      <p className="text-sm sm:text-base font-semibold leading-relaxed text-slate-100">
                        {slides[currentSlide].subText}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none">
                  <button onClick={handlePrevSlide} className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center text-emerald-900 pointer-events-auto hover:bg-white hover:scale-105 active:scale-95 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={handleNextSlide} className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-center text-emerald-900 pointer-events-auto hover:bg-white hover:scale-105 active:scale-95 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-1.5 pt-4">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-emerald-700' : 'w-2 bg-slate-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: EXECUTIVE MESSAGE FROM THE MD */}
        <div className="grid md:grid-cols-12 gap-12 items-start border-t border-emerald-900/10 pt-16">
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Executive Outlook</h2>
              <p className="text-3xl font-black text-emerald-950 tracking-tight">Message From MD</p>
            </div>

            <div className="text-sm sm:text-base text-emerald-900/90 font-medium space-y-4 leading-relaxed">
              <p>
                We have always believed that the right to financial freedom is not only a human right but also a right to justice for everyone, regardless of who they are or where they live. We uphold the core values and mission to create new opportunities among strapped individuals in rural and semi-rural regions because they are part of the unaccounted millions who contribute heavily to the economy through unorganised sectors.
              </p>
              <p>
                Our mission is to defy conventional wisdom and establish a scalable, long-lasting, and profitable business that contributes to transformation. 
                <span className="font-bold text-emerald-950"> Scalability</span>, <span className="font-bold text-emerald-950">Strength</span>, and <span className="font-bold text-emerald-950">Source</span> are the core pillars that support every product design engineered to empower individuals from every corner who wish to start or expand a micro-business.
              </p>
              <p>
                We understand that <span className="font-bold text-orange-600">scalability</span> in the microfinance business is not possible without technology. We focus on bringing together the best industry practices, cutting-edge technologies, and resource-saving strategies to deliver value. Every positive transformation needs a positive mindset, and our structural fundamentals rely on a people-first approach, providing loans on the best possible terms.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 relative sticky top-28">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-emerald-500/5 rounded-3xl blur-xl" />
            <div className="relative border border-white bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl shadow-emerald-950/5 text-center space-y-4">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md bg-emerald-50">
                <img 
                  src="MD.png" 
                  alt="Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-emerald-950">Manish Dhaka</h4>
                <p className="text-xs font-bold text-orange-600 tracking-wide uppercase mt-0.5">Managing Director & CEO</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-emerald-100 text-left relative overflow-hidden">
                <Quote className="w-8 h-8 text-emerald-500/30 opacity-100 absolute top-2 right-2 fill-emerald-500/10" />
                <p className="text-xs italic font-semibold text-emerald-900 leading-relaxed pr-6 relative z-10">
                  "We warmly welcome you to our transformational journey. Together, we turn small loans into macro achievements."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: KEY OPERATIONAL HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-12">
          <div className="bg-gradient-to-br from-emerald-950 via-[#012d1b] to-emerald-950 text-white p-8 rounded-[32px] shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">At A Glance</span>
              <h3 className="text-2xl font-black tracking-tight leading-tight">Our Growing Footprint Across Regions</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <Globe2 className="w-5 h-5 text-orange-400" />, count: "2 States", label: "Regional Operations" },
                { icon: <Building2 className="w-5 h-5 text-orange-400" />, count: "3 Branches", label: "Active In Rajasthan" },
                { icon: <Briefcase className="w-5 h-5 text-orange-400" />, count: "8 Employees", label: "Dedicated Field Agents" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xl font-black">{item.count}</p>
                    <p className="text-xs text-emerald-200/70 font-semibold uppercase tracking-wider">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-950 via-[#012d1b] to-emerald-950 text-white p-8 rounded-[32px] shadow-xl flex flex-col transition-transform duration-300 hover:scale-[1.01]">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <div className="mt-auto pt-8">
              <p className="text-4xl font-black text-white tracking-tight">1,200+</p>
              <p className="text-xs font-black text-emerald-200/70 uppercase tracking-widest mt-2">Active Micro-Borrowers</p>
              <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">Trusted local partners scaling family trades daily.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-950 via-[#012d1b] to-emerald-950 text-white p-8 rounded-[32px] shadow-xl flex flex-col transition-transform duration-300 hover:scale-[1.01]">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>
            <div className="mt-auto pt-8">
              <p className="text-4xl font-black text-white tracking-tight">₹5 Cr+</p>
              <p className="text-xs font-black text-emerald-200/70 uppercase tracking-widest mt-2">Gross Capital Disbursed</p>
              <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">Collateral-free seed allocation powering rural markets.</p>
            </div>
          </div>
        </div>

        {/* SECTION 4: PRODUCT SPECIFICATIONS */}
        <div className="space-y-8 border-t border-emerald-900/10 pt-16">
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-center bg-white border border-emerald-900/5 p-6 rounded-[24px] shadow-sm">
              <div className="md:col-span-4 h-56 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="jlg.jpeg" 
                  alt="Joint Liability Group Alignment" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:col-span-8 space-y-4 pl-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">JLG Loan - Joint Liability Group</h3>
                </div>
                <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">
                  Joint Liability Group (JLG) is an informal group comprising preferably of 3 to 30 individuals for the purposes of availing credit either individually or through the group mechanism against a peer group mutual guarantee.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 pt-1 text-xs font-bold text-emerald-800">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Ideal for rural women circles
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Peer group mutual safety mesh
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center bg-white border border-emerald-900/5 p-6 rounded-[24px] shadow-sm">
              <div className="md:col-span-8 space-y-4 pl-2 order-2 md:order-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">IML - Individual Micro Loans</h3>
                </div>
                <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">
                  Individual Micro Loans (IML) are highly customized, purpose-based credit channels which are facilitated transparently to self-employed individuals to systematically start a new business trade or for the steady expansion of an existing micro enterprise.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 pt-1 text-xs font-bold text-emerald-800">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Direct asset scaling funds
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Flexible structured returns
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 h-56 rounded-2xl overflow-hidden bg-slate-100 order-1 md:order-2">
                <img 
                  src="5.jpeg" 
                  alt="Micro Enterprise Operation Shop" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: INTEGRATED HAPPY CUSTOMERS SLIDER */}
        <div className="space-y-12 border-t border-emerald-900/10 pt-16">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Happy Customers</h2>
            <p className="text-2xl font-black text-emerald-950 tracking-tight">Real Stories of Transformation</p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center min-h-[400px]">
            <div className="md:col-span-5 relative flex justify-center">
              <div className="absolute top-[-24px] left-[10%] z-20 w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Quote className="w-7 h-7 transform rotate-180 fill-current" />
              </div>

              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[32px] overflow-hidden bg-white border-4 border-white shadow-xl shadow-emerald-950/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentCustomerIndex}
                    src={customers[currentCustomerIndex].image}
                    alt={customers[currentCustomerIndex].name}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCustomerIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    {customers[currentCustomerIndex].headline}
                  </h4>
                  
                  <div className="text-sm sm:text-base text-emerald-900/90 font-medium leading-relaxed space-y-3">
                    <p>{customers[currentCustomerIndex].story1}</p>
                    <p>{customers[currentCustomerIndex].story2}</p>
                  </div>

                  <p className="text-xs font-bold italic text-emerald-700/80 pt-1">
                    {customers[currentCustomerIndex].tagline}
                  </p>

                  <div className="pt-4 border-t border-emerald-900/5">
                    <h5 className="text-sm font-black text-emerald-950 tracking-wide">
                      {customers[currentCustomerIndex].name}
                    </h5>
                    <p className="text-xs font-bold text-orange-600 mt-0.5">
                      {customers[currentCustomerIndex].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between pt-6 border-t border-emerald-900/5">
                <div className="flex gap-2">
                  {customers.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCustomerIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentCustomerIndex === i ? 'w-8 bg-orange-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={prevCustomer} 
                    className="w-10 h-10 rounded-xl border border-emerald-900/10 bg-white shadow-sm text-emerald-900 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-900/20 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextCustomer} 
                    className="w-10 h-10 rounded-xl border border-emerald-900/10 bg-white shadow-sm text-emerald-900 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-900/20 active:scale-95 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6: AMORTIZED TIED CALCULATOR MODULE */}
        <div className="grid md:grid-cols-12 gap-12 items-center bg-emerald-50/40 border border-emerald-100 p-8 md:p-12 rounded-3xl">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Planning Module</span>
            <h3 className="text-3xl font-black text-emerald-950">Calculate Your Monthly Micro Estimates</h3>
            <p className="text-emerald-800/80 text-sm font-medium leading-relaxed">
              Select a verified principal tier and adjust the term parameters. Kraaj estimations operate strictly on a standard 30% reducing balance structure.
            </p>
          </div>

          <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-emerald-950/5 space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-bold text-emerald-900 block">
                Loan Amount Desired
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[55000, 70000, 100000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setLoanAmount(amount)}
                    className={`py-3 px-4 rounded-xl font-black text-sm border transition-all duration-200 ${
                      loanAmount === amount
                        ? 'bg-gradient-to-r from-emerald-800 to-emerald-950 text-white border-transparent shadow-md shadow-emerald-950/10 scale-[1.02]'
                        : 'bg-[#FDFBF7] border-emerald-900/10 text-emerald-950 hover:bg-emerald-50/50'
                    }`}
                  >
                    ₹{(amount / 1000).toFixed(0)}K
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold text-emerald-900">
                <span>Repayment Period</span>
                <span className="text-orange-600 font-extrabold">{tenure < 18 ? 18 : tenure} Months</span>
              </div>
              <input 
                type="range" 
                min="18" 
                max="24" 
                step="1" 
                value={tenure < 18 ? 18 : tenure} 
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-emerald-700 bg-emerald-100 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span>Min: 18 Mo</span>
                <span>Max: 24 Mo</span>
              </div>
            </div>

            {(() => {
              const annualRate = 0.30; 
              const monthlyRate = annualRate / 12;
              const currentTenure = tenure < 18 ? 18 : tenure;
              
              const compoundFactor = Math.pow(1 + monthlyRate, currentTenure);
              const reducingEmi = Math.round((loanAmount * monthlyRate * compoundFactor) / (compoundFactor - 1));

              return (
                <div className="p-4 rounded-xl bg-[#FDFBF7] border border-emerald-100 flex items-center justify-between transition-all">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black text-emerald-800/60 uppercase tracking-wider">
                      Estimated Monthly Installment (30% Reducing)
                    </p>
                    <p className="text-3xl font-black text-emerald-950">
                      ₹{reducingEmi.toLocaleString('en-IN')}{' '}
                      <span className="text-xs text-slate-400 font-normal">/ mo</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shadow-inner flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* SECTION 7: INTERACTIVE ACCORDION FAQS */}
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700">Answering Uncertainties</h2>
            <p className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">Frequently Asked Queries</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-emerald-900/10 bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-emerald-900/20"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-emerald-950 text-sm sm:text-base transition-colors"
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    <span className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center text-[11px] font-black text-orange-600 flex-shrink-0">
                      ?
                    </span>
                    <span className="tracking-tight font-black leading-tight text-emerald-950">
                      {faq.q}
                    </span>
                  </span>
                  
                  <ChevronDown 
                    className={`w-4 h-4 text-emerald-800 transform transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 border-t border-emerald-900/5 text-xs sm:text-sm text-emerald-800/80 font-medium leading-relaxed bg-[#FDFBF7]/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}