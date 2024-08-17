import React, { useState } from "react";
import './PropertyCard.css'
// Initialize product details
const initializeProductDetails = () => {
  return [
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image1.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image2.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image2.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image2.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image2.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    {
      place: "Erode",
      Area: "unknown street",
      roomCount: 4,
      nearByLocation: "near to police station",
      image: "path/to/your/image2.jpg", // Replace with the actual image path
      sellerDetails: [
        {
          sellerName: "Prathap Venkatesan",
          sellerMobile: 1923321,
          sellerEmail: "example@gmail.com",
        },
      ],
    },
    // Add more initial products if needed
  ];
};

// User component
function User({
  image,
  place,
  area,
  roomCount,
  nearByLocation,
  sellerDetails,
}) {
  return (
    <div className="card">
      <div className="card-items">
        <div className="profile">
            <img src="prathap.jpg" alt="" className="Dp"/>
            <h3 className="ProfileName">{sellerDetails[0].sellerName}</h3>
        </div>
        <div className="image-div">
            <div className="part1">
            <img src="https://content.knightfrank.com/blog/2023/1/dcc9087d-9130-4720-9769-9e838fd4cd29/atlantiche.jpg" alt="" className="Hall" />
            </div>
            <div className="Part2M">
            <div className="part2">
          <img src="https://i2-prod.mylondon.news/incoming/article23105130.ece/ALTERNATES/s1200d/168289_WHotel-203000-London_IMG_05_0000jpeg.jpg" alt="property" className="bedRoom" />
          <img src="https://media.cntraveler.com/photos/552297f296bfd1f1482d9475/master/pass/shangrilasuite-london.jpg" alt="property" className="bedRoom" />
          
          </div>
            <div className="part2">
          <img src="https://i2-prod.mylondon.news/incoming/article23105130.ece/ALTERNATES/s1200d/168289_WHotel-203000-London_IMG_05_0000jpeg.jpg" alt="property" className="bedRoom" />
          <img src="https://media.cntraveler.com/photos/552297f296bfd1f1482d9475/master/pass/shangrilasuite-london.jpg" alt="property" className="bedRoom" />
          
          </div>
            </div>
            
        </div>
        <div className="details">
          <h3>Place: {place}</h3>
          <h3>Area: {area}</h3>
          <h3>Number of Bedrooms: {roomCount}</h3>
          <h3>Nearby Location: {nearByLocation}</h3>
        </div>
        <div className="buttons">
          <button className="More">More Details</button>
        </div>
      </div>
    </div>
  );
}

// PropertyCard component
export const PropertyCard = () => {
  const [productDetails] = useState(initializeProductDetails());

  return (
    <div className="Products">
      {productDetails.map((product, index) => (
        <User
          key={index}
          image={product.image}
          place={product.place}
          area={product.Area}
          roomCount={product.roomCount}
          nearByLocation={product.nearByLocation}
          sellerDetails={product.sellerDetails}
        />
      ))}
    </div>
  );
};
