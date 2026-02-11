import React from 'react';
import './App.css'; // Keep your existing styles or add the ones below

function App() {
  return (
    <div className="container">
      <h1>Test Job Application Form</h1>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 234 567 8900"
            autoComplete="tel"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St"
            autoComplete="street-address"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              autoComplete="address-level2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State / Province</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              autoComplete="address-level1"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Profile URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            autoComplete="url"
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Professional Summary / Cover Letter</label>
          <textarea
            id="summary"
            name="summary"
            rows={6}
            placeholder="Tell us about your experience and why you're a great fit..."
            autoComplete="off"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default App;