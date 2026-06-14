/**
 * Footer Component
 *
 * Site footer with navigation links, project credit, and copyright.
 * Features:
 * - Background image with dark overlay
 * - Logo linking to home
 * - Navigation links
 * - Project credit
 * - Copyright notice
 */

import Image from "next/image";
import Link from "next/link";

// Footer navigation links
const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  return (
    // Footer with background image (bg-footer from tailwind config)
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* Dark Overlay - 90% opacity black overlay for text readability */}
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0" />
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* Footer Logo */}
          <Link href="/" className="relative w-[230px] h-[58px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>

          {/* Footer Navigation Links - Vertical on mobile, horizontal on xl */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Project Credit */}
          <p className="text-white/80 text-center tracking-wide">
            This project was made by SoftBridge Solutions.
          </p>

          {/* Copyright Notice */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; {new Date().getFullYear()}. All reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
