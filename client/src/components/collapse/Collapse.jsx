import "../../assets/css/collapse.css";
import { useState } from "react";
import IconChevron from "../icons/Chevron";

function Collapse(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={
          open ? "list-item reverse icon-wrapper" : "list-item icon-wrapper"
        }
        onClick={toggle}
      >
        <p>{props.title}</p>
        <div className="collapse-icon-chevron">
          <IconChevron />
        </div>
      </div>
      <div className="list-item-collapsed-text">
        {open && <div className="collapsed-text">{props.text}</div>}
      </div>
    </>
  );
}

export default Collapse;
