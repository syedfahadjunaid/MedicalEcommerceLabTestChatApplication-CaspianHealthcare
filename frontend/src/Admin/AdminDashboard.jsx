import React, { useState } from "react";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";

function AdminDashboard() {
  const [login, setLogin] = useState(true);
  return <div>{login ? <Admin /> : <AdminLogin />}</div>;
}

export default AdminDashboard;
