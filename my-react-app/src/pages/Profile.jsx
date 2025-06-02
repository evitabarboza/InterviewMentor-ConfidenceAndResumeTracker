import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const navigate = useNavigate(); // ⬅️ Use the hook

    const handleLogout = () => {
    navigate('/login'); // Redirect to /login
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-blue-500"
        />
        <div>
          <h1 className="text-2xl font-bold">John Student</h1>
          <p className="text-gray-600">CS Student, Sahyadri College of Engineering</p>
          <p className="text-sm text-gray-500">
            <i className="bi bi-envelope me-2"></i>john.student@example.com <br />
            <i className="bi bi-telephone me-2"></i>+91-9876543210
          </p>
        </div>
      </div>

      {/* Interview Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: 'bi bi-journal-check', title: 'Interviews Taken', value: '12 (+3 this week)' },
          { icon: 'bi bi-bar-chart-line', title: 'Confidence Score', value: '78% (+12% this month)' },
          { icon: 'bi bi-clock-history', title: 'Practice Hours', value: '24h (8h this week)' },
          { icon: 'bi bi-lightbulb', title: 'Skills Improved', value: '6 (2 new skills)' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex items-start gap-3">
            <i className={`${item.icon} text-2xl text-blue-500`}></i>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-bold text-blue-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Breakdown */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2"><i className="bi bi-pie-chart-fill me-2"></i>Skill Breakdown</h2>
        {[
          { skill: 'Communication Skills', score: 82 },
          { skill: 'Technical Knowledge', score: 75 },
          { skill: 'Body Language', score: 71 },
          { skill: 'Overall Confidence', score: 78 },
        ].map((s, i) => (
          <div key={i} className="mb-2">
            <p className="text-sm text-gray-700">{s.skill}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${s.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Interviews */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2"><i className="bi bi-person-workspace me-2"></i>Recent Interviews</h2>
        <div className="space-y-2">
          {[
            { company: 'TCS', type: 'Technical', score: 85, feedback: 'Passed' },
            { company: 'Infosys', type: 'HR', score: 72, feedback: 'Needs Work' },
            { company: 'Wipro', type: 'Technical', score: 91, feedback: 'Excellent' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between bg-white p-3 rounded-lg shadow">
              <div>
                <p className="font-medium">{item.type} - {item.company}</p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-semibold">Score: {item.score}%</span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    item.feedback === 'Passed' ? 'bg-green-100 text-green-700' :
                    item.feedback === 'Needs Work' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-700'}
                  `}
                >
                  {item.feedback}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2"><i className="bi bi-chat-dots-fill me-2"></i>AI Feedback</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Great fluency but slight nervousness detected. Try slowing down slightly during answers.</li>
          <li>Solid in Data Structures. Improve in DBMS & OS.</li>
          <li>Need to prepare better for behavioral questions and self-introduction.</li>
        </ul>
      </div>

      {/* Goals & Actions */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2"><i className="bi bi-flag-fill me-2"></i>Goals & Upcoming Tasks</h2>
        <ul className="list-inside list-disc text-gray-700">
          <li>Complete 2 Mock Interviews by Friday</li>
          <li>Upload updated resume</li>
          <li>Watch the “Top HR Questions” module</li>
          <li>Attend live session on “System Design Basics”</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <i className="bi bi-pencil-square"></i> Edit Profile
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl flex items-center gap-2">
          <i className="bi bi-download"></i> Download PDF
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl ml-auto flex items-center gap-2"
        >
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </div>
  );
}
