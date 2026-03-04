import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}