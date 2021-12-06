import React from "react";

import styled from "styled-components";

function App() {
  return (
    <div>
      <Block bgcolor="green">ТЕКСТ</Block>
      <A>текст 2</A>
    </div>
  );
}

const Block = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  font-size: 20px;
  height: 300px;
  width: 100%;
  color: #fff;
`;

const A = styled(Block)`
  font-size: 40px;
`;

export default App;
