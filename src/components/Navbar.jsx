import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>☕ Highway Cafe</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;