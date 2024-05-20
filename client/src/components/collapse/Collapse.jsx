import "../../assets/css/collapse.css";
import { useState } from "react";
import IconChevron from "../icons/Chevron";

const TransactionsText = [
  {
    id: 1,
    type: "Transaction type: electronic",
    category: "Category: food",
    notes: "Notes",
  },
];

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
        <div className="transaction-summary">{props.title}</div>
        <div className="collapse-icon-chevron">
          <IconChevron />
        </div>
      </div>
      <div className="list-item-collapsed-text">
        {open && (
          <div>
            {TransactionsText.map((transaction) => (
              <div className="transaction-details" key={transaction.id}>
                <p>{transaction.type}</p>
                <p>{transaction.category}</p>
                <p>{transaction.notes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Collapse;
