import React, { useState } from 'react';

const PassengerRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle passenger registration (e.g., send data to API)
        console.log({ name, email, phone, age });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Passenger Registration</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default PassengerRegistration;
