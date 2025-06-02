import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Badge,
  ListGroup,
} from "react-bootstrap";

function Dashboard() {
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3>Dashboard Overview</h3>
          <p className="text-muted mb-0">
            Prepare for your dream job with AI-powered interview practice
          </p>
        </div>
        <div>
          <strong>Welcome back, John!</strong>
          <br />
          <span className="text-muted">Ready to ace your next interview?</span>
        </div>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Interviews Completed</Card.Title>
              <h4>
                12 <small className="text-success">+3 this week</small>
              </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Confidence Score</Card.Title>
              <h4>
                78% <small className="text-primary">+12% this month</small>
              </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Practice Hours</Card.Title>
              <h4>
                24h <small className="text-info">8h this week</small>
              </h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Skills Improved</Card.Title>
              <h4>
                6 <small className="text-success">2 new skills</small>
              </h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Confidence Progress</Card.Title>
              <div className="mb-2">
                Overall Confidence <span className="float-end">78%</span>
              </div>
              <ProgressBar now={78} className="mb-3" />
              <div className="mb-2">
                Communication Skills <span className="float-end">82%</span>
              </div>
              <ProgressBar now={82} className="mb-3" />
              <div className="mb-2">
                Technical Knowledge <span className="float-end">75%</span>
              </div>
              <ProgressBar now={75} className="mb-3" />
              <div className="mb-2">
                Body Language <span className="float-end">71%</span>
              </div>
              <ProgressBar now={71} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Recent Interview Performance</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Technical - TCS{" "}
                  <span className="float-end">
                    Score: 85% <Badge bg="success">Passed</Badge>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  HR - Infosys{" "}
                  <span className="float-end">
                    Score: 72% <Badge bg="danger">Needs Work</Badge>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Technical - Wipro{" "}
                  <span className="float-end">
                    Score: 91% <Badge bg="primary">Excellent</Badge>
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;