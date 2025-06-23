import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import "./PropertyDetails.css";

// ✅ Using images from public folder
const mockProperty = {
  id: 1,
  title: "2BHK Apartment in Bangalore",
  location: "Indiranagar, Bangalore",
  price: "25,000/month",
  image: "/st.jpg", // ✅ Local image from public folder
  description: "A spacious and well-ventilated 2BHK apartment near a metro station.",
  agent: {
    name: "Rahul Mehra",
    email: "rahul@agentmail.com",
    image: "/th.jpg", // ✅ Local agent image from public folder
  },
};

function PropertyDetails() {
  const { id } = useParams();
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="property-details-container">
      <div className="property-card">
        <img src={mockProperty.image} alt={mockProperty.title} className="property-image" />
        <div className="details-content">
          <h2>{mockProperty.price}</h2>
          <p className="location">{mockProperty.title} - {mockProperty.location}</p>
          <p className="desc">{mockProperty.description}</p>
          <div className="buttons">
            <button onClick={() => setShowVisitForm(true)}>Schedule Visit</button>
            <button onClick={() => setShowContactForm(true)}>Contact Agent</button>
          </div>
        </div>
      </div>

      {/* Visit Form Modal */}
      {showVisitForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowVisitForm(false)}>×</button>
            <img src={mockProperty.agent.image} alt="Agent" className="agent-img" />
            <h3>{mockProperty.agent.name}</h3>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      )}

      {/* Contact Agent Modal */}
      {showContactForm && (
        <div className="modal dark">
          <div className="modal-content small">
            <button className="close-btn" onClick={() => setShowContactForm(false)}>×</button>
            <h3>Contact Agent</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" defaultValue="johndoe@example.com" />
            <textarea defaultValue="I am interested in this property. Please contact me."></textarea>
            <button className="submit-btn">Send Message</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
