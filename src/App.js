import React, { useState } from "react";
import Appointment from './Appointment';
import Patients from "./Patients";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Reports from "./Reports";

const title = ["Appointments", "Patients", "Reports"];

function App() {
  const [name, setName] = useState(title[0])
  const getActive = (active) => setName(title[active-1])


  return (
    <div className="App">
      <Navbar getActive={getActive} />
      <h1 className="main_title">{name}</h1>
      <hr className={`underline__${name}`} />

     {name=='Appointments'?<Appointment />: null}
     {name=='Patients'?<Patients />: null}
     {name=='Reports'?<Reports />: null}

      {/* <Appointment /> */}
    </div>
  );
}

export default App;
