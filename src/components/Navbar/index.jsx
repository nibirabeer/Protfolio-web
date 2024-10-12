import React, { useState } from 'react';
import './Navbar.css';
import LoginModal from '../LoginModal'; // Import the LoginModal component

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    // Function to toggle the modal
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo" onClick={() => window.location.href = "/home"}>
                    <img src="/l.png" alt="Logo" />
                    <span className="navbar-name">Nibir Abeer</span>
                </div>
                <div className="button-container">
                    <button className="gradient-button" onClick={toggleModal}>
                        <span className="button-text">
                            Socials
                        </span>
                    </button>
                </div>
            </nav>

            {/* Modal for Login */}
            {isModalOpen && <LoginModal onClose={toggleModal} />}
        </>
    );
}

export default Navbar;