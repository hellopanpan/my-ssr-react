import React from "react";
import { Helmet } from "react-helmet";
import Header from "@components/Header/";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SSR Home Page</title>
        <meta name="description" content="this is panpan about page" />
      </Helmet>
      <Header></Header>
      <h2 onClick={() => alert("hello Home")}>This is Home</h2>
      <p>Home is the page of .... and more discribe</p>
    </div>
  );
};

export default Home;
