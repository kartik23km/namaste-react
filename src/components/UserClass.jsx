import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "NA",
        location: "NA",
      },
    };

    // console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/kartik23km");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // console.log("child component did mount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log("child render");
    return (
      <div className="user-card">
        {/* <p>Count: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: @kartik__malhotra</h2>
      </div>
    );
  }
}

export default UserClass;
