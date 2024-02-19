import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'; // Import your HomePage component
import AboutPage from './pages/AboutPage'; // Import your AboutPage component

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
}

export default App;