import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();

    // Here you can call your API to save settings
    alert('Settings saved successfully!');
    console.log({ name, email, currentPassword, newPassword, notificationsEnabled });

    // Reset passwords fields after save
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-10">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Settings</h2>

      <form onSubmit={handleSave} className="space-y-6">

        {/* Profile info */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Change Password */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Current Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>

        {/* Notifications toggle */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="notifications"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
          />
          <label htmlFor="notifications" className="font-semibold text-gray-700">
            Enable notifications
          </label>
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
