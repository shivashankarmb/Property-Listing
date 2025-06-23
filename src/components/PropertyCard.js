import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css"; 

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h2 className="property-title">{property.title}</h2>
        <p className="property-location">{property.location}</p>
        <p className="property-price">₹{property.price}</p>
        <Link to={`/property/${property.id}`}>
          <button className="view-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
