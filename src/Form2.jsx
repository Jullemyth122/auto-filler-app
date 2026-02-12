import React from 'react'
import './Form2.scss'

const Form2 = ({ handleSubmit, closeModal }) => {
    const [resumeType, setResumeType] = React.useState(null);

    return (
        <form onSubmit={handleSubmit}>
            <p className="form-description">Apply for this job</p>
            <p className="form-description" style={{ fontSize: '0.9em' }}>* indicates a required field</p>

            <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
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
                    autoComplete="family-name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="preferredName">Preferred First Name</label>
                <input
                    type="text"
                    id="preferredName"
                    name="preferredName"
                    autoComplete="given-name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" defaultValue="">
                        <option value="" disabled>--Select--</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="PH">Philippines</option>
                        <option value="IN">India</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                <div className="form-group" style={{ flex: 2 }}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                    />
                </div>
            </div>

            <h3 className="section-header">Resume/CV</h3>
            <div className="file-upload-section">
                <div className="button-stack">
                    <button type="button" className="file-method-btn" onClick={() => document.getElementById('resume-upload').click()}>
                        Attach
                    </button>
                    <input
                        type="file"
                        id="resume-upload"
                        name="resume"
                        accept=".pdf,.doc,.docx,.txt,.rtf"
                        style={{ display: 'none' }}
                        onChange={(e) => setResumeType(e.target.files[0] ? 'attached' : null)}
                    />
                    <button type="button" className="file-method-btn">Dropbox</button>
                    <button type="button" className="file-method-btn">Google Drive</button>
                    <button type="button" className="file-method-btn" onClick={() => setResumeType('manual')}>Enter manually</button>
                </div>
                {resumeType === 'manual' && (
                    <textarea
                        name="resumeText"
                        placeholder="Paste your resume here..."
                        rows={6}
                        style={{ marginTop: '10px', width: '100%' }}
                    />
                )}
                <small className="file-help">Accepted file types: pdf, doc, docx, txt, rtf</small>
            </div>

            <h3 className="section-header">Cover Letter</h3>
            <div className="file-upload-section">
                <div className="button-stack">
                    <button type="button" className="file-method-btn" onClick={() => document.getElementById('cover-upload').click()}>
                        Attach
                    </button>
                    <input
                        type="file"
                        id="cover-upload"
                        name="coverLetter"
                        accept=".pdf,.doc,.docx,.txt,.rtf"
                        style={{ display: 'none' }}
                    />
                    <button type="button" className="file-method-btn">Dropbox</button>
                    <button type="button" className="file-method-btn">Google Drive</button>
                </div>
            </div>

            <h3 className="section-header">Education</h3>
            <div className="form-group">
                <label htmlFor="education">Degree *</label>
                <select id="education" name="education" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="High School">High School</option>
                    <option value="Associate">Associate's Degree</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="PhD">PhD</option>
                </select>
                <button type="button" className="add-another-btn">Add another</button>
            </div>

            <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder=""
                />
            </div>

            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder=""
                />
            </div>

            <div className="question-group">
                <label htmlFor="philippines_based">Are you based in the Philippines? *</label>
                <select id="philippines_based" name="philippines_based" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="question-group">
                <label htmlFor="full_time">Does your current situation allow you to commit to a full-time schedule? *</label>
                <select id="full_time" name="full_time" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="question-group">
                <label htmlFor="night_shift">Can you commit fully to a night shift (10 PM - 7 AM PHT)? *</label>
                <select id="night_shift" name="night_shift" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="modal-footer-actions">
                <button type="submit" className="submit-btn">
                    Submit application
                </button>
                <button type="button" className="cancel-btn" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Form2