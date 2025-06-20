export default function Footer() {
  return (
    <footer className="relative bg-[#2D3B36] text-[#FEFFF4] font-inter overflow-hidden px-6 md:px-20 py-24">
      {/* Top Section: Heading + Contact aligned */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center z-10 relative">
        {/* Left: Heading */}
        <h2 className="text-3xl md:text-4xl font-medium leading-tight md:max-w-lg">
          Join The Skincare <br className="hidden md:block" />
          Community Now.
        </h2>

        {/* Right: Contact */}
        <div className="text-left mt-8 md:mt-0 translate-x-[-115px]">
          <p className="text-sm text-[#FEFFF4]">Get in Touch</p>
          <p className="text-2xl font-semibold text-white">
            contact.skincare.com
          </p>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="max-w-7xl mx-auto my-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10 relative">
        {/* Social Links */}
        <div className="flex gap-10 text-sm text-[#FEFFF4]">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            YouTube
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex gap-10 text-sm text-[#FEFFF4] md:justify-end w-full md:w-auto my-10">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookies Policy
          </a>
        </div>
      </div>

      {/* Background SKINCARE Text */}
      <h1 className="absolute mt-56 bottom-[-85] left-[-70] w-full text-center text-[120px] md:text-[260px] font-bold text-[#35433E] z-0 leading-none uppercase opacity-90 pointer-events-none">
        SKINCARE
      </h1>
    </footer>
  );
}
