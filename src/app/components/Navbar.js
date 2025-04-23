import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="absolute top-5 left-0 w-full z-50 px-10 py-4 flex items-center justify-between bg-transparent text-white">
      {/* Logo */}
      <Link href="/">
        <Image src="/image2.png" alt="Mobile Salon" width={120} height={40} />
      </Link>

      {/* Menu */}
      {/* <ul className="hidden md:flex space-x-6 text-[15px] figtree-font font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Mobile Services</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/how-it-works">How It Works</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul> */}

      {/* Icons + CTA */}
      <div className="flex items-center space-x-6">
        <FaSearch className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaFacebookF className="cursor-pointer" />
        <button className="ml-4 bg-white text-black text-[12px] font-[500px] figtree-font  px-6 py-3 uppercase tracking-[3px]">
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
