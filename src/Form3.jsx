import React, { useState } from 'react';
import './Form3.scss';

const Form3 = ({ handleSubmit, closeModal }) => {
    const [step, setStep] = useState(1);

    // Total steps
    const totalSteps = 3;

    const nextStep = (e) => {
        e.preventDefault(); // Prevent form submission
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = (e) => {
        e.preventDefault();
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form3-container">
            <div className="step-indicator">
                <span className={`step ${step === 1 ? 'active' : ''}`}>Step 1: Personal</span>
                <span className={`step ${step === 2 ? 'active' : ''}`}>Step 2: Address</span>
                <span className={`step ${step === 3 ? 'active' : ''}`}>Step 3: Professional</span>
            </div>

            {step === 1 && (
                <div className="form-section">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label htmlFor="f3_firstName">First Name</label>
                        <input type="text" id="f3_firstName" name="f3_firstName" placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_lastName">Last Name</label>
                        <input type="text" id="f3_lastName" name="f3_lastName" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_email">Email</label>
                        <input type="email" id="f3_email" name="f3_email" placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_phone">Phone</label>
                        <input type="tel" id="f3_phone" name="f3_phone" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_dob">Date of Birth</label>
                        <input type="date" id="f3_dob" name="f3_dob" />
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="form-section">
                    <h3>Address Details</h3>
                    <div className="form-group">
                        <label htmlFor="f3_address">Street Address</label>
                        <input type="text" id="f3_address" name="f3_address" placeholder="123 Main St" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_city">City</label>
                        <input type="text" id="f3_city" name="f3_city" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_state">State/Province</label>
                        <input type="text" id="f3_state" name="f3_state" placeholder="State" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_zip">Zip/Postal Code</label>
                        <input type="text" id="f3_zip" name="f3_zip" placeholder="Zip Code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_country">Country</label>
                        <select id="f3_country" name="f3_country">
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="PH">Philippines</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="form-section">
                    <h3>Professional Info</h3>
                    <div className="form-group">
                        <label htmlFor="f3_jobTitle">Current Job Title</label>
                        <input type="text" id="f3_jobTitle" name="f3_jobTitle" placeholder="Software Engineer" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_company">Current Company</label>
                        <input type="text" id="f3_company" name="f3_company" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_linkedin">LinkedIn URL</label>
                        <input type="url" id="f3_linkedin" name="f3_linkedin" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_portfolio">Portfolio URL</label>
                        <input type="url" id="f3_portfolio" name="f3_portfolio" placeholder="https://..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="f3_experience">Years of Experience</label>
                        <input type="number" id="f3_experience" name="f3_experience" min="0" max="50" />
                    </div>
                </div>
            )}

            <div className="navigation-buttons">
                {step > 1 ? (
                    <button type="button" className="prev-btn" onClick={prevStep}>
                        Previous
                    </button>
                ) : (
                    <button type="button" className="cancel-btn" onClick={closeModal}>
                        Cancel
                    </button>
                )}

                {step < totalSteps ? (
                    <button type="button" className="next-btn" onClick={nextStep}>
                        Next
                    </button>
                ) : (
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                )}
            </div>
        </form>
    )
}

export default Form3