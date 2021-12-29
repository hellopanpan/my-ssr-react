// containers/Home.js
import React from "react";
import Header from "../components/header";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2 onClick={() => alert("hello Home")}>This is Home</h2>
      <p>Home is the page of .... and more discribe</p>
    </div>
  );
};
export default Home;
