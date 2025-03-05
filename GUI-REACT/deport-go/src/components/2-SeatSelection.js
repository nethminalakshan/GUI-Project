import React, { useState } from "react";
import axios from "axios"; // Import axios for API requests
import "./2-SeatSelection.css";
import Footer from "./Footer";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerName, setPassengerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [boardingPlace, setBoardingPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  const seatPrice = 500;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const totalPrice = selectedSeats.length * seatPrice;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!passengerName || !mobileNumber || !boardingPlace || !destinationPlace) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/book-seat", {
      passengerName,
      mobileNumber,
      email,
      boardingPlace,
      destinationPlace,
      selectedSeats,
      totalPrice,
      });

      if (response.status === 201) {
      alert("Booking successful!");
      window.location.href = "/"; // Redirect to home page
      }
    } catch (error) {
      console.error("Error booking seat:", error);
      alert("Failed to book seat. Try again later.");
    }
    };

  return (
    <div className="containerseat">
      <div className="headline1">Select Seats & Fill Form</div>

      <div className="seat-selection">
        <div className="driver"></div>
        <img src="src/journeys/vecteezy_steering-wheel-silhouette.png" alt="Steering Wheel" />
      </div>
      <div className="seats">
  {[...Array(54)].map((_, index) => {
    const seatNumber = index + 1;
    const isGap = [3, 9, 15, 21, 27, 33, 39, 43, 44, 45].includes(seatNumber); // Define where gaps should be

    if (isGap) {
      return <div key={`gap-${seatNumber}`} style={{ width: "50px" }}></div>;
    }

    // Calculate the correct seat number by subtracting the number of gaps before this seat
    const gapsBefore = [3, 9, 15, 21, 27, 33, 39, 43, 44, 45].filter((gap) => gap < seatNumber).length;
    const correctedSeatNumber = seatNumber - gapsBefore;

    const isBooked = correctedSeatNumber <= 7; // Define which seats are booked
    const seatClass = isBooked ? "booked" : selectedSeats.includes(correctedSeatNumber) ? "selected" : "available";

    return (
      <div
        key={correctedSeatNumber}
        className={`seat ${seatClass}`}
        onClick={() => handleSeatClick(correctedSeatNumber)}
      >
        {correctedSeatNumber}
      </div>
    );
  })}
</div>

      <form className="seat-details" onSubmit={handleSubmit}>
        <label>Passenger Name</label>
        <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} required />

        <label>Mobile Number</label>
        <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />

        <label>Email (Optional)</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Boarding Place</label>
        <select value={boardingPlace} onChange={(e) => setBoardingPlace(e.target.value)} required>
          <option value="" disabled>Select your boarding point</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Batticaloa">Batticaloa</option>
          <option value="Ampara">Ampara</option>
          <option value="Trincomalee">Trincomalee</option>
          <option value="Mannar">Mannar</option>
          <option value="Hatton">Hatton</option>
          <option value="Badulla">Badulla</option>
          <option value="Matara">Matara</option>
          <option value="Anuradhapura">Anuradhapura</option>
          <option value="Polannaruwa">Polannaruwa</option>
          <option value="Hambantota">Hambantota</option>
          <option value="Kilinochi">Kilinochi</option>
          <option value="Vavuniya">Vavuniya</option>
          <option value="Mullaiththivu">Mullaiththivu</option>
          <option value="Gampaha">Gampaha</option>
          <option value="Kalutara">Kalutara</option>
          <option value="Galle">Galle</option>
          <option value="Matale">Matale</option>
          <option value="Nuwara Eliya">Nuwara Eliya</option>
          <option value="Moneragala">Moneragala</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Ratnapura">Ratnapura</option>
          <option value="Kuruenegala">Kuruenegala</option>
          <option value="Puttalam">Puttalam</option>
          <option value="Colombo">Colombo</option>
        </select>

        <label>Destination Place</label>
        <select value={destinationPlace} onChange={(e) => setDestinationPlace(e.target.value)} required>
          <option value="" disabled>Select your destination point</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Batticaloa">Batticaloa</option>
          <option value="Ampara">Ampara</option>
          <option value="Trincomalee">Trincomalee</option>
          <option value="Mannar">Mannar</option>
          <option value="Hatton">Hatton</option>
          <option value="Badulla">Badulla</option>
          <option value="Matara">Matara</option>
          <option value="Anuradhapura">Anuradhapura</option>
          <option value="Polannaruwa">Polannaruwa</option>
          <option value="Hambantota">Hambantota</option>
          <option value="Kilinochi">Kilinochi</option>
          <option value="Vavuniya">Vavuniya</option>
          <option value="Mullaiththivu">Mullaiththivu</option>
          <option value="Gampaha">Gampaha</option>
          <option value="Kalutara">Kalutara</option>
          <option value="Galle">Galle</option>
          <option value="Matale">Matale</option>
          <option value="Nuwara Eliya">Nuwara Eliya</option>
          <option value="Moneragala">Moneragala</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Ratnapura">Ratnapura</option>
          <option value="Kuruenegala">Kuruenegala</option>
          <option value="Puttalam">Puttalam</option>
          <option value="Colombo">Colombo</option>
        </select>

        <div className="total-price">
          <strong>Total Price:</strong> LKR {totalPrice.toFixed(2)}
        </div>

        <button type="submit">Continue to pay</button>
      </form>
    </div>
  );
};

export default SeatSelection;
