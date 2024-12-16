// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';
import ClientPage from './pages/ClientPage';
import TaskPage from './pages/TaskPage';
import MessagePage from './pages/MessagePage';
import BillingPage from './pages/BillingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-5 col-sm-5 col-md-4 col-lg-2 p-0">
              <Sidebar />
            </div>
            <div className="col-xs-7 col-sm-6 col-md-8 col-lg-10 main-content">
              <Routes> <Route path="/" element={<DashboardPage />} /> <Route path="/project" element={<ProjectPage />} /> <Route path="/client" element={<ClientPage />} /> <Route path="/task" element={<TaskPage />} /> <Route path="/message" element={<MessagePage />} /> <Route path="/billing" element={<BillingPage />} /> </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
