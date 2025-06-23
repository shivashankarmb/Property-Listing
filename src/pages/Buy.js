import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import "./Buy.css";

const buyProperties = [
  {
    id: 101,
    title: "Luxury 3BHK in Mumbai",
    location: "Andheri West",
    price: "2.4 Cr",
    image: "/st.jpg",
  },
  {
    id: 102,
    title: "Modern Villa in Pune",
    location: "Baner",
    price: "1.8 Cr",
    image: "/th.jpg",
  },
  {
    id: 103,
    title: "Penthouse in Hyderabad",
    location: "Banjara Hills",
    price: "3.2 Cr",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 104,
    title: "Eco Home in Bangalore",
    location: "Whitefield",
    price: "1.6 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
];

function Buy() {
  const [filter, setFilter] = useState("");

  const filteredProperties = buyProperties.filter((property) =>
    property.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="buy-container">
      <h2>Properties for Sale</h2>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by location..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Buy;
