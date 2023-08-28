import "./nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Employee Registration</div>
      <div className="links">
        <Link to="/">
          <button className="add-employee-button">Home</button>
        </Link>
        <Link to="/form">
          <button className="add-employee-button">
            <i
              className="fa-solid fa-plus"
              style={{ paddingRight: "10px" }}
            ></i>
            Add Employee
          </button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
