

import React from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function InterviewCard({ title, duration, description, level, icon, color }) {
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex align-items-start gap-3">
          <div style={{ fontSize: "2rem", color }}>{icon}</div>
          <div className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <div className="text-muted mb-1">⏰ {duration}</div>
            <Card.Text>{description}</Card.Text>
            <Badge bg="light" text="dark" className="mb-2">
              {level}
            </Badge>
            <br />
            <Button variant="primary" onClick={() => navigate("/interview")}>▶ Start Interview</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function MockInterviews() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h3>Mock Interview Simulator</h3>
          <p className="text-muted">
            Prepare for your dream job with AI-powered interview practice
          </p>
        </div>
        <div className="text-end">
          <strong>Welcome back, John!</strong>
          <br />
          <span className="text-muted">Ready to ace your next interview?</span>
        </div>
      </div>

      <Row>
        <Col md={4}>
          <InterviewCard
            title="HR Interview"
            duration="20-30 mins"
            description="Focus on behavioral questions, company culture fit, and soft skills"
            level="Beginner"
            icon={<i className="bi bi-file-earmark-text"></i>}
            color="#34a853"
          />
        </Col>
        <Col md={4}>
          <InterviewCard
            title="Technical Interview"
            duration="45-60 mins"
            description="Coding problems, system design, and technical concepts"
            level="Intermediate"
            icon={<i className="bi bi-camera-video"></i>}
            color="#007bff"
          />
        </Col>
        <Col md={4}>
          <InterviewCard
            title="Mixed Interview"
            duration="60-90 mins"
            description="Combination of HR and technical questions"
            level="Advanced"
            icon={<i className="bi bi-mic"></i>}
            color="#a855f7"
          />
        </Col>
      </Row>

      <h5 className="mt-5 mb-3">Practice Modules</h5>
      <Row className="g-3">
        {[
          "C++",
          "Figma",
          "Firebase",
          "Git",
          "Google API's",
          "React",
          "React-Native",
          "NodeJS",
          "Python",
          "Data Structures & Algorithms",
          "Behavioral Questions",
          "Communication Skills",
          "Confidence Building",
          "Body Language",
        ].map((topic) => (
          <Col md={4} key={topic}>
            <Button variant="outline-secondary" className="w-100 text-start" onClick={() => navigate("/chat")}>
              {topic}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}
