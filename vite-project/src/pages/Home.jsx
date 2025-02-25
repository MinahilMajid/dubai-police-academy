import React from "react";
import Header from "../components/Header";
import Resource from "../components/Resource";

const Home = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <Resource searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
