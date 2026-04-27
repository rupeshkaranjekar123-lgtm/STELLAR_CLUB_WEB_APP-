import { MessageCircle, PhoneCall } from 'lucide-react';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917888005995"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+917888005995"
        className="w-14 h-14 bg-gradient-to-r from-[#C9A14A] to-[#A8832C] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(201,161,74,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(201,161,74,0.6)] transition-all duration-300 group pulse-glow"
        aria-label="Call Us"
      >
        <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
