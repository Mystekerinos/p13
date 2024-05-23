import "../../assets/css/collapse.css";
import { useState } from "react";
import IconChevron from "../icons/Chevron";
import Pencil from "../icons/Pencil";

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
        <div className="collapse-icon-chevron">
          <IconChevron />
        </div>
        {props.title}
      </div>
      <div className="list-item-collapsed-text">
        {open && (
          <div>
            {TransactionsText.map((transaction) => (
              <div className="transaction-details" key={transaction.id}>
                <div className="transaction-type">
                  {transaction.type}
                  <Pencil />
                </div>
                <div className="transaction-category">
                  {transaction.category}
                  <Pencil />
                </div>
                <div className="transaction-notes">{transaction.notes}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Collapse;
