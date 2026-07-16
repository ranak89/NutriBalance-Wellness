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
        text: "Every recommendation is backed by science—not trends or quick fixes.",
        icon: <Brain size={34} strokeWidth={1.8} />,
    },
    {
        title: "Personalized Approach",
        text: "Every nutrition plan is tailored to your lifestyle, food preferences, culture, and long-term goals.",
        icon: <Leaf size={34} strokeWidth={1.8} />,
    },
    {
        title: "Family Friendly",
        text: "Practical nutrition strategies that fit real life, busy schedules, and family routines.",
        icon: <HeartHandshake size={34} strokeWidth={1.8} />,
    },
    {
        title: "Sustainable Results",
        text: "Small, consistent changes that help you build healthy habits for life.",
        icon: <Sparkles size={34} strokeWidth={1.8} />,
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
                            Helping Individuals & Families
                            <span>
Build Healthier Lives Through Personalized Nutrition
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
                            Helping people build healthier lifestyles without giving up the foods and traditions they love.
                            <p>
                                While I work with clients from all backgrounds,
                                I have a special passion for creating practical,
                                culturally inclusive nutrition strategies that
                                make healthy eating realistic, enjoyable, and sustainable.
                            </p>

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