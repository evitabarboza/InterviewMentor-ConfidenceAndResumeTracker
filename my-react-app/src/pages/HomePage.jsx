import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to InterviewGuru</h1>
          <p className="lead">
            Your one-stop platform for managing institutions and academic data effortlessly.
          </p>
          <button className="btn btn-light btn-lg mt-3" onClick={handleGetStarted}>
            Get Started <i className="bi bi-arrow-right-circle ms-2"></i>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary">Platform Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-cloud-arrow-up display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Easy Excel Upload</h5>
                  <p className="card-text">Upload your institutional data using Excel files in just a few clicks.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-speedometer2 display-4 text-success mb-3"></i>
                  <h5 className="card-title">Fast Performance</h5>
                  <p className="card-text">Experience lightning-fast processing and real-time validations.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check display-4 text-info mb-3"></i>
                  <h5 className="card-title">Secure & Reliable</h5>
                  <p className="card-text">All your data is encrypted and securely managed in our platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 InterviewGuru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
