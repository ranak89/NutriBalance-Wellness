import "../styles/contact.css";
import {

    Mail,

    Phone,

    MapPin,

    Globe

} from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="contact section">

            <div className="container">

                <div className="contact-card">

                    {/* LEFT */}

                    <div className="contact-left">

            <span className="section-tag">
              START YOUR JOURNEY
            </span>

                        <h2 className="section-title">
                            Ready To Feel
                            <span> Healthier & More Confident?</span>
                        </h2>

                        <p className="contact-text">
                            Every health journey starts with one conversation.
                            During your complimentary Discovery Call we'll discuss
                            your goals, challenges, lifestyle, and how personalized
                            nutrition coaching can help you achieve lasting results.
                        </p>

                        <div className="contact-benefits">

                            <div className="benefit">
                                ✓ Complimentary Discovery Call
                            </div>

                            <div className="benefit">
                                ✓ Personalized Recommendations
                            </div>

                            <div className="benefit">
                                ✓ Virtual Coaching Across Canada & India
                            </div>

                            <div className="benefit">
                                ✓ No Obligation
                            </div>

                        </div>

                        <a
                            href="https://calendly.com/nutribalancewellness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary glow"
                        >
                            Book Your Discovery Call
                        </a>

                    </div>

                    {/* RIGHT */}

                    <div className="contact-right">

                        <div className="contact-info">

                            <h3>
                                Contact Information
                            </h3>

                            <div className="info-item">

                                <strong><Mail size={24} /> Email</strong>

                                <a href="mailto:dassuchandra04101991@gmail.com">
                                    dassuchandra04101991@gmail.com
                                </a>

                            </div>

                            <div className="info-item">

                                <strong><Phone size={24} /> Phone / WhatsApp</strong>

                                <a href="tel:+14162762157">
                                    +1 (416) 276-2157
                                </a>

                            </div>

                            <div className="info-item">

                                <strong><MapPin size={24} /> Location</strong>

                                <p>
                                    Kitchener, Ontario, Canada
                                </p>

                            </div>

                            <div className="info-item">

                                <strong><Globe size={24} /> Service Area</strong>

                                <p>
                                    Virtual Appointments Across Canada & India
                                </p>

                            </div>

                        </div>

                        <div className="social-buttons">

                            <a
                                href="https://www.instagram.com/nutribalancewellness"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://share.google/IgWfpHNQuPGUBzSIe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Google Reviews
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}