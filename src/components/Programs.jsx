import "../styles/programs.css";
import {
    Leaf,

    Sprout,

    Target,

    TrendingUp

} from "lucide-react";

const programs = [
    {
        title: "Nourish Foundations",
        badge: "Perfect to Begin",
        duration: "4 Weeks",
        icon:<Sprout size={36}/>,
        description:
            "Start building healthier habits with personalized nutrition guidance that fits your lifestyle and cultural food preferences.",
        features: [
            "Comprehensive Nutrition Assessment",
            "Personalized Nutrition Blueprint",
            "Weekly Accountability Check-ins",
            "Habit Coaching",
            "WhatsApp Support",
            "Healthy Recipe Suggestions",
        ],
    },
    {
        title: "NutriBalance Signature Program",
        badge: "Most Popular",
        duration: "12 Weeks",
        icon:<Leaf size={36}/>,
        description:
            "Our signature transformation program designed to help you create lasting lifestyle changes through science-backed coaching and ongoing support.",
        features: [
            "Complete Health Assessment",
            "Customized Meal Planning",
            "Weekly 1:1 Coaching Sessions",
            "Unlimited WhatsApp Support",
            "Progress Tracking",
            "Mindset & Habit Coaching",
            "Family-Friendly Nutrition Strategies",
            "South Asian Meal Guidance",
        ],
    },
    {
        title: "Thrive Together Membership",
        badge: "Long-Term Success",
        duration: "Monthly",
        icon:<TrendingUp size={36}/>,
        description:
            "Continue your wellness journey with ongoing coaching, accountability, and adjustments as your goals evolve.",
        features: [
            "Monthly Coaching Session",
            "Nutrition Plan Updates",
            "Lifestyle & Wellness Coaching",
            "WhatsApp Support",
            "Progress Reviews",
            "Long-Term Accountability",
        ],
    },
];

export default function Programs() {
    return (
        <section id="programs" className="programs section">
            <div className="container">

                <div className="programs-heading">
                    <span className="section-tag">PROGRAMS</span>

                    <h2 className="section-title">
                        Coaching Programs
                        <span> Designed For Your Success</span>
                    </h2>

                    <p>
                        Every program is personalized to your lifestyle,
                        health goals, and cultural food preferences.
                    </p>
                </div>

                <div className="program-grid">

                    {programs.map((program) => (
                        <div
                            className={`program-card card hover-card ${
                                program.title === "NutriBalance Signature Program"
                                    ? "featured-program"
                                    : ""
                            }`}
                            key={program.title}
                        >

                            <div className="program-badge">
                                {program.badge}
                            </div>

                            <div className="program-icon">
                                {program.icon}
                            </div>

                            <h3>{program.title}</h3>

                            <div className="duration">
                                {program.duration}
                            </div>

                            <p>
                                {program.description}
                            </p>

                            <ul>
                                {program.features.map((item) => (
                                    <li key={item}>
                                        ✓ {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://calendly.com/nutribalancewellness"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary pulse"
                            >
                                Book Your Discovery Call
                            </a>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}