import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Leistungen from "./components/Leistungen";
import Sprechzeiten from "./components/Sprechzeiten";
import Anfahrt from "./components/Anfahrt";
import Notdienst from "./components/Notdienst";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-paper-100">
      <Nav />
      <Hero />
      <About />
      <Leistungen />
      <Sprechzeiten />
      <Anfahrt />
      <Notdienst />
      <Footer />
    </main>
  );
}
