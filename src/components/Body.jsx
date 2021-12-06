import React from "react";

const Body = () => {
  React.useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentDidUnmount");
    };
  }, []);

  return <div>текст статьи</div>;
};

export default Body;
