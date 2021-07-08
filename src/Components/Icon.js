import React from "react";
// import appointment from "../img/appointment.svg";
import "./Icon.css";

function icon({ id, name, active, setActive, open,title }) {
  const classes = () => {
    if (active && open) return "icon-active open";
    else if (active && !open) return "icon-active";
    else if (!active && open) return "icon open";
    else return "icon close";
  };
  return (
    <>
      <div className={classes()} onClick={() => setActive(id)}>
        <img id={id} src={name} alt="icon" />
        <h5 className={open?"title":"no__title"}><span style={active?{color:'#FF5A78'}:{color:"#FBF9FA"}}>{title}</span></h5>
      </div>
    </>
  );
}

export default icon;
