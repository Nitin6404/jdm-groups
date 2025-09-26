import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Sections
import Hero from "../../components/home/Hero";
import AboutUs from "../../components/home/AboutUs";
import Mission from "../../components/home/Mission";
import PreviousContracts from "../../components/home/PreviousContracts";
import OngoingContracts from "../../components/home/OngoingContracts";
import Gallery from "../../components/home/Gallery";
import Contact from "../../components/home/Contact";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="home" className="pt-20">
          <Hero />
        </section>

        <section id="about" className="py-16 bg-gray-50">
          <AboutUs />
        </section>

        <section id="mission" className="py-16">
          <Mission />
        </section>

        <section id="previous-contracts" className="py-16 bg-gray-50">
          <PreviousContracts />
        </section>

        <section id="ongoing-contracts" className="py-16">
          <OngoingContracts />
        </section>

        <section id="gallery" className="py-16 bg-gray-50">
          <Gallery />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
