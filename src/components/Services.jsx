import "../styles/services.css";
import {

    Salad,

    Scale,

    Flower2

} from "lucide-react";

const services = [
    {
        icon: <Salad size={24} />,
        title: "1:1 Nutrition Coaching",
        description:
            "Personalized nutrition coaching tailored to your lifestyle, culture, and long-term health goals.",
        features: [
            "Personalized Nutrition Plan",
            "Weekly Accountability",
            "Habit Coaching",
            "WhatsApp Support",
        ],
    },
    {
        icon:<Scale size={24} />,
        title: "Weight Management",
        description:
            "Lose weight sustainably without restrictive diets or giving up your favorite South Asian foods.",
        features: [
            "Fat Loss Strategy",
            "Meal Planning",
            "Portion Guidance",
            "Mindset Coaching",
        ],
    },
    {
        icon: <Flower2 size={24} />,
        title: "Women's Wellness",
        description:
            "Nutrition support for busy women navigating hormonal health and everyday wellness.",
        features: [
            "Women's Health",
            "PCOS Support",
            "Postpartum Nutrition",
            "Family Nutrition",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="services section">

            <div className="container">

                <div className="services-heading">

          <span className="section-tag">
            OUR SERVICES
          </span>

                    <h2 className="section-title">
                        Nutrition Coaching
                        <span> Designed Around You</span>
                    </h2>

                    <p>
                        Every coaching program is personalized to help you build
                        healthier habits while still enjoying the foods you love.
                    </p>

                </div>

                <div className="services-grid">

                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="service-card card hover-card"
                        >

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p className="service-description">
                                {service.description}
                            </p>

                            <ul>

                                {service.features.map((feature) => (
                                    <li key={feature}>
                                        ✓ {feature}
                                    </li>
                                ))}

                            </ul>

                            <a
                                href="https://calendly.com/nutribalancewellness"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary pulse"
                            >
                                Book Free Consultation
                            </a>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}