import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      <div className="header-root">
        <Link to="/">Home</Link>
        <Link to="/select-multis">Select-multis</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>current location : {location.pathname}</div>
    </>
  );
}

export default Header;
