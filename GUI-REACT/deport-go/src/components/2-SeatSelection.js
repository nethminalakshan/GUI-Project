import React from "react";
import "./2-SeatSelection.css";

const SeatSelection = () => {
  return (
    <div className="container">
      <div className="headline">Select Seats & Fill Form</div>

      <div className="seat-selection">
        <div className="driver"></div>
        <img src="src/journeys/vecteezy_steering-wheel-silhouette.png" alt="Steering Wheel" />
      </div>
      <div className="seats">
        <div className="seat booked">1</div>
        <div className="seat booked">2</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat booked">3</div>
        <div className="seat booked">4</div>
        <div className="seat booked">5</div>
        <div className="seat booked">6</div>
        <div className="seat booked">7</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">8</div>
        <div className="seat available">9</div>
        <div className="seat available">10</div>
        <div className="seat available">11</div>
        <div className="seat available">12</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">13</div>
        <div className="seat available">14</div>
        <div className="seat available">15</div>
        <div className="seat available">16</div>
        <div className="seat available">17</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">18</div>
        <div className="seat available">19</div>
        <div className="seat available">20</div>
        <div className="seat available">21</div>
        <div className="seat available">22</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">23</div>
        <div className="seat available">24</div>
        <div className="seat available">25</div>
        <div className="seat available">26</div>
        <div className="seat available">27</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">28</div>
        <div className="seat available">29</div>
        <div className="seat available">30</div>
        <div className="seat available">31</div>
        <div className="seat available">32</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">33</div>
        <div className="seat available">34</div>
        <div className="seat available">35</div>
        <div className="seat available">36</div>
        <div className="seat available">37</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">38</div>
        <div className="seat available">39</div>
        <div className="seat available">40</div>
        <div className="seat available">41</div>
        <div className="seat available">42</div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">43</div>
        <div className="seat available">44</div>
        <div className="seat available">45</div>
        <div style={{ width: "50px" }}></div>
        <div style={{ width: "50px" }}></div>
        <div style={{ width: "50px" }}></div>
        <div className="seat available">46</div>
        <div className="seat available">47</div>
        <div className="seat available">48</div>
        <div className="seat available">49</div>
        <div className="seat available">50</div>
        <div className="seat available">51</div>
        <div className="seat available">52</div>
        <div className="seat available">53</div>
        <div className="seat available">54</div>
      </div>
      <div className="seat-details">
        <label htmlFor="passenger-name">Passenger Name</label>
        <input type="text" id="passenger-name" placeholder="Enter passenger name" required />

        <label htmlFor="mobile-number">Mobile Number</label>
        <input type="tel" id="mobile-number" placeholder="071 234 5678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />

        <label htmlFor="email">Email (Optional)</label>
        <input type="email" id="email" placeholder="user@domain.com" />

        <label htmlFor="boarding-place">Boarding Place</label>
        <select id="boarding-place" required>
          <option value="" disabled selected>Select your boarding point</option>
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

        <label htmlFor="destination-place">Destination Place</label>
        <select id="destination-place" required>
          <option value="" disabled selected>Select your destination point</option>
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

        <button type="submit">Continue to pay</button>
      </div>
    <div className="legend">
        <div className="available"><span></span> Available</div>
        <div className="booked"><span></span> Already Booked</div>
        <div className="in-progress"><span></span> Booking in Progress</div>
      </div>
    </div>
    
  );
};

export default SeatSelection;

