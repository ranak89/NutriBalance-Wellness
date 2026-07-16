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

                    <h1 className="section-title hero-title">
                        Evidence-Based Nutrition
                        <span> for South Asian Women</span>
                    </h1>

                    <p className="hero-description">
                        Helping South Asian women build healthier lives without
                        giving up the foods they love.
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
        Canada & India
    </span>

                        </div>

                        <div className="trust-card">

                            <HeartHandshake
                                size={36}
                                strokeWidth={1.8}
                            />

                            <span>
        Personalized Coaching
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