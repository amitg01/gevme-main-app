import { useContext, useEffect, useState } from "react";
import { drawerContext } from "../context/drawerContext";
import Avatar from "./Avatar";

const Post = () => {
  const { userId } = useContext(drawerContext);
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  const getPosts = () =>
    posts.map((post) => (
      <div className="post">
        <p className="post-title">{post.title}</p>
        <p>{post.body}</p>
      </div>
    ));

  return (
    <div>
      {user && posts ? (
        <div>
          <div>
            <Avatar user={user} />
            <div>{user.name}</div>
          </div>
          <div className="posts">{getPosts()}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
