import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';  // 1. Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // 2. Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('User Data:', data.user);

        // 3. Redirect to student dashboard after login
        navigate('/studentDashboard');
        alert('Login successful!');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong during login.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <h1 className="text-6xl font-bold font-serif mb-12 text-indigo-700">Welcome to InterviewGuru</h1>
      <h3 className="text-xl font-bold font-sans mb-12 text-indigo-700">An AI-Powered Mock Interview & Feedback Platform</h3>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">Let's Catch Up!</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Please enter your credentials to login</p>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FiMail className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <FiLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium text-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">© 2025 InterviewGuru. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
