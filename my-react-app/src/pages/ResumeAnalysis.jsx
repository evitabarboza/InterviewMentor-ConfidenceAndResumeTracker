import React from 'react';

const ResumeAnalysis = () => {
  return (
    <div className="d-flex">
      {/* Main content */}
      <div className="flex-grow-1 px-4 pt-3">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h4>Resume Analysis</h4>
            <p className="text-muted mb-0">Prepare for your dream job with AI-powered interview practice</p>
          </div>
          <div className="text-end">
            <small>Welcome back, John!</small><br />
            <small className="text-primary">Ready to ace your next interview?</small>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="resume-box border border-2 border-dashed rounded p-4 mb-3 bg-white text-center">
          <div className="mb-3">
            <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
          </div>
          <h5>Upload your resume for AI analysis</h5>
          <p className="text-muted">Supports PDF, DOC, and DOCX files up to 5MB</p>
          <input type="file" className="form-control w-auto mx-auto" />
        </div>

        {/* Results and Suggestions */}
        <div className="row">
          <div className="col-md-8">
            {/* Resume Analysis Results */}
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="card-title mb-0">Resume Analysis Results</h5>
                  <span className="score-badge bg-light px-3 py-1 rounded-pill fw-bold">Score: 78%</span>
                </div>
                {[
                  { label: 'Contact Information', percent: 95 },
                  { label: 'Professional Summary', percent: 82 },
                  { label: 'Work Experience', percent: 75 },
                  { label: 'Education', percent: 90 },
                  { label: 'Skills', percent: 68, variant: 'warning' },
                  { label: 'Projects', percent: 72 }
                ].map(({ label, percent, variant }, i) => (
                  <div className="mb-2" key={i}>
                    {label}
                    <div className="progress">
                      <div className={`progress-bar ${variant ? `bg-${variant}` : ''}`} style={{ width: `${percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="card">
              <div className="card-body">
                <h5>Improvement Suggestions</h5>
                <ul className="list-group list-group-flush">
                  {[
                    "Add more quantifiable achievements in work experience",
                    "Include relevant technical skills for your target role",
                    "Consider adding certifications section",
                    "Use stronger action verbs in project descriptions",
                    "Optimize keywords for ATS compatibility"
                  ].map((item, index) => (
                    <li className="list-group-item" key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar: Actions + Questions */}
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>Quick Actions</h5>
                <button className="btn btn-outline-secondary w-100 mb-2">Re-analyze Resume</button>
                <button className="btn btn-outline-secondary w-100 mb-2">Download Report</button>
                <button className="btn btn-primary w-100">Generate Practice Questions</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5>AI-Generated Questions</h5>
                <ul className="list-unstyled">
                  {[
                    "Tell me about your experience with React development",
                    "How did you handle the challenging project mentioned in your resume?",
                    "What motivated you to transition into software development?",
                    "Describe a time when you had to learn a new technology quickly",
                    "How do you stay updated with the latest industry trends?"
                  ].map((q, i) => (
                    <li className="mb-3" key={i}>
                      {q}<br />
                      <a href="#">Practice This Question</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
