import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
function Sidebar() {
  const navigate = useNavigate();
  const onSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log(toggle);
  });
  return (
    <>
      <header className="header" id="header">
        <ToggleButton onClick={() => setToggle(!toggle)} />
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="profile" />
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <NavLink className="nav_logo">
              <i className="bi bi-box-seam"></i>
              <span className="nav_logo-name">LG </span>
            </NavLink>
            <div className="nav_list">
              <NavLink href="#" className="nav_link">
                <i className="bi bi-bag-check"></i>
                <span className="nav_name">Items</span>
              </NavLink>
              <NavLink href="#" className="nav_link">
                <i className="bi bi-person-vcard"></i>
                <span className="nav_name">Customers</span>
              </NavLink>

              <NavLink href="#" className="nav_link">
                <i className="bi bi-gear"></i>
                <span className="nav_name">Transactions</span>
              </NavLink>
              <NavLink href="#" className="nav_link">
                <i className="bi bi-person-gear"></i>
                <span className="nav_name">User Roles</span>
              </NavLink>
              <NavLink href="#" className="nav_link ">
                <i className="bi bi-people"></i>
                <span className="nav_name">Users</span>
              </NavLink>
            </div>
          </div>
          <li onClick={onSignOut} className="nav_link" role="button">
            <i className="bi bi-box-arrow-right"></i>
            <span className="nav_name">Sign Out</span>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
