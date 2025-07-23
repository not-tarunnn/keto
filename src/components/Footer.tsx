export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white mt-auto">
      {/* Shadow Fade Effect */}
      <div className="absolute inset-0 h-full bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 max-w-7xl mx-auto">
        <p className="text-sm text-center md:text-left">
          © 2025 KETO COOKIES | All Rights Reserved 
        </p>
        <div className="flex flex-wrap justify-center gap-4  text-sm font-semibold uppercase">
          <a href="#" className="hover:text-gray-300 transition">Get In Touch</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-300 transition">FAQs</a>
          <a href="#" className="hover:text-gray-300 transition">Do Not Sell My Personal Info</a>
        </div>
      </div>
    </footer>
  );
}
