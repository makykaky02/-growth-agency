import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Alexandria } from "next/font/google";

// Import Alexandria Bold from Google Fonts
const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 bg-gradient-to-b from-white to-[#f8f9fa] overflow-hidden">
      
      {/* Top-Right Logo */}
     <Image
  src="/bbs.png"
  alt="Logo"
  width={180}
  height={50}
  className="absolute top-6 right-6 md:right-20 z-20 w-[100px] md:w-[180px] h-auto"
/>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 py-12 md:py-24">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/bsl.png" // Replace with your actual image
            alt="Personal branding illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-gray-900 text-center md:text-left flex flex-col justify-center">
          <h1 className={`${alexandria.className} text-4xl md:text-5xl font-bold mb-4`}>
            Elevate Your{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Brand
            </span>{" "}
            Online
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            We help brands grow through SEO, email marketing & personal branding strategies that actually work.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />

      {/* Scroll Indicator - placed below paragraph */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce text-pink-500">
        <ChevronDown size={24} />
        <ChevronDown size={24} />
      </div>
    </section>
  );
}