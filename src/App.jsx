import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import CookieConsentPopup from './components/CookieConsentPopup'; // Import the CookieConsentPopup component
import Navbar from './components/Navbar'; // Import the Navbar component
import Header from './components/Header'; // Import the Header component
import MyProjects from './components/MyProjects'; // Import the MyProjects component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div> {/* Wrap everything in a single div */}
        <CookieConsentPopup /> {/* Display the Cookie Consent Popup */}
        <Navbar /> {/* Display the Navbar */}
        <Header /> {/* Display the Header */}
        <MyProjects /> {/* Display the My Projects Section */}
        <Footer /> {/* Display the Footer */}
      </div>
    </Router>
  );
}

export default App;