import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Users, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

export default function Contact() {
  // Track active conversational category to make the form feel dynamic and premium
  const [activeTab, setActiveCategoryTab] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🌟 ADDITION 1: Controlled input state hook layer
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const contactCategories = [
    { id: 'general', title: 'General Query', icon: <MessageSquare className="w-4 h-4" />, placeholder: "How can our team assist your micro-enterprise?" },
    { id: 'jlg', title: 'Group Loans (JLG)', icon: <Users className="w-4 h-4" />, placeholder: "Tell us about your women circle or village cluster size..." },
    { id: 'support', title: 'Help & Interest', icon: <HelpCircle className="w-4 h-4" />, placeholder: "Ask about repayment timelines, schedules or active documents..." }
  ];

  // 🌟 ADDITION 2: Dynamic input field keystroke listener
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 🌟 ADDITION 3: WhatsApp Automation Payload Handler
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Set company phone number (Format: Country code + phone number, no spaces or '+' symbols)
    const companyWhatsAppNumber = "916376834700"; 
    
    // Construct a beautiful pre-filled receipt template
    const textHeadline = `*Kraaj Micro FINANCE INQUIRY*`;
    const textDivider  = `\n----------------------------------`;
    const textDept     = `\n*Department:* ${contactCategories.find(c => c.id === activeTab)?.title}`;
    const textName     = `\n*Client Name:* ${formData.name}`;
    const textPhone    = `\n*Contact Mobile:* ${formData.phone}`;
    const textDesc     = `\n*Message/Goals:* ${formData.message}`;

    const completeString = `${textHeadline}${textDivider}${textDept}${textName}${textPhone}${textDesc}`;
    
    // Convert regular markdown string safely into browser parameters
    const encodedMessage = encodeURIComponent(completeString);

    // Build API deep link endpoint path
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyWhatsAppNumber}&text=${encodedMessage}`;

    // Programmatically launch the messaging link in a safe tab channel 
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Trigger local success animation state
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12 items-center relative z-10">
      
      {/* LEFT SIDE: DIRECT CONNECT METRICS */}
      <div className="md:col-span-5 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 inline-block">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-none">
            Get in Touch <br />
            <span className="bg-gradient-to-r from-emerald-700 to-orange-600 bg-clip-text text-transparent">Today</span>
          </h1>
        </div>
        
        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
          Have queries regarding loan eligibility, group formations, or interest schedules? Drop a message, and our local field officer will get back to you.
        </p>

        {/* High-Contrast Operational Handles */}
        <div className="space-y-4 text-sm font-bold text-emerald-950 pt-4">
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4" />
            </div>
            <span className="tracking-tight text-emerald-900">+91 6376834700 </span>
          </div>

          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </div>
            <span className="tracking-tight text-emerald-900">microkraaj@gmail.com</span>
          </div>

          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="tracking-tight text-emerald-900">Churu, Rajasthan, India</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: RE-ENGINEERED INTERACTIVE COLORFUL FORM DECK */}
      <div className="md:col-span-7 bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-950 p-6 md:p-12 rounded-[36px] shadow-xl shadow-emerald-950/20 relative overflow-hidden border border-white/10">
        
        {/* Dynamic Decorative Ambient Glow Layer inside the card */}
        <div className="absolute -top-20 -right-20 w-48 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
        
        {/* Shifting Interactive Form Header Categories */}
        <div className="space-y-6 relative z-10">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block pl-1">Select Department</span>
            <div className="flex flex-wrap gap-2 pt-1.5">
              {contactCategories.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => { setActiveCategoryTab(tab.id); setIsSubmitted(false); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black border transition-all ${
                    activeTab === tab.id
                      ? 'bg-orange-500 border-transparent text-white shadow-md shadow-orange-500/30 scale-[1.02]'
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Node Body */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 shadow-inner">
                  <Sparkles className="w-6 h-6 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-white">Redirecting to WhatsApp...</h4>
                  <p className="text-xs text-emerald-100/60 font-medium max-w-xs mx-auto">
                    Your form details have been prepared. Please review and send the pre-filled message inside WhatsApp.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-white uppercase bg-orange-500 px-2.5 py-1 rounded-md shadow-sm">
                  <Clock className="w-3 h-3" /> SLA Status: Active Link
                </div>
              </motion.div>
            ) : (
              // 🌟 FIXED: Form onSubmit bound directly to the automated WhatsApp engine
              <motion.form 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleWhatsAppSubmit} 
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Your Name</label>
                    {/* 🌟 FIXED: Linked name, value, and onChange handlers */}
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder-emerald-200/30 outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner" 
                      placeholder="Rahul Kumar" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Mobile Number</label>
                    {/* 🌟 FIXED: Linked phone, length boundaries, and onChange tracking */}
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      maxLength="10"
                      pattern="[6-9][0-9]{9}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder-emerald-200/30 outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner" 
                      placeholder="98765 XXXXX" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Message Description</label>
                  {/* 🌟 FIXED: Bound textarea node attributes explicitly to state payload schema */}
                  <textarea 
                    required
                    name="message"
                    rows="4" 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-bold text-white placeholder-emerald-200/30 outline-none focus:border-orange-400 focus:bg-white/10 transition-all shadow-inner resize-none leading-relaxed" 
                    placeholder={contactCategories.find(c => c.id === activeTab)?.placeholder}
                  ></textarea>
                </div>

                {/* Submit Action Block */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-orange-950/40 transition-all active:scale-[0.99] flex items-center justify-center gap-2 group"
                >
                  <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Submit {contactCategories.find(c => c.id === activeTab)?.title}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}