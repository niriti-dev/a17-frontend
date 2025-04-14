import React, { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import SummaryCards from "./SummaryCards";
import RecentSubmissionsTable from "./RecentSubmissionsTable";
import "./index.css"; // Ensure your CSS is imported

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="dashboard">
      <TopBar />
        <SummaryCards />
        <RecentSubmissionsTable />
    </div>
  );
}

export default Dashboard;
