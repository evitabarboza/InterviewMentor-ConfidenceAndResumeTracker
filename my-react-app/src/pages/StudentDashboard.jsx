import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MockInterviews from './MockInterviews';
import Performance from './Performance';
import ResumeAnalysis from './ResumeAnalysis';
import Profile from './Profile';
import Settings from './Settings';

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

const StudentDashboard = () => {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="mockinterview" element={<MockInterviews />} />
    <Route path="performance" element={<Performance />} />
    <Route path="resume-analysis" element={<ResumeAnalysis />} />
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
    {/* Redirect unmatched paths under /studentDashboard to the dashboard */}
    <Route path="*" element={<Navigate to="/studentDashboard" />} />
  </Route>
</Routes>

  );
};

export default StudentDashboard;
