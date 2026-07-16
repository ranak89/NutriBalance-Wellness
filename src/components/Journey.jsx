import "../styles/journey.css";

const steps = [
    {
        number: "01",
        title: "Book Your Discovery Call",
        description:
            "Schedule a free consultation to discuss your health goals, challenges, and expectations.",
    },
    {
        number: "02",
        title: "Comprehensive Health Assessment",
        description:
            "We'll review your lifestyle, nutrition habits, medical history, and daily routine to understand your unique needs.",
    },
    {
        number: "03",
        title: "Receive Your Personalized Plan",
        description:
            "You'll receive a customized nutrition strategy designed around your lifestyle and South Asian food preferences.",
    },
    {
        number: "04",
        title: "Weekly Coaching & Accountability",
        description:
            "Stay motivated through regular coaching sessions, progress tracking, and WhatsApp support.",
    },
    {
        number: "05",
        title: "Build Lifelong Healthy Habits",
        description:
            "Create sustainable routines that help you maintain results long after the coaching program ends.",
    },
];

export default function Journey() {
    return (
        <section id="journey" className="journey section">
            <div className="container">

                <div className="journey-header">

          <span className="section-tag">
            YOUR TRANSFORMATION JOURNEY
          </span>

                    <h2 className="section-title">
                        Simple Steps.
                        <span> Lasting Results.</span>
                    </h2>

                    <p>
                        Nutrition coaching is more than a meal plan—it's a guided
                        journey toward sustainable health and confidence.
                    </p>

                </div>

                <div className="journey-timeline">

                    {steps.map((step, index) => (
                        <div className="journey-item" key={step.number}>

                            <div className="journey-circle">

                                {step.number}

                            </div>

                            <div className="journey-content">

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                            </div>

                            {index !== steps.length - 1 && (
                                <div className="journey-line"></div>
                            )}

                        </div>
                    ))}

                </div>

                <div className="journey-footer">

                    <h3>
                        Your healthier lifestyle starts with one conversation.
                    </h3>

                    <a
                        href="https://calendly.com/nutribalancewellness"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary glow"
                    >
                        Book Your Discovery Call
                    </a>

                </div>

            </div>
        </section>
    );
}