import "../styles/floating.css";
import { CalendarDays, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
    return (
        <div className="floating-dock">

            <a
                href="https://wa.me/14162762157?text=Hi%20Suchandra!%20I'm%20interested%20in%20nutrition%20coaching."
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item whatsapp"
            >
                <MessageCircle size={22} />

                <div className="dock-text">
                    <span>WhatsApp</span>
                    <small>Chat with us</small>
                </div>
            </a>

            <a
                href="https://calendly.com/nutribalancewellness"
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item calendly"
            >
                <CalendarDays size={22} />

                <div className="dock-text">
                    <span>Discovery Call</span>
                    <small>Book Free Session</small>
                </div>
            </a>

        </div>
    );
}