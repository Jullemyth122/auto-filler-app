import React, { useState } from 'react';
import './Form4.scss';

const Form4 = ({ handleSubmit, closeModal }) => {
    // State for dynamic projects
    const [projects, setProjects] = useState([
        { id: 1, name: '', role: '', description: '' }
    ]);

    // State for conditional logic
    const [hasNonCompete, setHasNonCompete] = useState(false);

    // Helpers for dynamic fields
    const addProject = () => {
        setProjects([...projects, { id: Date.now(), name: '', role: '', description: '' }]);
    };

    const removeProject = (id) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    const handleNonCompeteChange = (e) => {
        setHasNonCompete(e.target.value === 'yes');
    };

    return (
        <form onSubmit={handleSubmit} className="form4-container">
            {/* Section 1: Skill Matrix */}
            <section className="skill-section">
                <h3>Technical Proficiency Matrix</h3>
                <div className="skill-matrix">
                    <div className="matrix-header"></div> {/* Empty corner */}
                    <div className="matrix-header">None</div>
                    <div className="matrix-header">Beginner</div>
                    <div className="matrix-header">Intermediate</div>
                    <div className="matrix-header">Expert</div>

                    {['React', 'Node.js', 'Python', 'SQL', 'AWS'].map(skill => (
                        <React.Fragment key={skill}>
                            <div className="matrix-row-label">{skill}</div>
                            <div className="matrix-cell"><input type="radio" name={`skill_${skill}`} value="none" /></div>
                            <div className="matrix-cell"><input type="radio" name={`skill_${skill}`} value="beginner" /></div>
                            <div className="matrix-cell"><input type="radio" name={`skill_${skill}`} value="intermediate" /></div>
                            <div className="matrix-cell"><input type="radio" name={`skill_${skill}`} value="expert" /></div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* Section 2: Dynamic Project Portfolio */}
            <section className="projects-section">
                <h3>Project Portfolio</h3>
                <p style={{ marginBottom: '1rem', color: '#666' }}>Add relevant projects to showcase your experience.</p>

                {projects.map((project, index) => (
                    <div key={project.id} className="project-card">
                        <h4>Project #{index + 1}</h4>
                        {projects.length > 1 && (
                            <button type="button" className="remove-btn" onClick={() => removeProject(project.id)}>
                                Remove
                            </button>
                        )}

                        <div className="form-group">
                            <label>Project Name</label>
                            <input type="text" name={`project_name_${project.id}`} placeholder="e.g. E-commerce Platform" required />
                        </div>
                        <div className="form-group">
                            <label>Your Role</label>
                            <input type="text" name={`project_role_${project.id}`} placeholder="e.g. Lead Frontend Dev" required />
                        </div>
                        <div className="form-group">
                            <label>Description & Tech Stack</label>
                            <textarea name={`project_desc_${project.id}`} rows="3" placeholder="Briefly describe the project and technologies used..."></textarea>
                        </div>
                    </div>
                ))}

                <button type="button" className="add-project-btn" onClick={addProject}>
                    + Add Another Project
                </button>
            </section>

            {/* Section 3: Availability Grid */}
            <section className="availability-section">
                <h3>Interview Availability</h3>
                <div className="availability-grid">
                    <div></div>
                    <div className="header-cell">Morning</div>
                    <div className="header-cell">Afternoon</div>
                    <div className="header-cell">Evening</div>

                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                        <React.Fragment key={day}>
                            <div className="day-label">{day}</div>
                            <div><input type="checkbox" name={`avail_${day}_am`} /></div>
                            <div><input type="checkbox" name={`avail_${day}_pm`} /></div>
                            <div><input type="checkbox" name={`avail_${day}_eve`} /></div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* Section 4: Compliance & Conditional Logic */}
            <section className="compliance-section">
                <h3>Legal & Compliance</h3>
                <div className="form-group">
                    <label>Do you have any active Non-Compete Agreements with current or past employers?</label>
                    <div className="radio-group">
                        <label><input type="radio" name="non_compete" value="yes" onChange={handleNonCompeteChange} /> Yes</label>
                        <label><input type="radio" name="non_compete" value="no" onChange={handleNonCompeteChange} defaultChecked /> No</label>
                    </div>
                </div>

                {hasNonCompete && (
                    <div className="conditional-field">
                        <label>Please describe the scope and expiration date of the agreement:</label>
                        <textarea name="non_compete_details" rows="3" required></textarea>
                    </div>
                )}
            </section>

            <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                <button type="submit" className="submit-btn">Submit Portfolio</button>
            </div>
        </form>
    )
}

export default Form4