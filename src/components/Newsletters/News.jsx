import React, { useState } from "react";
import "./news.css";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="email-signup-container">
      <h2>OUR NEWEST PRODUCTS STRAIGHT TO YOUR MAIL.</h2>
      <p>
        Be the first to know about our products, limited offers, community
        events, and many more.
      </p>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};


