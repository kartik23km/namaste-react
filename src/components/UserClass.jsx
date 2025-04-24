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
      <div className="user-card flex items-center border my-5 px-4 py-2 w-1/5 rounded-lg gap-5">
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
        <img className="w-20 h-20" src={avatar_url} />
        <div>
          <h1>{name}</h1>
          <h2>Location: {location}</h2>
          <h2>Contact: @kartik__malhotra</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
