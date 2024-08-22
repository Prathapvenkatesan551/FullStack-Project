import React, { useState } from "react";
import { FilterProperty, PropertyCard } from "./PropertyCard";
import './Home.css';

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState("None");
  const [selectedRoom, setSelectedRoom] = useState("None");
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
    setIsFilterApplied(true);

  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    setIsFilterApplied(true);
  };

  return (
    <div className="Hcont">
      <div className="filters">
        <div>
          <label>Filter by place</label>
          <select
            name="Place"
            id="place"
            value={selectedPlace}
            onChange={handlePlaceChange}
          >
            <option value="None">None</option>
            <option value="Chennai">Chennai</option>
            <option value="Kovi">Kovi</option>
            <option value="Madurai">Madurai</option>
            <option value="Erode">Erode</option>
          </select>
        </div>
        <div>
          <label>Filter by Rooms</label>
          <select
            name="Rooms"
            id="rooms"
            value={selectedRoom}
            onChange={handleRoomChange}
          >
            <option value="None">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

     {!isFilterApplied &&<PropertyCard />}
     {isFilterApplied &&
      <FilterProperty placeF={selectedPlace} roomF={selectedRoom} />}
      
    </div>
  );
};

export default Home;
