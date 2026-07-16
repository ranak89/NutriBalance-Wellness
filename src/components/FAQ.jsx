import { useState } from "react";
import "../styles/faq.css";

const faqs = [
    {
        question: "Will I have to give up the foods I love?",
        answer:
            "No. Healthy eating shouldn't feel restrictive. Together, we'll create a personalized nutrition plan that includes the foods you enjoy while supporting your health goals through balance, mindful choices, and sustainable habits.",
    },
    {
        question: "Do you offer virtual coaching?",
        answer:
            "Yes. All coaching sessions are conducted virtually, allowing clients across Canada and India to receive personalized nutrition guidance from the comfort of their homes.",
    },
    {
        question: "Can you help with weight loss?",
        answer:
            "Yes. Whether your goal is sustainable weight loss, improved energy, healthier eating habits, or long-term wellness, your coaching plan will be tailored specifically to you.",
    },
    {
        question: "Do you provide meal plans?",
        answer:
            "Yes. Every coaching program includes personalized nutrition recommendations and meal guidance designed around your goals, preferences, schedule, and cultural food choices.",
    },
    {
        question: "How long are the coaching programs?",
        answer:
            "Program duration depends on your individual goals. During your Discovery Call, we'll discuss your needs and recommend the coaching plan that's the best fit for you.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply book a free Discovery Call. We'll discuss your goals, answer your questions, and determine the best coaching program for your journey.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="faq section">

            <div className="container">

                <div className="faq-header">

          <span className="section-tag">
            FREQUENTLY ASKED QUESTIONS
          </span>

                    <h2 className="section-title">
                        Everything You Need
                        <span> To Know Before We Begin</span>
                    </h2>

                    <p>
                        Here are answers to some of the most common questions
                        about nutrition coaching.
                    </p>

                </div>

                <div className="faq-list">

                    {faqs.map((faq, index) => (

                        <div
                            key={faq.question}
                            className={`faq-item ${
                                open === index ? "active" : ""
                            }`}
                        >

                            <button
                                className="faq-question"
                                onClick={() =>
                                    setOpen(open === index ? -1 : index)
                                }
                            >

                                <span>{faq.question}</span>

                                <span className="faq-icon">

                  {open === index ? "−" : "+"}

                </span>

                            </button>

                            <div
                                className={`faq-answer ${
                                    open === index ? "show" : ""
                                }`}
                            >

                                <p>{faq.answer}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}