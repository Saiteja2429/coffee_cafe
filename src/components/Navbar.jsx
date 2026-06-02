import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="brand-logo">
          <svg viewBox="0 0 130 100" className="brand-logo-svg" width="65" height="50">
            <defs>
              <linearGradient id="stupaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd875" />
                <stop offset="100%" stopColor="#f7c873" />
              </linearGradient>
            </defs>
            
            {/* Stupa Dome Wheel */}
            <g transform="translate(65, 54)">
              <circle cx="0" cy="0" r="28" fill="url(#stupaGold)" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#fca5a5" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="20" fill="none" stroke="#fca5a5" strokeWidth="0.8" strokeDasharray="3,3" />
              <circle cx="0" cy="0" r="16" fill="none" stroke="#fca5a5" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#fca5a5" strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="0" cy="0" r="8" fill="none" stroke="#fca5a5" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="4" fill="#fca5a5" />
              <path d="M 0 -28 L 0 28 M -28 0 L 28 0 M -20 -20 L 20 20 M -20 20 L 20 -20" stroke="#fca5a5" strokeWidth="0.6" opacity="0.4" />
            </g>

            {/* City Skyline */}
            <path d="M 15 88 L 30 88 L 30 82 L 35 82 L 35 88 L 45 88 L 45 78 L 50 78 L 50 84 L 54 84 L 54 88 L 76 88 L 76 84 L 80 84 L 80 78 L 85 78 L 85 88 L 95 88 L 95 82 L 100 82 L 100 88 L 115 88" fill="#1b1b1b" opacity="0.8" />

            {/* Monument 'A' */}
            <path d="M 61 10 L 61 48 C 61 70 52 88 20 92 M 69 10 L 69 48 C 69 70 78 88 110 92" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
          <div className="brand-text-container">
            <span className="brand-name">maravati</span>
          </div>
        </Link>
      </nav>

      <div className="sub-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/book">Book Table</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
}

export default Navbar;