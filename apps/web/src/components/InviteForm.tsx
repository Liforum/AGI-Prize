import React, { useState } from 'react';

const InviteForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            // Simulate an API call
            console.log('Invite sent to:', email);
            setSuccess(true);
            setError('');
            setEmail('');
        } else {
            setError('Please enter a valid email address.');
            setSuccess(false);
        }
    };

    return (
        <div>
            <h2>Invite a Friend</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
                <button type="submit">Send Invite</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Invite sent successfully!</p>}
        </div>
    );
};

export default InviteForm;