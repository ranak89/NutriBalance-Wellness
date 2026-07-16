import { useEffect, useState } from "react";
import { Menu, X, CalendarDays, Leaf } from "lucide-react";
import "../styles/navbar.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 30);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (

        <header
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        >

            <div className="container navbar-container">

                <a
                    href="#hero"
                    className="logo"
                >
                    <div className="logo-icon">

                        <Leaf
                            size={34}
                            strokeWidth={2}
                        />

                    </div>

                    <div className="logo-text">

    <span className="logo-title">
      NutriBalance
    </span>

                        <span className="logo-subtitle">
      Wellness
    </span>

                    </div>

                </a>

                <nav className={menuOpen ? "nav active" : "nav"}>

                    <a href="#hero" onClick={closeMenu}>Home</a>

                    <a href="#about" onClick={closeMenu}>About</a>

                    <a href="#programs" onClick={closeMenu}>Programs</a>

                    <a href="#services" onClick={closeMenu}>Services</a>

                    <a href="#faq" onClick={closeMenu}>FAQ</a>

                    <a href="#contact" onClick={closeMenu}>Contact</a>

                    <a
                        href="https://calendly.com/nutribalancewellness"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-book-btn"
                    >
                        Book Discovery Call
                    </a>

                </nav>

                <a
                    href="https://calendly.com/nutribalancewellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desktop-book-btn"
                >

                    <CalendarDays size={18} />

                    <span>Book Discovery Call</span>

                </a>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen
                        ? <X size={30} />
                        : <Menu size={30} />
                    }

                </button>

            </div>

        </header>

    );

}