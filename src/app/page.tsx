import React from "react";
import Landing from "@/components/Landing";
import DisplayNavBar from "@/components/NavBar/DisplayNavBar";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <DisplayNavBar/>
      <Landing />
    </main>
  );
};

export default Home;
