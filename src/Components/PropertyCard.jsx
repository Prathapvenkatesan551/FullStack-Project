import React, { useState, useEffect } from "react";
import "./PropertyCard.css";
import {
  DeleteProperty,
  UpdateProperty,
  GetProperties,
} from "../services/SignupService";
import { useLocation } from "react-router-dom";

function User({
  place,
  area,
  roomCount,
  nearByLocation,
  sellerName,
  propertyId,
  sellerEmail,
  sellerMobile,
  sellerAddress,
  cost,
}) {
  const location = useLocation();
  const isSalePage = location.pathname === "/ScaleProperty";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [updatedPlace, setUpdatedPlace] = useState(place);
  const [updatedArea, setUpdatedArea] = useState(area);
  const [updatedRoomCount, setUpdatedRoomCount] = useState(roomCount);
  const [updatedNearbyLocation, setUpdatedNearbyLocation] =
    useState(nearByLocation);

  const handleDelete = (productId) => {
    console.log("Deleting property with ID:", productId);
    DeleteProperty(productId)
      .then((response) => {
        console.log("Property deleted successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
      });
  };

  const handleUpdate = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleMoreDetails = () => {
    setIsDetailModalOpen(true); // Open the details modal
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false); // Close the details modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const Uproperty = {
      place: updatedPlace,
      location: updatedNearbyLocation,
      area: updatedArea,
      numberOfRooms: updatedRoomCount,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      sellerMobileNumber: sellerMobile,
      sellerAddress: sellerAddress,
      Cost: cost,
    };

    UpdateProperty(propertyId, Uproperty)
      .then((response) => {
        console.log("Property updated successfully:", response.data);
        closeModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating property:", error);
      });
  };

  const handleBooking=()=>{
    window.location.href = '/Booking';
  }
  return (
    <div className="card">
      <div className="card-items">
        <div className="profile">
          <img src="prathap.jpg" alt="" className="Dp" />
          <h3 className="ProfileName">{sellerName}</h3>
        </div>
        <div className="image-div">
          <div className="part1">
            <img
              src="https://content.knightfrank.com/blog/2023/1/dcc9087d-9130-4720-9769-9e838fd4cd29/atlantiche.jpg"
              alt=""
              className="Hall"
            />
          </div>
          <div className="Part2M">
            <div className="part2">
              <img
                src="https://i2-prod.mylondon.news/incoming/article23105130.ece/ALTERNATES/s1200d/168289_WHotel-203000-London_IMG_05_0000jpeg.jpg"
                alt="property"
                className="bedRoom"
              />
              <img
                src="https://media.cntraveler.com/photos/552297f296bfd1f1482d9475/master/pass/shangrilasuite-london.jpg"
                alt="property"
                className="bedRoom"
              />
            </div>
            <div className="part2">
              <img
                src="https://i2-prod.mylondon.news/incoming/article23105130.ece/ALTERNATES/s1200d/168289_WHotel-203000-London_IMG_05_0000jpeg.jpg"
                alt="property"
                className="bedRoom"
              />
              <img
                src="https://media.cntraveler.com/photos/552297f296bfd1f1482d9475/master/pass/shangrilasuite-london.jpg"
                alt="property"
                className="bedRoom"
              />
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
          {!isSalePage && (
            <button className="More" onClick={handleMoreDetails}>
              More Details
            </button>
          )}
          {isSalePage && (
            <button onClick={() => handleDelete(propertyId)} className="delete">Delete</button>
          )}
          {isSalePage && <button onClick={handleUpdate} className="update">Update</button>}
        </div>
      </div>

      {/* Modal for updating */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <h2 className="Pheading">Update Property</h2>
            {/* Form for updating property */}
            <form onSubmit={handleFormSubmit} className="popupForm">
              <div className="inp">
                <label>Place: </label>
                <input
                  type="text"
                  name="place"
                  value={updatedPlace}
                  onChange={(e) => setUpdatedPlace(e.target.value)}
                />
              </div>
              <div className="inp">
                <label>Area: </label>
                <input
                  type="text"
                  name="area"
                  value={updatedArea}
                  onChange={(e) => setUpdatedArea(e.target.value)}
                />
              </div>
              <div className="inp">
                <label>Number of Bedrooms: </label>
                <input
                  type="number"
                  name="roomCount"
                  value={updatedRoomCount}
                  onChange={(e) => setUpdatedRoomCount(e.target.value)}
                />
              </div>
              <div className="inp">
                <label>Nearby Location: </label>
                <input
                  type="text"
                  name="nearByLocation"
                  value={updatedNearbyLocation}
                  onChange={(e) => setUpdatedNearbyLocation(e.target.value)}
                />
              </div>
              <button type="submit" className="save">Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for more details */}
      {isDetailModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <h2 className="Pheading">Property Owner  Details</h2>
            <table>
              <tr>
                <td>Seller Name</td>
                <td>{sellerName}</td>
              </tr>
              <tr>
                <td>Seller Email</td>
                <td>{sellerEmail}</td>
              </tr>
              <tr>
                <td>Seller Mobile Number</td>
                <td>{sellerMobile}</td>
              </tr>
              <tr>
                <td>Seller Address</td>
                <td>{sellerAddress}</td>
              </tr>
            </table>
            <h2 className="Pheading">Property Details</h2>
            <table>
              <tr>
                <td>Property Place</td>
                <td>{place}</td>
              </tr>
              <tr>
                <td>Property Area</td>
                <td>{area}</td>
              </tr>
              <tr>
                <td>Near By Location </td>
                <td>{nearByLocation}</td>
              </tr>
              <tr>
                <td>No Of Bed Rooms</td>
                <td>{roomCount}</td>
              </tr>
              <tr>
                <td>Hall</td>
                <td> 1 </td>
              </tr>
              <tr>
                <td>Dining Hall</td>
                <td> 1 </td>
              </tr>
              <tr>
                <td>Dining Hall</td>
                <td> 1 </td>
              </tr>
              <tr>
                <td>Rest Rooms</td>
                <td> 4 </td>
              </tr>
            </table>

            <button className="Booking" onClick={handleBooking}>Book Now</button>
            <button className="close-pop" onClick={closeDetailModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export const PropertyCard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    GetProperties()
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, []);

  return (
    <div className="Products">
      {properties.map((product, index) => (
        <User
          key={index}
          place={product.place}
          area={product.area}
          roomCount={product.numberOfRooms}
          nearByLocation={product.location}
          sellerName={product.sellerName}
          propertyId={product.productId}
          sellerEmail={product.sellerEmail}
          sellerMobile={product.sellerMobileNumber}
          sellerAddress={product.sellerAddress}
          cost={product.Cost}
        />
      ))}
    </div>
  );
};

// MyProperty component
export const MyProperty = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("prathap");

  useEffect(() => {
    GetProperties()
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, []);

  const filteredProperties = properties.filter((product) =>
    product.sellerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Products">
      {filteredProperties.map((product, index) => (
        <User
          key={index}
          place={product.place}
          area={product.area}
          roomCount={product.numberOfRooms}
          nearByLocation={product.location}
          sellerName={product.sellerName}
          propertyId={product.productId}
          sellerEmail={product.sellerEmail}
          sellerMobile={product.sellerMobileNumber}
          sellerAddress={product.sellerAddress}
          cost={product.Cost}
        />
      ))}
    </div>
  );
};

export default User;
