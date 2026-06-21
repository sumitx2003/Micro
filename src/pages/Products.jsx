import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  CheckCircle, 
  ShieldCheck, 
  Gauge, 
  CheckCircle2, 
  AlertTriangle,
  Quote,
  ChevronDown,
  Paperclip,
  ArrowRight,
  Fingerprint,
  FileCheck,
  Home,
  FileSpreadsheet,
  Coins,
  BadgeCheck,
  Briefcase
} from 'lucide-react';

export default function Products() {
  // --- Score Tool State Management ---
  const [hasExistingLoans, setHasExistingLoans] = useState('no');
  const [repaymentHistory, setRepaymentHistory] = useState('perfect');
  const [monthlyIncome, setMonthlyIncome] = useState(25000);
  const [isCalculated, setIsCalculated] = useState(false);
  const [scoreResult, setScoreResult] = useState(750);
  
  // --- Step Content Interactive Expansion Hook ---
  const [activeStepIdx, setActiveStepIdx] = useState(null);

  const creditPrograms = [
    {
      icon: <Users className="w-5 h-5 text-orange-600" />,
      title: "JLG Loan (Joint Liability Group)",
      subtitle: "Females Only",
      desc: "An informal group mechanism comprising clusters of 3 to 30 women looking to secure credit channels either individually or collectively against peer-group mutual guarantees.",
      bullets: ["Designed exclusively for rural women micro-entrepreneurs", "Completely collateral-free credit structure", "Mutually backed group validation loops"],
      accentColor: "from-orange-500 to-amber-500",
      image: "jlg.jpeg"
    },
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-700" />,
      title: "IML (Individual Micro Loans)",
      subtitle: "Males & Females Both",
      desc: "Purpose-based custom microloans engineered for independent traders and self-employed professionals seeking strategic capital to scale existing storefronts or launch new trading channels.",
      bullets: ["Highly scalable individual cash deployment", "Customized micro-business repayment models", "Direct fast bank verification tracks"],
      accentColor: "from-emerald-600 to-teal-600",
      image: "jlg2.jpeg"
    }
  ];

  // --- Step Schema Array Mapped from image_694f2d.png and image_718c3a.png ---
  const approvalSteps = [
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Centre Creation",
      shortDesc: "The process begins with identifying potential areas and structuring localized field borrowing circles.",
      fullDesc: "Our regional officers run geographic scans to establish cluster points in underbanked localities, grouping community members into structured financial operational units.",
      stickerBg: "bg-rose-600"
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-white" />,
      title: "E-Kyc Verification",
      shortDesc: "e-KYC is the process of electronically verifying the core authenticity of prospective client files.",
      fullDesc: "Using secure government integrations, mobile OTP verification, and biometric checks, the applicant's official identity markers are evaluated instantly with zero reliance on legacy paperwork.",
      stickerBg: "bg-slate-700"
    },
    {
      icon: <Gauge className="w-5 h-5 text-white" />,
      title: "Credit Evaluation",
      shortDesc: "We check customer credit history by utilizing strict High Mark automated data engine verification systems.",
      fullDesc: "Detailed bureau scans evaluate historic lines, existing micro-liabilities, and microfinance index parameters to ensure healthy lending security ranges.",
      stickerBg: "bg-rose-600"
    },
    {
      icon: <Home className="w-5 h-5 text-white" />,
      title: "House Visit",
      shortDesc: "A Relationship Officer or Branch Manager conducts a direct house visit at every applicant residence.",
      fullDesc: "Physical residential validations confirm family stability markers and business infrastructure setup to complete comprehensive local field underwriting parameters.",
      stickerBg: "bg-slate-700"
    },
    {
      icon: <FileCheck className="w-5 h-5 text-white" />,
      title: "GRT (Group Recognition Test)",
      shortDesc: "The GRT process is formally conducted by the Branch Manager during final field assessments.",
      fullDesc: "Group validation checks evaluate group coherence, mutual alignment tracking, and ensure all mutual liability guidelines are completely understood by the cluster partners.",
      stickerBg: "bg-slate-700"
    },
    {
      icon: <BadgeCheck className="w-5 h-5 text-white" />,
      title: "Loan Sanction",
      shortDesc: "Customers who clear all evaluation matrices become officially eligible for formal account onboarding.",
      fullDesc: "Our centralized risk committee signs off on secure authorization profiles, processing individual credit allotments immediately within automated registries.",
      stickerBg: "bg-rose-600"
    },
    {
      icon: <Coins className="w-5 h-5 text-white" />,
      title: "Loan Disbursement",
      shortDesc: "The credit team checks active bank coordinates to securely finalize direct digital cash deployment.",
      fullDesc: "Following bank account mapping reviews, the authorized liquidity pool transfers capital seamlessly straight into verified client banking portals.",
      stickerBg: "bg-rose-600"
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-white" />,
      title: "Collection Management",
      shortDesc: "Relationship officers manage local collection streams tracking center-repayment cycles on time.",
      fullDesc: "Localized cluster assemblies run short collection windows structured on highly affordable timelines to preserve ongoing positive score indexes for subsequent cycles.",
      stickerBg: "bg-slate-700"
    }
  ];

  const handleCalculateScore = (e) => {
    e.preventDefault();
    let calculatedWeight = 710;
    if (repaymentHistory === 'perfect') calculatedWeight += 75;
    if (repaymentHistory === 'delayed') calculatedWeight -= 70;
    if (repaymentHistory === 'default') calculatedWeight -= 150;
    if (monthlyIncome > 45000) calculatedWeight += 35;
    if (monthlyIncome < 15000) calculatedWeight -= 40;
    if (hasExistingLoans === 'yes') calculatedWeight -= 20;

    const boundedScore = Math.max(300, Math.min(900, calculatedWeight));
    setScoreResult(boundedScore);
    setIsCalculated(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32 pt-12 pb-24 relative z-10 bg-[#FAFAFA]/30">
      
      {/* EXECUTIVE OUTLOOK MESSAGE FROM BOARD LEADER */}
      <div className="grid md:grid-cols-12 gap-12 items-center bg-white border border-slate-100 p-8 md:p-12 rounded-[36px] shadow-sm">
        <div className="md:col-span-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 inline-block">
              Executive Outlook
            </span>
            <h2 className="text-3xl font-black text-emerald-950 tracking-tight">Message From Director of Inclusion</h2>
          </div>
          <div className="text-sm text-slate-600 font-medium space-y-4 leading-relaxed">
            <p>
              We have always believed that economic self-reliance begins with opportunity. True financial inclusion cannot exist without intentionally designing pathways that uplift women micro-entrepreneurs who navigate the unorganized rural sectors daily.
            </p>
            <p>
              By focusing heavily on structural mechanisms like the <strong>Joint Liability Group (JLG)</strong> model, we provide women with autonomous collateral-free leverage, matching resource-saving technologies with deep-rooted community trust vectors to convert local initiatives into generation-defining achievements.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-[#FDFBF7] border border-orange-100 p-6 rounded-3xl flex flex-col items-center text-center space-y-4 relative overflow-hidden">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-200">
            <img 
              src="MD2.png" 
              alt="Manish Jangir" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-base font-black text-emerald-950 uppercase tracking-tight">Manish Jangir</h4>
            <p className="text-[11px] text-orange-600 font-bold uppercase tracking-wider mt-0.5">Director cum Chairman</p>
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-orange-100 text-[11px] text-slate-500 font-medium italic relative">
            <Quote className="w-8 h-8 text-orange-200 absolute -top-2 -left-1 opacity-40 pointer-events-none" />
            "We warmly welcome you to our transformational journey. Together, we turn small loans into macro achievements."
          </div>
        </div>
      </div>

      {/* CREDIT PRODUCTS PROGRAM SOLUTION BLOCKS */}
      <div className="space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100 inline-block">
            Credit Portfolio
          </span>
          <h2 className="text-3xl font-black text-emerald-950 tracking-tight">Our Microfinance Solutions</h2>
        </div>

        <div className="space-y-12">
          {creditPrograms.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-100 rounded-[36px] shadow-sm overflow-hidden grid md:grid-cols-12 gap-8 items-center p-6 md:p-8 relative group"
            >
              <div className={`space-y-6 md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md border ${
                    plan.subtitle === 'Females Only' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {plan.subtitle}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-emerald-950 tracking-tight flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                      {plan.icon}
                    </span>
                    {plan.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  {plan.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-emerald-950 font-bold leading-tight">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE LOAN APPROVAL PROCESS FLOWCHART */}
      <div className="space-y-16 border-t border-slate-100 pt-20">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-md border border-orange-100 inline-block">
            Onboarding Pathway
          </span>
          <h2 className="text-3xl font-black text-emerald-950 tracking-tight">
            Our Automated Loan Approval Process
          </h2>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
            Click any step node card below to verify total background parameters
          </p>
        </div>

        {/* Dynamic 8-Step Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {approvalSteps.map((step, idx) => {
            const isExpanded = activeStepIdx === idx;
            return (
              <motion.div
                layout
                key={idx}
                onClick={() => setActiveStepIdx(isExpanded ? null : idx)}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between relative cursor-pointer group transition-all hover:border-emerald-200 hover:shadow-md"
              >
                {/* Paperclip visual design accent */}
                <div className="absolute -top-3 left-8 z-20 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <Paperclip className="w-5 h-5 text-slate-400 transform -rotate-12" />
                </div>

                <div className="space-y-4 w-full">
                  {/* Floating Action Badge Icon Block */}
                  <div className={`w-10 h-10 rounded-xl ${step.stickerBg} flex items-center justify-center shadow-md shadow-black/5 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Step 0{idx + 1}</span>
                    <h4 className="text-base font-black text-emerald-950 tracking-tight flex items-center gap-1.5 justify-between">
                      {step.title}
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </h4>
                  </div>

                  {/* Dynamic Height Text Content Block */}
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {step.shortDesc}
                  </p>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pt-2 border-t border-slate-50"
                      >
                        <p className="text-[11px] text-emerald-950 font-bold leading-relaxed bg-[#FDFBF7] p-2.5 rounded-xl border border-orange-100/50">
                          {step.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Micro CTA label footer trigger alignment */}
                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-1 text-[9px] font-black text-orange-600 uppercase tracking-widest">
                  <span>{isExpanded ? "Close Matrix" : "Read Full Step"}</span>
                  <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FREE ELIGIBILITY ASSESSMENT ENGINE TOOL */}
      <div className="grid lg:grid-cols-12 gap-12 items-center bg-[#FDFBF7]/60 border border-emerald-100 p-8 md:p-12 rounded-[36px] shadow-inner">
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 inline-block">
            Pre-Check Pipeline
          </span>
          <h3 className="text-3xl font-black text-emerald-950 tracking-tight leading-tight">
            Free Credit Suitability Test
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Evaluate your microfinance borrowing alignment parameters instantly. This local modeling simulator benchmarks repayment capabilities against systemic industry metrics securely.
          </p>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-12 gap-6 items-stretch w-full">
          <form onSubmit={handleCalculateScore} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-900/5 shadow-sm md:col-span-7 space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                Do you have active external running liabilities?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['yes', 'no'].map((opt) => (
                  <button
                    key={opt} type="button" onClick={() => setHasExistingLoans(opt)}
                    className={`py-2.5 px-4 rounded-xl font-black text-xs uppercase border transition-all ${
                      hasExistingLoans === opt 
                        ? 'bg-gradient-to-r from-emerald-800 to-emerald-950 border-transparent text-white shadow-md' 
                        : 'bg-[#FDFBF7] border-emerald-900/10 text-emerald-950'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                Historical Payment Profile Track
              </label>
              <select
                value={repaymentHistory}
                onChange={(e) => setRepaymentHistory(e.target.value)}
                className="w-full bg-[#FDFBF7] border border-emerald-900/10 rounded-xl p-3 text-xs font-bold text-emerald-950 outline-none focus:border-emerald-700 transition-colors"
              >
                <option value="perfect">Paid entirely on schedule always</option>
                <option value="delayed">Minor delayed intervals (1-2 times late)</option>
                <option value="default">Frequent overdues / Restructured profiles</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-wider">
                <span>Monthly Income Metric</span>
                <span className="text-emerald-700 font-extrabold">₹{monthlyIncome.toLocaleString('en-IN')}</span>
              </div>
              {/* 🛠️ FIXED: Arrow function wrapper restored to standard parenthetical bindings */}
              <input 
                type="range" min="10000" max="80000" step="5000" 
                value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full accent-emerald-700 bg-emerald-50 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-black text-xs uppercase tracking-widest shadow-md transition-all active:scale-[0.99]"
            >
              Analyze Capability Graph
            </button>
          </form>

          <div className="bg-[#FDFBF7] border border-emerald-100 rounded-2xl p-6 md:col-span-5 flex flex-col justify-between items-center text-center min-h-[320px]">
            <AnimatePresence mode="wait">
              {!isCalculated ? (
                <motion.div 
                  key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="my-auto space-y-3 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                    <Gauge className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-emerald-950 uppercase tracking-wider">Awaiting Simulation</p>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1 px-2 leading-relaxed">
                      Configure your capital parameters on the left node to instantly evaluate your structural eligibility index score.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col justify-between space-y-4 my-auto"
                >
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Simulated Capability Rating</p>
                    <p className="text-5xl font-black text-emerald-950 tracking-tighter">{scoreResult}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated Scale Curve</p>
                  </div>

                  <div className={`p-3 rounded-xl border text-xs font-black uppercase tracking-wider text-center ${
                    scoreResult >= 750 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-orange-50 text-orange-600 border-orange-200'
                  }`}>
                    {scoreResult >= 750 ? "Excellent Standing" : "Moderate Standing"}
                  </div>

                  <div className="text-left text-[11px] text-slate-500 font-medium leading-relaxed p-3 bg-white border border-emerald-900/5 rounded-xl flex items-start gap-2">
                    {scoreResult >= 740 ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>High suitability match! Your configurations indicate safe history profiles consistent with regular approval pipelines.</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>Moderate framework matches found. Consolidating external secondary accounts can securely restore maximum credit parameters.</span>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </div>
  );
}