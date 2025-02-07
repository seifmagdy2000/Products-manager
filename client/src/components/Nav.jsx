import './Nav.css';
export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <div className="nav-bar">
      <p className="nav-bar-title">
        <strong>Products Manager</strong>
      </p>
      <div className="nav-options">
        <button type="button" className="nav-bar-button">
          <span><strong>Add product</strong></span>
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
