import "../styles/about.css";
import suchandra from "../assets/suchandra.png";
import {
    Brain,
    Leaf,
    HeartHandshake,
    Sparkles
} from "lucide-react";

const values = [
    {
        title: "Evidence-Based",
        text: "Every recommendation is backed by science—not social media trends.",
        icon:<Brain size={34} strokeWidth={1.8}/>,
    },
    {
        title: "Culture First",
        text: "Enjoy traditional South Asian meals while improving your health.",
        icon:<Leaf size={34} strokeWidth={1.8}/>,
    },
    {
        title: "Family Friendly",
        text: "Nutrition strategies that fit real family life and busy schedules.",
        icon:<HeartHandshake size={34} strokeWidth={1.8}/>,
    },
    {
        title: "Sustainable",
        text: "Small habits that create lifelong transformation.",
        icon:<Sparkles size={34} strokeWidth={1.8}/>,
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="about section"
        >
            <div className="container">

                <div className="about-grid">

                    {/* LEFT COLUMN */}

                    <div className="about-left fade-left">

                        <div className="coach-card image-card">

                            <img
                                src={suchandra}
                                alt="Suchandra Das Ghosh"
                            />

                            <div className="coach-info">

                                <h3>
                                    Suchandra Das Ghosh
                                </h3>

                                <p>
                                    Founder
                                </p>

                                <span>
                  PN1 Certified Nutrition Coach
                </span>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}

                    <div className="about-right fade-right">

            <span className="section-tag">
              Meet Your Coach
            </span>

                        <h2 className="section-title">
                            Helping South Asian Women
                            <span>
                Live Healthier Without Giving Up Their Culture
              </span>
                        </h2>

                        <p className="lead-text">
                            Growing up in a South Asian household taught me that food is
                            much more than nutrition.
                        </p>

                        <p>
                            It represents family, celebration, tradition,
                            comfort and connection.
                        </p>

                        <p>
                            After becoming a PN1 Certified Nutrition Coach,
                            I founded <strong>NutriBalance Wellness</strong>
                            with one mission:
                        </p>

                        <blockquote>

                            Helping women improve their health without asking
                            them to give up the foods they love.

                        </blockquote>

                        <p>
                            Whether you're trying to lose weight, improve your
                            energy, manage hormonal health, or simply build
                            healthier habits, we'll work together to create a
                            realistic plan that fits your lifestyle.
                        </p>

                        <p>
                            No crash diets.
                            No guilt.
                            No unrealistic expectations.
                        </p>

                        <p>
                            Just sustainable nutrition, accountability,
                            and lifelong healthy habits.
                        </p>
                        <div className="values-grid">

                            {values.map((value) => (

                                <div
                                    className="value-card hover-card"
                                    key={value.title}
                                >

                                    <div className="value-icon">
                                        {value.icon}
                                    </div>

                                    <h3>
                                        {value.title}
                                    </h3>

                                    <p>
                                        {value.text}
                                    </p>

                                </div>

                            ))}

                        </div>

                        <div className="coach-philosophy">

                            <h3>
                                My Coaching Philosophy
                            </h3>

                            <p>
                                I believe good nutrition should feel empowering,
                                not restrictive.
                            </p>

                            <p>
                                Together we'll build practical habits that fit
                                your schedule, your culture, your family,
                                and your long-term goals.
                            </p>

                        </div>

                        <div className="about-cta">

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
                                View Coaching Programs
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}