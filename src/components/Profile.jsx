import { useContext, useEffect, useState } from "react";
import { getUser } from "../apis";
import { drawerContext } from "../context/drawerContext";

import Avatar from "./Avatar";

const Profile = () => {
  const { userId } = useContext(drawerContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(getUser(userId))
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  const getAddress = () => {
    const address = user.address;
    return `${address.street}, ${address.city}, ${address.zipcode}`;
  };

  return (
    <div>
      {user && (
        <div>
          <div>
            <Avatar user={user} />
            <div>{user.name}</div>
          </div>
          <div className="details">
            <div className="detail">
              <p>Email</p>
              <p>{user.email.toLowerCase()}</p>
            </div>
            <div className="detail">
              <p>Address</p>
              <p>{getAddress()}</p>
            </div>
            <div className="detail">
              <p>Phone</p>
              <p>{user.phone}</p>
            </div>
            <div className="detail">
              <p>Website</p>
              <p>{user.website.toLowerCase()}</p>
            </div>
            <div className="detail">
              <p>Company</p>
              <p>{user.company.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
