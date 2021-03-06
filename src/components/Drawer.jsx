import { useContext } from "react";
import { drawerContext } from "../context/drawerContext";
import Post from "./Post";
import Profile from "./Profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Drawer = ({ visible }) => {
  const drawerDetails = useContext(drawerContext);

  return (
    <div id="mySidebar" className={`sidebar ${visible}`}>
      <div className="sidebar_header">
        <p>{drawerDetails.activeDrawerChild}</p>
        <FontAwesomeIcon
          icon={faRightToBracket}
          onClick={() => drawerDetails.setShowDrawer(false)}
        />
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
