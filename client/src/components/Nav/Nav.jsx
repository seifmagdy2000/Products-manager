import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';
import { IoCartOutline } from "react-icons/io5";


export default function Nav({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState(false);

  const handleNavigation = () => {
    setButtonText((prev) => !prev); 
    navigate(buttonText ? '/' : '/create'); 
  };

  return (
    <div className="nav-bar">
      <p className="nav-bar-title">
        <strong>Products Manager <IoCartOutline /></strong>
      </p>
      <div className="nav-options">
        <button 
          type="button" 
          className="nav-bar-button" 
          onClick={handleNavigation} 
        >
          <span><strong>{buttonText ? 'Go Home' : 'Add Product'}</strong></span>
        </button>
        <button 
          type="button" 
          className="nav-bar-button" 
          onClick={toggleDarkMode}  
        >
          <span>
            <strong>{darkMode ? 'Light mode' : 'Dark mode'}</strong>
          </span>
        </button>
      </div>
    </div>
  );
}
