import React from "react";
import { useLocation } from "react-router-dom";
import Promotion from "./Promotion";

const Featured = ({ data }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return null;
  }

  // Slice the data to only get the first 10 items
  const featuredItems = data.slice(0, 10);


  // Filter the data based on the conditions
  //const filteredItems = data.filter(item => item.isPopular && item.isOnSale && item.isInStock);

  // Randomly select 10 items from the filtered data
  //const featuredItems = filteredItems.sort(() => 0.5 - Math.random()).slice(0, 10);


  return (
    <>
      <div>
        <br />
        <h6 style={{ color: "#00365a" }}>
          <b>Step Up Shoes: Where Style Meets Durability</b>
        </h6>
        Explore our curated selection of stylish, durable footwear for every
        occasion. From casual comfort to chic elegance and sporty durability,
        find your perfect pair today and step into timeless style and unmatched
        quality. <br />
        <br />
      </div>

      <div style={{ textAlign: "center" }}>
        <h6
          style={{
            color: "#00365a",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <b>FEATURED PRODUCTS</b>
        </h6>
      </div>

      <div
        className="card-container d-flex flex-row justify-content-start"
        style={{ gap: "20px", padding: "20px" }}
      >
        {featuredItems.map((promo, index) => (
          <Promotion key={promo.id || index} data={promo} />
        ))}
      </div>
    </>
  );
};

export default Featured;
