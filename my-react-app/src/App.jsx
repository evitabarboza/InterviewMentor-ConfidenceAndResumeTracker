// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import HomePage from './pages/HomePage'; // ✅ Import HomePage
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import StudentDashboard from './pages/StudentDashboard';
// import ConfidenceTracker from './pages/ConfidenceTracker';
// import Login from './pages/Login';
// import Chat from './pages/Models/Chat';
// import Interview from './pages/Models/InterView';

// function App() {
//   return (
//     <Router>
//       <div className="main-container">
//         <nav className="bg-gray-100 shadow-md p-4 rounded-md">
//           <ul className="flex gap-4 justify-center">
//             <li>
//               <Link
//                 to="/"
//                 className="px-4 py-2 border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-100 transition duration-200"
//               >
//                 HomePage
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/Institution"
//                 className="px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-100 transition duration-200"
//               >
//                 Institution Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/studentDashboard"
//                 className="px-4 py-2 border border-purple-500 text-purple-600 rounded hover:bg-purple-100 transition duration-200"
//               >
//                 Student Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/login"
//                 className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-100 transition duration-200"
//               >
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/chat"
//                 className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-100 transition duration-200"
//               >
//                 Chat
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/interview"
//                 className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-100 transition duration-200"
//               >
//                 Interview
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<HomePage />} /> {/* ✅ Added HomePage Route */}
//           <Route path="/Institution" element={<Page2 />} />
//           <Route path="/studentDashboard/*" element={<StudentDashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/chat" element={<Chat />}/>
//           <Route path='/interview' element={<Interview />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Page2 from './pages/Page2';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import Chat from './pages/Models/Chat';
import Interview from './pages/Models/InterView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Navigation bar */}
        <header className="bg-white shadow sticky top-0 z-50 w-full">
          <nav className="flex items-center justify-between px-4 py-3">
            {/* Dashboard (left corner) */}
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 border border-purple-500 text-purple-600 rounded-md transition duration-200 no-underline ${
                    isActive ? 'bg-purple-100 font-semibold' : 'hover:bg-purple-100'
                  }`
                }
              >
                Home
              </NavLink>
            </div>

            {/* Other Nav buttons (right side) */}
            <div className="flex gap-3 flex-wrap justify-end">
              {[
                { to: '/studentDashboard', label: 'StudentDashboard', color: 'indigo' },
                { to: '/Institution', label: 'Institution', color: 'green' },
                { to: '/login', label: 'Login', color: 'red' },
                { to: '/chat', label: 'Chat', color: 'blue' },
                { to: '/interview', label: 'Interview', color: 'orange' },
              ].map(({ to, label, color }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 border border-${color}-500 text-${color}-600 rounded-md transition duration-200 no-underline ${
                      isActive ? `bg-${color}-100 font-semibold` : `hover:bg-${color}-100`
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </header>

        {/* Main content with no left/right margins */}
        <main className="p-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Institution" element={<Page2 />} />
            <Route path="/studentDashboard/*" element={<StudentDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
