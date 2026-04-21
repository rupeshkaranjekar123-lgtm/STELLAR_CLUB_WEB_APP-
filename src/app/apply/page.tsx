'use client';
import { useState, FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Plus, Trash2, CheckCircle2, ChevronRight, Info } from 'lucide-react';

const PLAN_DATA = {
  Blue: { tenure: '1 Year', price: 74999, amc: 0, benefits: ['Pool, Gym, Steam Bath', 'Fine Dining & Café', 'Banquet Access', 'Food 20% Discount'] },
  Silver: { tenure: '3 Years', price: 174999, amc: 5000, benefits: ['Pool, Gym, Steam Bath', 'Fine Dining & Café', 'Banquet Access', 'Events Access', 'Food 25% Discount', 'Salon 20% Discount'] },
  Gold: { tenure: '5 Years', price: 224999, amc: 10000, benefits: ['Pool, Gym, Steam Bath', 'Fine Dining & Café', 'Banquet Access', 'VIP Events', 'Food 30% Discount', 'Salon 30% Discount', 'Stellaar Select Program'] }
};

type MembershipType = 'Blue' | 'Silver' | 'Gold';

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '', dob: '', anniversary: '', occupation: '', businessCategory: '',
    email: '', mobile: '', address: '', cityPin: '',
    membershipType: 'Gold' as MembershipType,
    adults: 1, kids: 0, addons: '',
    agreeTerms: false
  });

  const [familyMembers, setFamilyMembers] = useState([{ name: '', dob: '', mobile: '' }]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFamilyChange = (index: number, field: string, value: string) => {
    const updated = [...familyMembers];
    updated[index] = { ...updated[index], [field]: value };
    setFamilyMembers(updated);
  };

  const addFamilyMember = () => setFamilyMembers([...familyMembers, { name: '', dob: '', mobile: '' }]);
  const removeFamilyMember = (index: number) => setFamilyMembers(familyMembers.filter((_, i) => i !== index));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) return alert("Please agree to the Terms & Conditions.");
    // Fake submission
    setAppId(`STL-${Math.floor(1000 + Math.random() * 9000)}-APP`);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPlan = PLAN_DATA[formData.membershipType];
  const totalPrice = currentPlan.price + currentPlan.amc;

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-6 pt-32 pb-24">
          <div className="glass-card p-12 text-center max-w-2xl w-full border border-[#D4AF37]/30 fade-in">
            <CheckCircle2 className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl font-serif text-white mb-4">Application Received</h1>
            <p className="text-white/70 mb-8 text-lg">Thank you for applying to The Stellaar. Your application is under review by our committee. You will receive an email shortly with the next steps.</p>
            <div className="bg-black/50 p-6 rounded-lg text-left mb-8 border border-white/5">
              <p className="text-sm text-white/50 uppercase tracking-wider mb-2">Application Reference</p>
              <p className="text-xl text-[#D4AF37] font-mono tracking-widest">{appId}</p>
            </div>
            <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm">
              Return Home
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-4">Where Prestige Meets Lifestyle</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Membership Application</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join an exclusive community of elite individuals. Please complete the application below for our membership committee&apos;s review.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm">
            <Info className="w-4 h-4" />
            Only 100 Exclusive Memberships Available
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* 1. Personal Details */}
            <div className="glass-card p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl font-serif text-white mb-8 pb-4 border-b border-white/10 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Full Name *</label>
                  <input type="text" name="fullName" required className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" value={formData.fullName} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Email Address *</label>
                  <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Mobile Number *</label>
                  <input type="tel" name="mobile" required className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" value={formData.mobile} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Date of Birth *</label>
                  <input type="date" name="dob" required className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]" value={formData.dob} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Anniversary Date</label>
                  <input type="date" name="anniversary" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]" value={formData.anniversary} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Occupation</label>
                  <input type="text" name="occupation" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" value={formData.occupation} onChange={handleInputChange} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Address *</label>
                  <textarea name="address" required rows={2} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" value={formData.address} onChange={handleInputChange}></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">City & Pin Code *</label>
                  <input type="text" name="cityPin" required className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" value={formData.cityPin} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            {/* 2. Membership Details */}
            <div className="glass-card p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl font-serif text-white mb-8 pb-4 border-b border-white/10 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                Membership Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Select Membership Tier *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    {Object.keys(PLAN_DATA).map(tier => (
                      <div 
                        key={tier}
                        onClick={() => setFormData({ ...formData, membershipType: tier as MembershipType })}
                        className={`cursor-pointer border px-4 py-4 text-center transition-all ${formData.membershipType === tier ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/10 hover:border-white/30 bg-black/50'}`}
                      >
                        <div className="font-serif text-white text-lg mb-1">{tier}</div>
                        <div className="text-xs text-[#D4AF37]">{PLAN_DATA[tier as MembershipType].tenure}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 bg-black/50 p-6 border border-[#D4AF37]/20 rounded-sm">
                  <h3 className="text-[#D4AF37] font-serif text-lg mb-4">Investment Summary</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Base Membership</span>
                    <span className="text-white">₹{currentPlan.price.toLocaleString('en-IN')}</span>
                  </div>
                  {currentPlan.amc > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Annual AMC</span>
                      <span className="text-white">₹{currentPlan.amc.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="pt-4 mt-4 border-t border-white/10 flex justify-between font-bold text-lg">
                    <span className="text-white">Total</span>
                    <span className="text-[#D4AF37]">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Number of Adults</label>
                  <select name="adults" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" value={formData.adults} onChange={handleInputChange}>
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Kids (Below 18)</label>
                  <select name="kids" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" value={formData.kids} onChange={handleInputChange}>
                    {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              {/* Benefits Display */}
              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-6">
                <h4 className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> {formData.membershipType} Tier Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                  {currentPlan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-white/80">
                      <ChevronRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Family Members */}
            <div className="glass-card p-8 md:p-10 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 mb-8">
                <h2 className="text-2xl font-serif text-white flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-sm">3</span>
                  Family Members
                </h2>
                <button type="button" onClick={addFamilyMember} className="mt-4 md:mt-0 text-sm text-[#D4AF37] hover:text-white flex items-center gap-2 transition-colors">
                  <Plus className="w-4 h-4" /> Add Member
                </button>
              </div>

              {familyMembers.map((member, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 mb-6 items-end bg-black/30 p-4 border border-white/5">
                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" value={member.name} onChange={e => handleFamilyChange(idx, 'name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-widest">Date of Birth</label>
                    <input type="date" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] [color-scheme:dark]" value={member.dob} onChange={e => handleFamilyChange(idx, 'dob', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-widest">Mobile</label>
                    <input type="tel" className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" value={member.mobile} onChange={e => handleFamilyChange(idx, 'mobile', e.target.value)} />
                  </div>
                  {familyMembers.length > 1 && (
                    <button type="button" onClick={() => removeFamilyMember(idx)} className="h-[46px] px-4 text-white/30 hover:text-red-400 transition-colors flex items-center justify-center border border-white/10 bg-black/50 hover:border-red-400/50 hover:bg-red-400/10">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* 4. Terms & Submission */}
            <div className="glass-card p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-sm">4</span>
                Terms & Conditions
              </h2>
              
              <div className="bg-black/50 p-6 border border-white/5 text-sm text-white/60 mb-8 space-y-4 h-48 overflow-y-auto custom-scrollbar">
                <p>1. Membership is granted at the sole discretion of The Stellaar committee and is non-refundable under any circumstances once approved.</p>
                <p>2. Memberships are non-transferable unless specific conditions under the Platinum tier are met and approved by management.</p>
                <p>3. The club reserves the right of admission and can revoke membership if house rules are violated.</p>
                <p>4. All members and their guests must adhere to the dress code and behavioral guidelines while on premises.</p>
                <p>5. The club is not liable for any loss of personal belongings or injury sustained within the premises.</p>
                <p>6. Annual Maintenance Charges (AMC) must be paid promptly. Failure to do so may result in temporary suspension of privileges.</p>
              </div>

              <label className="flex items-start gap-4 cursor-pointer group mb-10">
                <div className="mt-1 flex-shrink-0">
                  <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} className="hidden" />
                  <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${formData.agreeTerms ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-white/30 group-hover:border-[#D4AF37]'}`}>
                    {formData.agreeTerms && <CheckCircle2 className="w-3 h-3 text-black" />}
                  </div>
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">I have read and agree to all the terms & conditions of The Stellaar Club membership.</span>
              </label>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
                <button type="submit" className="flex-1 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  Submit Application
                </button>
                <button type="button" onClick={() => window.location.reload()} className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                  Reset Form
                </button>
              </div>
            </div>

            {/* Hidden Admin Fields */}
            <input type="hidden" name="applicationId" value="APP-NEW" />
            <input type="hidden" name="status" value="PENDING" />
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
