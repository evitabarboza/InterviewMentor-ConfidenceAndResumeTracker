import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillBar = ({ skill, value, previous, change }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <strong>{skill}</strong>
      <span>{value}%</span>
    </div>
    <div className="progress">
      <div
        className="progress-bar bg-primary"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <small className="text-muted">Previous: {previous}% ({change})</small>
  </div>
);

const InterviewScore = ({ date, score }) => (
  <div className="d-flex justify-content-between border-bottom py-2">
    <span>{date}</span>
    <div className="progress w-50">
      <div
        className="progress-bar bg-primary"
        role="progressbar"
        style={{ width: `${score}%` }}
        aria-valuenow={score}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <span>{score}%</span>
  </div>
);

const PerformanceDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-10 p-4">
          <div className="row">
            <div className="col-md-6">
              <h4>Skill Performance Trends</h4>
              <SkillBar skill="Communication" value={82} previous={75} change={"+7%"} />
              <SkillBar skill="Technical Knowledge" value={75} previous={70} change={"+5%"} />
              <SkillBar skill="Problem Solving" value={78} previous={80} change={"-2%"} />
              <SkillBar skill="Confidence" value={71} previous={65} change={"+6%"} />
              <SkillBar skill="Body Language" value={69} previous={72} change={"-3%"} />
            </div>

            <div className="col-md-6">
              <h4>Interview Score History</h4>
              <InterviewScore date="Dec 1" score={85} />
              <InterviewScore date="Nov 28" score={72} />
              <InterviewScore date="Nov 25" score={78} />
              <InterviewScore date="Nov 22" score={91} />
              <InterviewScore date="Nov 19" score={68} />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h5 className="text-success">Your Strengths</h5>
              <ul className="list-group">
                <li className="list-group-item text-success">Clear articulation of thoughts</li>
                <li className="list-group-item text-success">Good understanding of data structures</li>
                <li className="list-group-item text-success">Positive attitude and enthusiasm</li>
                <li className="list-group-item text-success">Asks relevant questions</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5 className="text-warning">Areas for Improvement</h5>
              <ul className="list-group">
                <li className="list-group-item text-warning">Work on maintaining eye contact</li>
                <li className="list-group-item text-warning">Practice explaining complex concepts simply</li>
                <li className="list-group-item text-warning">Reduce filler words (um, uh)</li>
                <li className="list-group-item text-warning">Improve posture during interviews</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;