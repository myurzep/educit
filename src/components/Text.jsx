import React from "react";

const Text = () => {
  const [text, setText] = React.useState("поле ввода");

  const handlerInput = (e) => {
    setText(e.target.value);
  };

  React.useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      <input type="text" value={text} onChange={handlerInput} />
    </>
  );
};

export default Text;
