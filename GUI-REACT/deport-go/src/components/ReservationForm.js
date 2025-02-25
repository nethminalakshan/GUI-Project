import React from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
    return (
        <div className="reservation-container">
            <h1>The simplest way to book your bus tickets in Sri Lanka</h1>
            <form className="reservation-form">
                <div className="form-group">
                    <label htmlFor="from">Departure Station</label>
                    <select name="from" id="from" required>
                        <option value="" disabled selected>Enter your departure station</option>
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
                </div>
                
                <div className="form-group">
                    <label htmlFor="to">Arrival Station</label>
                    <select name="to" id="to" required>
                        <option value="" disabled selected>Enter your arrival station</option>
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
                </div>
                
                <div className="form-group">
                    <label htmlFor="travel-date">Travel Date</label>
                    <input type="date" name="travel-date" id="travel-date" required />
                </div>
                
                <button type="submit">Find Buses</button>
            </form>
        </div>
    );
};

export default ReservationForm;