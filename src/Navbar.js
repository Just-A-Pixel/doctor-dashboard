import React, { useState, useEffect } from "react";
import Icon from "./Components/Icon";
import appointment from "./img/appointment.svg";
import appointmentActive from "./img/appointmentActive.svg";
import list from "./img/list.svg";
import listActive from "./img/listActive.svg";
import report from "./img/report.svg";
import reportActive from "./img/reportActive.svg";
import arrow from "./img/arrow.svg";
import cross from "./img/cross.svg";

// import Arrow from "./Components/Arrow";
import "./Navbar.css";

function Navbar({ getActive }) {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const changeActive = (e) => setActive(e);

  
// eslint-disable-next-line
  useEffect(() => getActive(active), [active]);

  return (
    <div className={open ? "navbar__open" : "navbar"}>
      <img alt=""
        src={open ? cross : arrow}
        className="arrow"
        onClick={() => setOpen(!open)}
      />
      {/* <div></div> */}
      <br/>
      <Icon
        id={1}
        name={active === 1 ? appointmentActive : appointment}
        active={active === 1 ? 1 : 0}
        setActive={changeActive}
        open={open}
        title="Appointments"
      />
      <Icon
        id={2}
        name={active === 2 ? listActive : list}
        active={active === 2 ? 1 : 0}
        setActive={changeActive}
        open={open}
        title="Patients"
      />
      <Icon
        id={3}
        name={active === 3 ? reportActive : report}
        active={active === 3 ? 1 : 0}
        setActive={changeActive}
        open={open}
        title="Reports"
      />
    </div>
  );
}

export default Navbar;
