const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>Location: {location}</h2>
      <h2>Contact: @kartik__malhotra</h2>
    </div>
  );
};

export default User;
