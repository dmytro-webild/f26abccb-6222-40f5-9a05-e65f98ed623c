"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "menu" },
        { name: "About", id: "about" },
        { name: "Gallery", id: "gallery" },
        { name: "Reservations", id: "reservations" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MAP Restaurant"
      button={{ text: "Book Table", href: "#reservations" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="MAP Restaurant"
      description="Taste Beyond Limits. Experience the finest blend of traditional Sudanese hospitality and international culinary excellence."
      buttons={[
        { text: "Order Now", href: "#menu" },
        { text: "Reserve Table", href: "#reservations" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-design-reflects-modern-architecture-dusk-generated-by-ai_188544-30970.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Our Culinary Journey" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/young-cook-putting-vegetable-plate-with-salad_23-2148040236.jpg", alt: "Chef" },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "1", brand: "Grills", name: "Charcoal Lamb Chops", price: "$35", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-beef-barbecue-kebab-served-lavash-with-grilled-pepper-tomatoes-bbq-sauce_114579-2937.jpg" },
        { id: "2", brand: "Fast Food", name: "MAP Signature Burger", price: "$18", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/front-view-hamburger-inside-round-plate-dark-floor_140725-11629.jpg" },
        { id: "3", brand: "Sudanese", name: "Authentic Ful Medames", price: "$12", rating: 5, reviewCount: "210", imageSrc: "http://img.b2bpic.net/free-photo/baked-meat-sauce-parsley-sumakh-pickles_141793-16636.jpg" },
        { id: "4", brand: "Drinks", name: "Hibiscus Signature Mocktail", price: "$9", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/handsome-bartender-making-drinking-cocktails-counter_1303-19742.jpg" },
        { id: "5", brand: "Dessert", name: "Warm Date Cake", price: "$10", rating: 5, reviewCount: "140", imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-strawberries-chocolate-ice-cream_1232-1315.jpg" },
        { id: "6", brand: "Drinks", name: "Traditional Arabic Coffee", price: "$6", rating: 5, reviewCount: "320", imageSrc: "http://img.b2bpic.net/free-photo/doughnut-glass-plate-marble-wall_114579-21114.jpg" },
      ]}
      title="Chef's Signature Menu"
      description="Discover our meticulously crafted dishes, from traditional charcoal grills to unique Sudanese flavors."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentyNine
      textboxLayout="split"
      gridVariant="bento-grid"
      animationType="slide-up"
      useInvertedBackground={false}
      features={[
        { title: "Modern Interior", description: "Designed for luxury dining.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-round-table-served-two-christms-dinner-silver-candle-decorated-with-natural-fir-branches-two-flutes-pairs-plates-with-decorative-handmade-christmas-trees_132075-11391.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199366.jpg", buttonText: "View" },
        { title: "Outdoor Seating", description: "Relax in our warm atmosphere.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-cooking_23-2148471935.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-slicing-ingredients-salad_23-2148471928.jpg", buttonText: "View" },
        { title: "Private Dining", description: "Perfect for special occasions.", imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-vegetables-table_140725-4690.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/shrimp-linguine-pasta-with-basil-sun-dried-tomatoes_84443-94397.jpg", buttonText: "View" },
      ]}
      title="Atmosphere & Gallery"
      description="Where modern elegance meets traditional warmth."
    />
  </div>

  <div id="reservations" data-section="reservations">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        { id: "standard", title: "Standard Booking", price: "Free", period: "Reservation", features: ["Table for 2-4", "Priority seating"], button: { text: "Reserve Now" }, imageSrc: "http://img.b2bpic.net/free-photo/gray-concrete-pillars_181624-1500.jpg" },
        { id: "event", title: "Special Event", price: "Custom", period: "Booking", features: ["Group menu options", "Custom arrangement"], button: { text: "Contact Us" }, imageSrc: "http://img.b2bpic.net/free-photo/abstract-design-reflects-modern-architecture-dusk-generated-by-ai_188544-30970.jpg" },
      ]}
      title="Table Reservations"
      description="Book your table in advance to secure your spot for a limit-less taste experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Excellent!", quote: "The best Sudanese food I have tasted in a long time.", name: "Sarah Ahmed", role: "Food Critic", imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-lunch-while-eating-with-her-boyfriend-restaurant_637285-1953.jpg" },
        { id: "2", title: "Luxurious", quote: "An incredible atmosphere paired with perfect food.", name: "John Doe", role: "Traveler", imageSrc: "http://img.b2bpic.net/free-photo/charming-woman-looks-into-camera-smiles-caucasian-short-haired-lady-black-jacket-laughing-posing-isolated_197531-18517.jpg" },
        { id: "3", title: "Amazing", quote: "I love the signature burger, simply unbeatable.", name: "Ali Hassan", role: "Regular Guest", imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-man-restaurant_23-2147689185.jpg" },
        { id: "4", title: "Great Place", quote: "Perfect for date nights and family celebrations.", name: "Fatima Zara", role: "Influencer", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bride-feeding-her-groom-with-croissant-cafe_176420-2274.jpg" },
        { id: "5", title: "Superb", quote: "The attention to detail in every dish is impressive.", name: "Omar Saeed", role: "Chef", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cutlery-crockery_8353-9876.jpg" },
      ]}
      title="What Our Guests Say"
      description="Authentic reviews from those who experienced MAP Restaurant."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Do you accept walk-ins?", content: "Yes, we do, but booking is recommended for weekends." },
        { id: "f2", title: "Are you Halal certified?", content: "Yes, all our ingredients are 100% Halal." },
        { id: "f3", title: "Do you have vegan options?", content: "Yes, we offer several delicious plant-based dishes." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-dining-room-with-elegant-chandelier-lighting-generated-by-ai_188544-21199.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about dining at MAP Restaurant."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-static-grid" }}
      text="Ready to taste beyond limits? Visit us today."
      buttons={[
        { text: "Email Us", href: "mailto:info@maprestaurant.com" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Contact",          items: [
            { label: "123 Map St, City", href: "#" },
            { label: "info@maprestaurant.com", href: "mailto:info@maprestaurant.com" },
          ],
        },
        {
          title: "Hours",          items: [
            { label: "Mon-Sun: 10AM - 11PM", href: "#" },
          ],
        },
        {
          title: "Social",          items: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
          ],
        },
      ]}
      bottomLeftText="© 2024 MAP Restaurant."
      bottomRightText="All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
