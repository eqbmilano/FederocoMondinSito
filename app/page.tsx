import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SectionServizi } from "../components/SectionServizi";
import { SectionChiSono } from "../components/SectionChiSono";
import { SectionMetodo } from "../components/SectionMetodo";
import { SectionTestimonianze } from "../components/SectionTestimonianze";
import { SectionFaq } from "../components/SectionFaq";
import { SectionContatti } from "../components/SectionContatti";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionServizi />
        <SectionChiSono />
        <SectionMetodo />
        <SectionTestimonianze />
        <SectionFaq />
        <SectionContatti />
      </main>
      <Footer />
    </>
  );
}
