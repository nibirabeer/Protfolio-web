// Components/LoginModal.js
import React from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="text-xl mb-4">Social Links</h2>
                <div className="link-container">
                    <a href="https://www.linkedin.com/in/mdabidur" target="_blank" rel="noopener noreferrer" className="link-item">
                        <img src="in.png" alt="LinkedIn" className="icon" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/nibirabeer/nibirabeer" target="_blank" rel="noopener noreferrer" className="link-item">
                        <img src="g.png" alt="Twitter" className="icon" />
                        Github
                    </a>
                    <a href="https://instagram.com/nibir.abeer" target="_blank" rel="noopener noreferrer" className="link-item">
                        <img src="/i.png" alt="Instagram" className="icon" />
                        Instagram
                    </a>
                    <a href="https://facebook.com/nibirabeer" target="_blank" rel="noopener noreferrer" className="link-item">
                        <img src="/f.png" alt="Facebook" className="icon" />
                        Facebook
                    </a>
                </div>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
}

export default LoginModal;