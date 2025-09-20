import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dashboard</h1>
      <p>You are now logged in successfully.</p>
      {/* <button
        onClick={() => {
          localStorage.removeItem("token"); 
          window.location.href = "/"; 
        }}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Dashboard;
