import "./Pricing.css";

const plans = [
    {
        title: "Discovery Call",
        duration: "20 Minutes",
        price: "FREE",
        badge: "",
        description:
            "Let's discuss your health goals, lifestyle and determine if we're the right fit.",
        features: [
            "✔ Understand your health goals",
            "✔ Review current challenges",
            "✔ Ask any nutrition questions",
            "✔ No obligation",
        ],
        button: "Book FREE Call",
    },

    {
        title: "Nutrition Coaching",
        duration: "30 Minutes",
        price: "$45",
        badge: "",
        description:
            "A personalized one-on-one coaching session focused on your specific nutrition needs.",
        features: [
            "✔ Personalized recommendations",
            "✔ Progress review",
            "✔ Goal setting",
            "✔ Action plan",
        ],
        button: "Book Session",
    },

    {
        title: "Transformation Package",
        duration: "4 Coaching Sessions",
        price: "$170",
        badge: "MOST POPULAR",
        featured: true,
        description:
            "Perfect if you're serious about creating sustainable habits and lasting results.",
        features: [
            "✔ FREE Discovery Call",
            "✔ Four Coaching Sessions",
            "✔ WhatsApp Support",
            "✔ Personalized Nutrition Guidance",
            "✔ Accountability",
        ],
        button: "Start Transformation",
    },

    {
        title: "Premium Coaching",
        duration: "12 Coaching Sessions",
        price: "$450",
        badge: "",
        description:
            "Comprehensive nutrition coaching with ongoing guidance and accountability.",
        features: [
            "✔ FREE Discovery Call",
            "✔ 12 Coaching Sessions",
            "✔ Priority Support",
            "✔ Meal Planning",
            "✔ Habit Coaching",
        ],
        button: "Book Premium",
    },
];

export default function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <div className="container">

        <span className="section-tag">
          Coaching Plans
        </span>

                <h2>
                    Simple Pricing.
                    <br />
                    Personalized Nutrition.
                </h2>

                <p className="pricing-intro">
                    Every plan is tailored to your goals, lifestyle, food preferences and
                    long-term health. Start with a FREE discovery call and choose the
                    coaching option that's right for you.
                </p>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card ${
                                plan.featured ? "featured" : ""
                            }`}
                        >
                            {plan.badge && (
                                <div className="badge">
                                    {plan.badge}
                                </div>
                            )}

                            <h3>{plan.title}</h3>

                            <div className="duration">
                                {plan.duration}
                            </div>

                            <div className="price">
                                {plan.price}
                            </div>

                            <p>{plan.description}</p>

                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>

                            <a
                                href="https://nutribalancewellness.zohobookings.ca/nutribalancewellness"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pricing-btn"
                            >
                                {plan.button}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}