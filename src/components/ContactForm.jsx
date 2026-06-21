import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, HelpCircle, Send } from 'lucide-react';

export default function ContactForm() {
  // 1. Interactive Department Node Categories
  const [activeTab, setActiveCategoryTab] = useState('general');
  
  // 2. Controlled Input Form State Tracker
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

  // 3. Centralized Typing Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 4. Automated WhatsApp Payload Generator
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    // 🌟 ENTER YOUR COMPANY PHONE NUMBER HERE (With Country Code, No Spaces or '+' signs)
    const companyWhatsAppLine = "919079467436"; 
    
    // Constructing a structured corporate receipt payload
    const textHeadline = `*🚀 NEW VIVAN FINANCE INQUIRY*`;
    const textDivider  = `\n----------------------------------`;
    const textDept     = `\n*Department:* ${contactCategories.find(c => c.id === activeTab)?.title}`;
    const textName     = `\n*Client Name:* ${formData.name}`;
    const textPhone    = `\n*Contact Mobile:* ${formData.phone}`;
    const textDesc     = `\n*Message/Goals:* ${formData.message}`;

    const completeString = `${textHeadline}${textDivider}${textDept}${textName}${textPhone}${textDesc}`;
    
    // Convert regular text into dynamic web-safe browser parameters
    const webSafeMessage = encodeURIComponent(completeString);

    // Build the dynamic deep link API path
    const targetWhatsAppUrl = `https://api.whatsapp.com/send?phone=${companyWhatsAppLine}&text=${webSafeMessage}`;

    // Programmatically launch target path in a clean browser tab safely
    window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-950 p-6 md:p-12 rounded-[36px] shadow-xl relative overflow-hidden border border-white/10">
      
      {/* Dynamic Background Matrix Overlays as seen in image_0af215.png */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="space-y-6 relative z-10">
        
        {/* Dynamic Header Tabs Component Node */}
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block pl-1">Select Department</span>
          <div className="flex flex-wrap gap-2 pt-1.5">
            {contactCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black border transition-all ${
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

        {/* Form Container Wrapper Block */}
        <AnimatePresence mode="wait">
          <motion.form 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleWhatsAppRedirect} 
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Element Input Node */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Your Name</label>
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

              {/* Mobile Element Input Node */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Mobile Number</label>
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

            {/* Description Textarea Field Input Node */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-emerald-300 uppercase tracking-wider pl-1">Message Description</label>
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

            {/* Sharp Core Submit Button Component Action Link */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-orange-950/40 transition-all active:scale-[0.99] flex items-center justify-center gap-2 group"
            >
              <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Submit {contactCategories.find(c => c.id === activeTab)?.title}
            </button>

          </motion.form>
        </AnimatePresence>

      </div>
    </div>
  );
}