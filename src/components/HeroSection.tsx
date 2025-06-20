import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#f3f4e8] overflow-hidden">
            {/* SKINCARE Background Text */}
            <h1 className="absolute bottom-[-35] left-0 w-full text-center text-[124px] md:text-[230px] font-bold text-[#2D3B36] z-0 leading-none uppercase">
                SKINCARE
            </h1>


            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-12">
                {/* Left Text */}
                <div className="md:w-1/3 text-center md:text-left">
                    <p
                        className="text-[#2D3B36] text-[20px] font-normal leading-[100%] w-[335px] h-[87px] mx-auto md:mx-0"
                        style={{ textIndent: '105px' }}
                    >
                        Transform your skincare routine with premium products that restore,
                        protect, and enhance your natural glow every day.
                    </p>

                    <button className="mt-6 px-6 py-3 bg-[#2f342f] text-white rounded-full hover:scale-105 transition-transform translate-y-70">
                        Shop Now
                    </button>
                </div>

                {/* Center Heading */}
                <div className="md:w-1/3 flex flex-col items-start justify-center relative translate-x-25">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3B36] text-left mb-6 leading-tight uppercase">
                        GLOW<br />
                        NATUR-<br />
                        ALLY
                    </h2>
                </div>


                {/* Right-side Product Image */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="text-[#2D3B36] p-3 rounded-xl inline-block">
                        <Image
                            src="/assets/plum.jpg"
                            alt="Plum Cream"
                            width={120}
                            height={120}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-full flex flex-col items-center justify-center mt-10 px-4">
                <div className="max-w-sm w-full">
                    <Image
                        src="/assets/woman.png"
                        alt="Skincare Woman"
                        width={400}
                        height={500}
                        className="rounded-2xl object-cover w-full"
                    />
                </div>

                <div className="mt-4 bg-[#e9eddc] rounded-full p-4 py-6 w-[280px] h-[39px] flex items-center justify-center gap-3 shadow-md max-w-mdtransform translate-y-[-80px]  ">
                    <Image
                        src="/assets/plum1.jpg"
                        alt="Plum"
                        width={30}
                        height={30}
                        className="rounded-full border border-dotted border-black "
                    />
                    <p className="text-xs text-gray-700 text-center ">
                        While giving you an invigorating cleansing experience.
                    </p>
                </div>
            </div>
        </section>
    );
}
