import "../styles/finalcta.css";

export default function FinalCTA() {
    return (
        <section className="final-cta">

            <div className="container">

                <div className="final-cta-card">

                    <div className="final-cta-content">

            <span className="section-tag">
              YOUR HEALTH STARTS TODAY
            </span>

                        <h2>
                            Ready to Take the First Step
                            <span> Toward Better Health?</span>
                        </h2>

                        <p>
                            Build healthier habits without giving up the foods you love.
                            Schedule your complimentary Discovery Call and let's create
                            a nutrition plan that's realistic, sustainable, and designed
                            around your lifestyle.
                        </p>

                    </div>

                    <div className="final-cta-action">

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

            </div>

        </section>
    );
}