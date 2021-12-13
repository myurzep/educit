import React from "react";
import io from "socket.io-client";

import { Box, Grid, TextField, Button } from "@mui/material";

const socket = io("ws://localhost:8080");

function App() {
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    if (socket) {
      socket.on("CHAT", (msg) => {
        console.log("get msg: " + msg);
        setMessages((prevState) => [...prevState, msg]);
        // тут почему-то мы получем пустой массив в переменной messages
      });
    }
  }, [socket]);

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  const chatSendHandler = (e) => {
    if (text !== "") {
      socket.emit("CHAT", text);
      setText("");
    }
  };

  return (
    <Box
      sx={{
        fontSize: "20px",
      }}
    >
      <Grid container spacing={2} direction="column">
        {messages.map((message, i) => (
          <Grid item key={i}>
            {message}
          </Grid>
        ))}
      </Grid>
      <hr />
      <TextField value={text} onChange={inputTextHandler} variant="outlined" />
      <Button onClick={chatSendHandler} variant="outlined">
        send
      </Button>
    </Box>
  );
}

export default App;
