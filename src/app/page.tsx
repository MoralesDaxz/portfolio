import React from "react";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <NavBar />
      <Landing />
    </main>
  );
};

export default Home;
