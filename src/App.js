import { useState, useCallback } from "react";
import { iFrameAppUrl } from "./apis";

import "./App.css";
import Drawer from "./components/Drawer";
import { drawerContext } from "./context/drawerContext";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [userId, setUserId] = useState(null);
  const [activeDrawerChild, setActiveDrawerChild] = useState(null);

  const handleProfile = useCallback((id) => {
    setActiveDrawerChild("Profile");
    handleDrawer(id);
  }, []);

  const handlePost = useCallback((id) => {
    setActiveDrawerChild("Post");
    handleDrawer(id);
  }, []);

  const handleDrawer = (id) => {
    setShowDrawer(true);
    setUserId(id);
  };

  window.onmessage = function (e) {
    if (e && typeof e.data === "string") {
      const data = JSON.parse(e.data);
      if (data.name === "viewProfile") {
        handleProfile(data.id);
      } else if (data.name === "viewPost") {
        handlePost(data.id);
      }
    }
  };

  const drawerDetails = {
    userId,
    activeDrawerChild,
    setShowDrawer,
  };

  return (
    <div className="App">
      <iframe src={iFrameAppUrl} title="table" />
      <drawerContext.Provider value={drawerDetails}>
        <Drawer visible={showDrawer} />
      </drawerContext.Provider>
    </div>
  );
}

export default App;
