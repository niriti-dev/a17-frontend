import React from "react";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
      <div className="brand">PRIME DASH</div>

      <div className="nav-section">
        <h4>Navigation</h4>
        <ul>
          <li>
            <a href="#" className="active" onClick={toggleSidebar}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleSidebar}>
              Manuscripts
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleSidebar}>
              People
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <a href="#" onClick={toggleSidebar}>Analytics</a>
        </li>
        <li>
          <a href="#" onClick={toggleSidebar}>Settings</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
