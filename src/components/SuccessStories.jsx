import "../styles/successstories.css";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function SuccessStories() {
    return (
        <section id="success" className="success section">

            <div className="container">

                <div className="success-header">

          <span className="section-tag">
            CLIENT SUCCESS STORIES
          </span>

                    <h2 className="section-title">
                        Every Transformation
                        <span> Starts With One Step</span>
                    </h2>

                    <p>
                        NutriBalance Wellness is just beginning its journey.
                        Every client story starts with a single decision to
                        prioritize health, and yours could be featured here next.
                    </p>

                </div>

                <div className="stories-grid">

                    {/* Future Story */}

                    <div className="story-card">

                        <Quote
                            size={42}
                            strokeWidth={1.6}
                            className="story-icon"
                        />

                        <h3>
                            Your Success Story
                        </h3>

                        <p>
                            Imagine looking back a few months from now feeling
                            healthier, more energetic, and more confident.
                        </p>

                        <div className="coming-soon">

                            Coming Soon

                        </div>

                    </div>

                    {/* Google Reviews */}

                    <div className="story-card featured">

                        <Star
                            size={42}
                            strokeWidth={1.6}
                            className="story-icon"
                        />

                        <h3>
                            Help Build Our Community
                        </h3>

                        <p>
                            Your experience can inspire others who are looking
                            for sustainable nutrition coaching.
                        </p>

                        <a
                            href="https://share.google/IgWfpHNQuPGUBzSIe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            View Google Reviews
                        </a>

                    </div>

                </div>

                <div className="success-footer">

                    <h3>

                        Ready to begin your own success story?

                    </h3>

                    <p>

                        Let's create a personalized nutrition plan that
                        fits your lifestyle, culture, and long-term goals.

                    </p>

                    <a
                        href="https://calendly.com/nutribalancewellness"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary glow"
                    >

                        Book Your Discovery Call

                        <ArrowRight
                            size={18}
                        />

                    </a>

                </div>

            </div>

        </section>
    );
}