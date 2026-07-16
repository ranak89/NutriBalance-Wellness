import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import About from "./components/About";
import Programs from "./components/Programs";
import Services from "./components/Services";
import Journey from "./components/Journey";
import SuccessStories from "./components/SuccessStories.jsx";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


import "./styles/globals.css";

export default function App() {
    return (
        <>
            <Navbar />

            <main>

                <Hero />

                <Trusted />

                <About />

                <Programs />

                <Services />

                <Journey />

                <SuccessStories />

                <FAQ />

                <Contact />

                <FinalCTA />

            </main>

            <FloatingButtons />

            <Footer />

        </>
    );
}