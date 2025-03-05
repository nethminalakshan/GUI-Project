import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './2-BusCards.css'; // Import the CSS file
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

const BusCard = ({ bus }) => {
  const [timeLeft, setTimeLeft] = useState(parseTime(bus.countdownTime)); // Convert time to seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Function to format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
      <div className="bus-card">
          {/* Left Section */}
          <div className="left-section">
              <h3>{bus.name}</h3>
              <h2>{bus.route}</h2>
              <div className="amenities">
                  {bus.amenities.map((amenity, index) => (
                      <span key={index}>{amenity}</span>
                  ))}
              </div>
              <div className="details">
                  <span>Departs: {bus.departure}</span>
                  <span>Arrives: {bus.arrival}</span>
                  <span>Duration: {bus.duration}</span>
              </div>
          </div>
  
          {/* Right Section */}
          <div className="right-section">
              <div className="pricing">
                  <p>for as low as</p>
                  <h1>{bus.price} LKR</h1>
                  <p>PER SEAT</p>
              </div>
              <button className="book-button">Book My Seats</button>
              <div className="countdown-timer">
                  Time Left: {formatTime(timeLeft)}
              </div>
          </div>
      </div>
  );
};



// Helper function to convert "HH:MM:SS" to seconds
const parseTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
};

const BusCardContainer = () => {
    const buses = [
        {
            id: 1,
            name: 'Diniduru Super Line - Luxury 37 Seater',
            route: 'Vavuniya - Anuradhapura - Colombo (03:40 PM)',
            amenities: ['✔ Adjustable Seats', '✔ Free WiFi', '✔ Air Conditioned'],
            departure: 'Vavuniya 03:40 PM',
            arrival: 'Pettah Bus Stand 09:00 PM',
            duration: 'Approx 5h 20m',
            price: '1,580',
            seatsAvailable: 1,
            countdownId: 'countdown1',
            countdownTime: '3:45:47'
        },
        {
            id: 2,
            name: 'NCG Express - Luxury 49 Seater',
            route: 'Makumbura - Badulla (05:15 PM)',
            amenities: ['✔ Air Conditioned', '✔ Large Windows', '✔ Footrest Seats'],
            departure: 'Makumbura 05:15 PM',
            arrival: 'Badulla 09:30 PM',
            duration: 'Approx 4h',
            price: '2,130',
            seatsAvailable: 0,
            countdownId: 'countdown2',
            countdownTime: '4:59:29'
        },
        {
          id: 3,
          name: 'SuperLine Express - Semi Luxury',
          route: 'Colombo - Kandy (06:30 AM)',
          amenities: ['✔ Reclining Seats', '✔ Air Conditioned', '✔ Charging Ports'],
          departure: 'Colombo 06:30 AM',
          arrival: 'Kandy 09:00 AM',
          duration: 'Approx 2h 30m',
          price: '1,200',
          seatsAvailable: 5,
          countdownId: 'countdown3',
          countdownTime: '2:30:15'
      },
      {
          id: 4,
          name: 'Ebert Express - VIP 30 Seater',
          route: 'Matara - Colombo (07:45 AM)',
          amenities: ['✔ Luxury Seats', '✔ TV Entertainment', '✔ Snacks & Water'],
          departure: 'Matara 07:45 AM',
          arrival: 'Colombo 11:30 AM',
          duration: 'Approx 3h 45m',
          price: '1,750',
          seatsAvailable: 3,
          countdownId: 'countdown4',
          countdownTime: '3:10:20'
      },
      {
          id: 5,
          name: 'SilverLine Travels - 45 Seater',
          route: 'Jaffna - Colombo (08:00 PM)',
          amenities: ['✔ Adjustable Seats', '✔ Free WiFi', '✔ USB Charging'],
          departure: 'Jaffna 08:00 PM',
          arrival: 'Colombo 05:30 AM',
          duration: 'Approx 9h 30m',
          price: '2,500',
          seatsAvailable: 7,
          countdownId: 'countdown5',
          countdownTime: '6:25:10'
      },
      {
          id: 6,
          name: 'Royal Express - Luxury 40 Seater',
          route: 'Galle - Colombo (06:00 PM)',
          amenities: ['✔ Comfortable Seats', '✔ Air Conditioned', '✔ Entertainment'],
          departure: 'Galle 06:00 PM',
          arrival: 'Colombo 09:00 PM',
          duration: 'Approx 3h',
          price: '1,600',
          seatsAvailable: 4,
          countdownId: 'countdown6',
          countdownTime: '4:15:30'
      },
      {
          id: 7,
          name: 'Greenline Express - Sleeper Coach',
          route: 'Colombo - Trincomalee (10:00 PM)',
          amenities: ['✔ Sleeper Beds', '✔ Free WiFi', '✔ AC & Charging Ports'],
          departure: 'Colombo 10:00 PM',
          arrival: 'Trincomalee 05:00 AM',
          duration: 'Approx 7h',
          price: '3,200',
          seatsAvailable: 2,
          countdownId: 'countdown7',
          countdownTime: '8:45:20'
      },
      {
          id: 8,
          name: 'SunExpress - Deluxe 42 Seater',
          route: 'Colombo - Kurunegala (07:00 AM)',
          amenities: ['✔ Air Conditioned', '✔ Comfortable Seats', '✔ Entertainment'],
          departure: 'Colombo 07:00 AM',
          arrival: 'Kurunegala 09:30 AM',
          duration: 'Approx 2h 30m',
          price: '1,100',
          seatsAvailable: 6,
          countdownId: 'countdown8',
          countdownTime: '3:00:00'
      },
      {
          id: 9,
          name: 'BlueLine Premium - 36 Seater',
          route: 'Colombo - Nuwara Eliya (09:30 AM)',
          amenities: ['✔ Reclining Seats', '✔ Free WiFi', '✔ Snacks'],
          departure: 'Colombo 09:30 AM',
          arrival: 'Nuwara Eliya 01:30 PM',
          duration: 'Approx 4h',
          price: '1,900',
          seatsAvailable: 3,
          countdownId: 'countdown9',
          countdownTime: '4:45:10'
      }
    ];

    return (
        <div className="bus-card-container">
            {buses.map((bus) => (
                <BusCard key={bus.id} bus={bus} />
            ))}
        </div>
    );
};

export default BusCardContainer;