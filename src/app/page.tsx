import BestSellingSection from '@/components/BestSellingSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import WhyOurProducts from '@/components/WhyOurProducts'
import ProductGallery from '@/components/ProductGallery'
import React from 'react'
import SkincareFAQ from '@/components/SkincareFAQ'
import Footer from '@/components/Footer'
import FadingParagraph from '@/components/FadingParagraph'

const page = () => {
  return (
    <>
    <Navbar/>
<HeroSection/>
<FadingParagraph/>
<WhyOurProducts/>
<BestSellingSection/>
<ProductGallery/>
<SkincareFAQ/>
<Footer/>
</>
  )
}

export default page