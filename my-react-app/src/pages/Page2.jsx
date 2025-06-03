// import React from 'react';
import ExcelUpload from './ExcelUpload';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page2 = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary display-5">Institution Dashboard</h1>
          <p className="text-muted">Manage institutional data with ease and efficiency</p>
        </div>

        <ExcelUpload />
      </div>
    </div>
  );
};

export default Page2;