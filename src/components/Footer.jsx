import "../styles/footer.css";
import {
    Instagram,

    CalendarDays,

    Mail,

    Phone,

    MapPin, HeartHandshakeIcon
} from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    {/* Brand */}

                    <div className="footer-column">

                        <h2 className="footer-logo">
                            NutriBalance Wellness
                        </h2>

                        <p className="footer-description">
                            Evidence-based nutrition coaching that helps South Asian
                            women build healthier lifestyles without giving up the
                            foods they love.
                        </p>

                        <div className="footer-tag">
                            Virtual Coaching Across Canada & India
                        </div>

                    </div>

                    {/* Quick Links */}

                    <div className="footer-column">

                        <h3>Quick Links</h3>

                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        <a href="#programs">Programs</a>
                        <a href="#services">Services</a>
                        <a href="#faq">FAQ</a>

                    </div>

                    {/* Contact */}

                    <div className="footer-column">

                        <h3>Contact</h3>

                        <a href="mailto:dassuchandra04101991@gmail.com">
                            <Mail size={24} />
                        </a>

                        <a href="tel:+14162762157">
                            <Phone size={24} />
                        </a>

                        <p>
                            <MapPin size={24} />
                        </p>

                        <p>Virtual Across Canada & India</p>

                    </div>

                    {/* Social */}

                    <div className="footer-column">

                        <h3>Connect</h3>

                        <a
                            href="https://calendly.com/nutribalancewellness"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CalendarDays size={24} />
                        </a>

                        <a
                            href="https://www.instagram.com/nutribalancewellness"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram size={24} />
                        </a>

                        <a
                            href="https://share.google/IgWfpHNQuPGUBzSIe"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Reviews
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © {year} NutriBalance Wellness. All Rights Reserved.
                    </p>

                    <p>
                        Designed with <HeartHandshakeIcon/> for healthier living.
                    </p>

                </div>

            </div>

        </footer>
    );
}