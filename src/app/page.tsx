import React from "react";
import Landing from "@/components/main/Landing";
import DisplayNavBar from "@/components/navBar/DisplayNavBar";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <DisplayNavBar/>
      <Landing />
    </main>
  );
};

export default Home;
