import React from "react";
import Header from "../components/header";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2 onClick={() => alert("about")}>This is about</h2>
      <p>about is the page ..... more discribe</p>
    </div>
  );
};
export default Home;
