import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Flight {
  flightId: number;
  flightCode: string;
  departure: string;
  arrival: string;
  status: string;
}

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('/api/flights');
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flight-list">
      <h2>Available Flights</h2>
      <table>
        <thead>
          <tr>
            <th>Flight Code</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.flightId}>
              <td>{flight.flightCode}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;