import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

//landing
import Landing from "./sections/landing";
//summary
import Summary from "./sections/professional-summary";
//skills
import Skills from "./sections/skills";
//resume
import Resume from "./sections/resume";
//navbar
import Appbar from "./components/appbar";
//footer
import Footer from './components/footer'

export default function App() {
  return (
    <div className="container-fluid p-0 App">
      <Appbar />
      <Landing />
      <Summary />
      <Skills />
      <Resume />
      <Footer />
    </div>
  );
}
