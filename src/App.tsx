import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import VerificationCard from './components/VerificationCard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Banner />
          <div className="container mx-auto px-4 -mt-20 relative z-10 mb-12">
            <Routes>
              <Route path="/" element={<VerificationCard />} />
              <Route path="/verificar/:protocolo" element={<VerificationCard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;