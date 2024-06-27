import React from "react";
import "./DashBoardNav.css";
import logo from "../img/Rectangle.jpg";
import admin from "../img/Rectangle 110464.jpg";
import { Notifications, NotificationsNone } from "@mui/icons-material";
function DashBoardNav() {
  return (
    <div className="dashboardNav">
      <div className="dashboardNav_left">
        <img src={logo} />
      </div>
      <div className="dashboardNav_right">
        <span><NotificationsNone /></span>
        <div className="dashboardNav_right_profle">
            <span>
                <p>DR Roberts</p>
                <p>Admin</p>
            </span>
            <img src={admin}/>

        </div>
      </div>
    </div>
  );
}

export default DashBoardNav;
