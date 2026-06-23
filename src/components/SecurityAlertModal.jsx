import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, X, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function SecurityAlertModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged the warning during this session
    const alertDismissed = localStorage.getItem('kraaj_security_alert_dismissed');
    if (!alertDismissed) {
      // Small timeout to give a premium entrance feel after page hydration
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Persist choice so it doesn't show up on every single refresh/page navigate
    localStorage.setItem('kraaj_security_alert_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
          
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-emerald-950/80 backdrop-blur-md"
          />

          {/* Premium Alert Card Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden text-center"
          >
            {/* Animated Ambient Glow Shapes background */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Close Button Layer */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Icon Block */}
            <div className="flex flex-col items-center space-y-4 relative z-10">
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center text-white shadow-xl shadow-orange-500/20"
              >
                <ShieldAlert className="w-10 h-10 animate-pulse" />
              </motion.div>

              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 inline-block">
                  Security Advisory & Fraud Alert
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Important Security Notice <br />
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">For All Clients</span>
                </h2>
              </div>
            </div>

            {/* Core Warning Content Cards */}
            <div className="mt-8 space-y-4 text-left relative z-10">
              
              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">No Online / Mobile Loans</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                    Kraaj Micro Finance **does not offer or disburse any loans online**, through apps, or over social media channels. All transactions and processes occur strictly physical-first via verified local field officers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">Protect Your Personal Information</h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                    Never share sensitive data such as **OTP codes, bank account passwords, Aadhar links, or debit card credentials** with anyone online or over phone calls claiming to represent us.
                  </p>
                </div>
              </div>

            </div>

            {/* Acknowledgment Submission CTA */}
            <div className="mt-8 pt-2 relative z-10">
              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-orange-950/40 transition-all active:scale-[0.99]"
              >
                I Understand & Wish to Proceed
              </button>
              <p className="text-[10px] font-bold text-slate-500 mt-3 uppercase tracking-wider">
                Official Website Platform Channel Secure Shield Active
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}