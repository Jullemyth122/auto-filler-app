import React from 'react'

const Form1 = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <p className="form-description">Enter the candidate's contact information. (* indicates a mandatory field)</p>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Please enter first name."
                        autoComplete="given-name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Please enter last name."
                        autoComplete="family-name"
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Please enter email."
                    autoComplete="email"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Please enter phone number."
                    autoComplete="tel"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="country">Country/Region *</label>
                <select id="country" name="country" required defaultValue="">
                    <option value="" disabled>--Select--</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="PH">Philippines</option>
                    <option value="OTHER">Other</option>
                </select>
            </div>

            <h3 className="section-header">Professional Links</h3>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="github">GitHub URL</label>
                    <input
                        type="url"
                        id="github"
                        name="github"
                        placeholder="https://github.com/username"
                        autoComplete="url"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="portfolio">Portfolio URL</label>
                    <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        placeholder="https://portfolio.com"
                        autoComplete="url"
                    />
                </div>
            </div>

            <h3 className="section-header">Education & Experience</h3>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="education">Highest Degree Attained *</label>
                    <select id="education" name="education" required defaultValue="">
                        <option value="" disabled>--Select--</option>
                        <option value="None">None</option>
                        <option value="High School">High School/GED</option>
                        <option value="Associate">Associate's Degree</option>
                        <option value="Bachelor">Bachelor's Degree</option>
                        <option value="Master">Master's Degree</option>
                        <option value="PhD">PhD/Doctorate</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Years of Experience (SaaS) *</label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        min="0"
                        max="50"
                        placeholder="e.g. 5"
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="skills">Technical Skills</label>
                <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    placeholder="List your top skills (e.g. React, Node.js, Python, AWS)..."
                />
            </div>

            <h3 className="section-header">Additional Questions</h3>

            <div className="question-group">
                <label>Are you legally authorized to work in this country? *</label>
                <div className="radio-group">
                    <label><input type="radio" name="auth" value="yes" required /> Yes</label>
                    <label><input type="radio" name="auth" value="no" required /> No</label>
                </div>
            </div>

            <div className="question-group">
                <label>Will you now or in the future require sponsorship for employment visa status? *</label>
                <div className="radio-group">
                    <label><input type="radio" name="sponsorship" value="yes" required /> Yes</label>
                    <label><input type="radio" name="sponsorship" value="no" required /> No</label>
                </div>
            </div>

            <div className="question-group">
                <label>Are you comfortable working in an onsite setting? *</label>
                <div className="radio-group">
                    <label><input type="radio" name="onsite" value="yes" required /> Yes</label>
                    <label><input type="radio" name="onsite" value="no" required /> No</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="resume">Select File *</label>
                <div className="file-input-wrapper">
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.docx,.doc,.txt,.rtf"
                        required
                    />
                    <small>Select a resume. The supported file formats are DOCX, PDF, and Text.</small>
                </div>
            </div>

            <div className="modal-footer-actions">
                <button type="submit" className="submit-btn">
                    Submit Application
                </button>
                <button type="button" className="cancel-btn" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Form1