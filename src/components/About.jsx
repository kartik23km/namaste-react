import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="m-5">
        <h1>About Us</h1>
        <UserClass
          name={"Kartik Malhotra (class component)"}
          location={"Delhi class"}
        />
      </div>
    );
  }
}

export default About;
