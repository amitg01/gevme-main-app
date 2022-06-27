import { useContext } from "react";
import { drawerContext } from "../context/drawerContext";
import Post from "./Post";
import Profile from "./Profile";

const Drawer = ({ visible }) => {
  const drawerDetails = useContext(drawerContext);

  return (
    <div id="mySidebar" className={`sidebar ${visible}`}>
      <div className="sidebar_header">
        <p>{drawerDetails.activeDrawerChild}</p>
        <span onClick={() => drawerDetails.setShowDrawer(false)}>X</span>
      </div>
      {drawerDetails.activeDrawerChild === "Profile" ? (
        <Profile />
      ) : drawerDetails.activeDrawerChild === "Post" ? (
        <Post />
      ) : null}
    </div>
  );
};

export default Drawer;
