import "../styles/trusted.css";
import {

    Award,

    Leaf,

    Laptop,

    HeartHandshake

} from "lucide-react";

const items = [
    {
        icon:<Award size={36}/>,
        title: "PN1 Certified",
        subtitle: "Evidence-Based Coaching",
    },
    {
        icon: <Leaf size={36} />,
        title: "Culturally Inclusive",
        subtitle: "Nutrition That Fits Your Lifestyle",
    },
    {
        icon:<Laptop size={36}/>,
        title: "Virtual Coaching",
        subtitle: "Canada & India",
    },
    {
        icon:<HeartHandshake size={36}/>,
        title: "Personalized Plans",
        subtitle: "Built Around You",
    },
];

export default function Trusted() {
    return (
        <section className="trusted section">
            <div className="container">

                <div className="trusted-heading">

          <span className="section-tag">
            WHY CHOOSE NUTRIBALANCE
          </span>

                    <h2 className="section-title">
                        Trusted Nutrition Coaching
                        <span> Rooted in Science & Culture</span>
                    </h2>

                    <p>
                        Every recommendation is tailored to your unique goals,
                        lifestyle, preferences, and daily routine—making healthy
                        eating practical, enjoyable, and sustainable.
                    </p>

                </div>

                <div className="trusted-grid">

                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="trusted-card card hover-card fade-up"
                        >

                            <div className="trusted-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.subtitle}</p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}