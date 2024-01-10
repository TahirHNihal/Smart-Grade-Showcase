import React from "react";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import StudentTableSec from "./components/StudentTableSec";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <HeroSec />

        {/*Begin Students table */}
        <StudentTableSec />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
