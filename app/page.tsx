import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Offers from "@/components/Offer";
import Testimonials from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Offers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
