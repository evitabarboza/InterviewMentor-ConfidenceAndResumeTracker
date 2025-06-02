import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const location = useLocation();

  // Extract last segment of the path to match eventKey
  const activePath = location.pathname.split("/studentDashboard")[1] || "/";

  return (
    <div className="bg-light vh-100 p-3" style={{ width: "250px" }}>
      <h4 className="mb-4">InterviewMentor</h4>
      <Nav activeKey={activePath} className="flex-column">
        <Nav.Link as={Link} to="/studentDashboard" eventKey="/dashboard">
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/studentDashboard/mockinterview" eventKey="/mockinterview">
          Mock Interviews
        </Nav.Link>
        <Nav.Link as={Link} to="/studentDashboard/performance" eventKey="/performance">
          Performance
        </Nav.Link>
        <Nav.Link as={Link} to="/studentDashboard/resume-analysis" eventKey="/resume-analysis">
          Resume Analysis
        </Nav.Link>
        <Nav.Link as={Link} to="/studentDashboard/profile" eventKey="/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/studentDashboard/settings" eventKey="/settings">
          Settings
        </Nav.Link>
      </Nav>
        <div className="mt-auto pt-3 d-flex align-items-center">
        <div className="me-2 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
            JS
        </div>
        <div>
            <div>John Student</div>
            <small className="text-muted">CS Student</small>
        </div>
        </div>
    </div>
  );
};

export default Sidebar;
