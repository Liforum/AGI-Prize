import React, { useState } from 'react';

const PushForm = () => {
  const [contribution, setContribution] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission goes here. For example:
    console.log({ contribution, message });
    // Reset form fields
    setContribution('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contribution">Contribution:</label>
        <input
          type="text"
          id="contribution"
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PushForm;