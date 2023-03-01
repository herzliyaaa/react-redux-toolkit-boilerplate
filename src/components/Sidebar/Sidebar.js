import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <header className="header" id="header">
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
            <a href="#" className="nav_logo">
            <i className="bi bi-box-seam"></i>
              <span className="nav_logo-name">LG </span>
            </a>
            <div className="nav_list">
              <a href="#" className="nav_link">
                <i className="bi bi-bag-check"></i>
                <span className="nav_name">Items</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bi bi-person-vcard"></i>
                <span className="nav_name">Customers</span>
              </a>

              <a href="#" className="nav_link">
                <i className="bi bi-gear"></i>
                <span className="nav_name">Transactions</span>
              </a>
              <a href="#" className="nav_link">
                <i className="bi bi-person-gear"></i>
                <span className="nav_name">User Roles</span>
              </a>
              <a href="#" className="nav_link ">
                <i className="bi bi-people"></i>
                <span className="nav_name">Users</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link">
            <i className="bi bi-box-arrow-right"></i>
            <span className="nav_name">Sign Out</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
