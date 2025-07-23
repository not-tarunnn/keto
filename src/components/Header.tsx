// src/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed backdrop-blur-md top-0 w-full z-50 bg-transparent text-white py-4 px-6 h-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left links */}
        <nav className="flex space-x-6 text-md font-semibold gap-8">
          <Link href="blog">SHOP CATALOGUE</Link>
          <Link href="blog">BLOG</Link>
        </nav>

        {/* Center logo */}
        <Link href="/" className="text-5xl font-extrabold tracking-wide relative">
          <span className="relative z-10">KETO</span>
          <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-white z-0 transform -translate-y-1/2"></span>
        </Link>

        {/* Right links */}
        <nav className="flex space-x-6 text-md font-semibold gap-8">
          <Link href="blog">GIFTING</Link>
          <Link href="blog">ABOUT</Link>
          <Link href="blog">CART (0)</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
