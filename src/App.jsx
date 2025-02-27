import React from "react";
import Header from "./components/Header/Header";
import { About } from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonails from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import ScheduleAppointment from "./components/ScheduleAppointment/ScheduleAppointment";
import AI from "./components/AI/AI";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      {/* <Projects />
      <Testimonails /> */}
      <Contact />
      <AI />
      <ScheduleAppointment />
      <Footer />
    </div>
  );
};

export default App;
