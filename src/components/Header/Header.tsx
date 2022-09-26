import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "src/routes";
import { useId } from "react";

function Header() {
  const location = useLocation();

  const aa = useId();

  console.log(333, aa);
  return (
    <>
      <div className="header-root">
        {publicRoutes.map((route) => (
          <Link key={route.name} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
      <div>current location : {location.pathname}</div>
    </>
  );
}

export default Header;
