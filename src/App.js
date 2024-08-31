import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import UserList from "./components/UserList";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [activeSection, setActiveSection] = useState("Users");

  return (
    <Box display={"flex"}>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div style={{ flex: 1, padding: "20px" }}>
        {activeSection === "Dashboard" && <h1>Dashboard Content</h1>}
        {activeSection === "Users" && <UserList />}
        {activeSection === "Projects" && <h1>Projects Content</h1>}
        {activeSection === "Settings" && <h1>Settings Content</h1>}
      </div>
      <ToastContainer />
    </Box>
  );
}

export default App;
