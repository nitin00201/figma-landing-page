import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f3f4e8] px-6 md:px-16 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-[#2D3B36]">SKINCARE</div>

      <nav className="hidden md:flex space-x-8 text-[#2D3B36] text-sm font-medium">
        <a href="#">All Products</a>
        <a href="#">Serum</a>
        <a href="#">Sunscreen</a>
        <a href="#">Bundle</a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2 bg-[#FEFFF4] px-2 py-2 rounded-full">
          <Image src="/assets/bag.png" alt="Cart" width={18} height={18} />
        </div>
          <span className="text-sm text-[#2D3B36]">Cart (1)</span>
        <button className="w-9 h-9 rounded-full bg-[#FEFFF4] flex items-center justify-center">
          <Image src="/assets/heart.png" alt="Wishlist" width={18} height={18} />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#FEFFF4] flex items-center justify-center">
          <Image src="/assets/user-icon.png" alt="Profile" width={18} height={18} />
        </button>
      </div>
    </header>
  );
}
