import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import VerificationCard from './components/VerificationCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
        <div className="container mx-auto px-4 -mt-20 relative z-10 mb-12">
          <VerificationCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;