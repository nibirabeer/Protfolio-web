import React, { useEffect, useState } from 'react';
import './MyProjects.css';

function MyProjects() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const opacity = Math.min(scrollTop / 400, 1);
    setBgOpacity(opacity);

    // Check if we should make the project item visible
    if (scrollTop > 100) { // Adjust this value as needed
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="my-projects" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
      <h2>My Projects</h2>
      <div className={`project-item ${visible ? 'visible' : ''}`}>
        <h3>Pencraft</h3>
        <p>A creative writing platform where users can write, share, and collaborate on stories. Built with React and Firebase.</p>
      </div>

      {/* Grid for images */}
      <div className="image-grid">
        <div className="image-item">
          <img src="/s1.png" alt="Pencraft Screenshot 1" />
        </div>
        <div className="image-item">
          <img src="/s2.png" alt="Pencraft Screenshot 2" />
        </div>
      </div>
    </div>
  );
}

export default MyProjects;