import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Text from "./components/Text";
// import ClassComponent from "./components/ClassComponent";

function App() {
  // const [isView, setIsView] = React.useState(true);

  return (
    <div className="block">
      <BrowserRouter>
        <Link to="/">на главную</Link>
        <Link to="/news">на новости</Link>
        <Link to="/about">на о сайте</Link>
        <hr />
        <Routes>
          <Route path="/" element={<div>главная</div>} />
          <Route path="/news" element={<div>новости</div>} />
          <Route path="/about" element={<div>о сайте</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
