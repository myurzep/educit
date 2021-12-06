import React from "react";

class ClassComponent extends React.Component {
  state = {
    value: 1,
  };

  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update", this.state);
  }
  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.value + 1 })}>
          btn
        </button>
      </div>
    );
  }
}

export default ClassComponent;
