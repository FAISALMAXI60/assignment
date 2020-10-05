import React from "react";
import "./App.css";
import Header from "./modules/header";
import Tabs from "./modules/tabs/index";
import Dividents from "./modules/dividents";
import Inverstments from "./modules/myInvestments";
import Investment from "./modules/programs";
import Footer from "./modules/footer";

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Dividents />
      <Inverstments/>
      <Investment/>
      <Footer/>
    </>
  );
}

export default App;
