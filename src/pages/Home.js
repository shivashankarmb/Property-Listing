import React from "react";
import PropertyCard from "../components/PropertyCard";
import "./Home.css"; // Styling for this page

const properties = [
  {
    id: 1,
    title: "2BHK Apartment in Bangalore",
    location: "Indiranagar",
    price: "75,000/month",
    image: "/st.jpg", // Use local image if preferred
  },
  {
    id: 2,
    title: "Villa in Goa",
    location: "Panaji",
    price: "1.5 Cr",
    image: "/th.jpg", // Use local image if preferred
  },
];

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Find Your Dream Property</h1>
          <p>Browse listings for rent or sale from trusted agents and owners.</p>
        </div>
      </div>

      {/* Property Listings */}
      <div className="property-grid">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
