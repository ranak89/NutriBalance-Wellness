import "../styles/hero.css";
import suchandra from "../assets/suchandra.png";
import {
    Award,
    Globe,
    HeartHandshake
} from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="hero section fade-in">
            <div className="hero-overlay"></div>

            <div className="container hero-container">

                {/* LEFT CONTENT */}

                <div className="hero-content fade-left">

          <span className="section-tag">
            PN1 Certified Nutrition Coach • Canada & India
          </span>

                    <h1>
                        Personalized Nutrition Coaching
                        <span> For a Healthier, Happier You</span>
                    </h1>

                    <p className="hero-description">
                        Build sustainable healthy habits through evidence-based,
                        personalized nutrition coaching designed around your
                        lifestyle, preferences, and long-term wellness goals.
                        Virtual coaching available across Canada and India.
                    </p>

                    <p className="hero-description">
                        Personalized nutrition coaching rooted in science,
                        culture, sustainability, and your everyday lifestyle.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="https://calendly.com/nutribalancewellness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary glow"
                        >
                            Book Your Discovery Call
                        </a>

                        <a
                            href="#programs"
                            className="btn btn-secondary"
                        >
                            Explore Programs
                        </a>

                    </div>

                    <div className="hero-trust">

                        <div className="trust-card">

                            <Award
                                size={36}
                                strokeWidth={1.8}
                            />

                            <span>
        PN1 Certified Nutrition Coach
    </span>

                        </div>

                        <div className="trust-card">

                            <Globe
                                size={36}
                                strokeWidth={1.8}
                            />

                            <span>
        Virtual Coaching
        <small style={{ display: 'block', fontSize: '0.75em', marginTop: '0.25rem', opacity: 0.8 }}>
            Across Canada & India
        </small>
    </span>

                        </div>

                        <div className="trust-card">

                            <HeartHandshake
                                size={36}
                                strokeWidth={1.8}
                            />

                            <span>
        Personalized Plans
    </span>

                        </div>

                    </div>

                </div>

                {/* RIGHT CONTENT */}

                <div className="hero-image fade-right">

                    <div className="hero-photo image-card float">

                        <img
                            src={suchandra}
                            alt="Suchandra Das Ghosh - Founder of NutriBalance Wellness"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}