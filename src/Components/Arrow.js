import React, { useState } from "react";
import arrow from "../img/arrow.svg";
import cross from "../img/cross.svg";
import "./Arrow.css";
function Arrow() {
    const [open, setOpen] = useState(false)
  return (
    <>
<img src={open?cross:arrow} className="arrow" onClick={()=>setOpen(!open)}/>
    </>
  );
}

export default Arrow;
