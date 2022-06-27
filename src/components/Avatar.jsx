const Avatar = ({ user }) => {
  const getInitails = () => {
    const name = user.name.split(" ");
    const firstChar = name[0][0];
    const lastChar = name[name.length - 1][0];
    return [firstChar, lastChar];
  };
  return (
    <div className="avatar">{`${getInitails()[0]} ${getInitails()[1]}`}</div>
  );
};

export default Avatar;
