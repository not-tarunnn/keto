'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialSliderSection from "@/components/TestimonialSliderSection";
import CookieSlider from "@/components/CookieSlider";
import NewDropSection from "@/components/NewDropSection";
import SubscriptionSection from '@/components/SubscriptionSection';
import  Text from '@/components/Text';
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      

      <main className="flex-grow">
        {/* Section 1: Animated Hero */}
        <section>
          <Header />
          <NewDropSection/>
        </section>


        {/* Section 2: Featured Products */}
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <CookieSlider />
        </section>

        {/* Section 3: Review Carousel */}
        <section className="h-screen flex items-center justify-center py-32 mt-32 relative z-10">
          <SubscriptionSection />
        </section>

        {/* Section 4: Newsletter Signup */}
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Don’t Miss a Drop</h2>
          <TestimonialSliderSection/>
        </section>

        {/* Section 5: Call to Action */}
<section
  className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/cta.webp')" }}
>

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    <Text/>
 

  {/* Add Footer at the bottom of the section */}
  <div className="absolute bottom-0 w-full">
    <Footer />
  </div>
</section>
      </main>
    </div>
  );
}
