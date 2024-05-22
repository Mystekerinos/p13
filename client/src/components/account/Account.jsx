import React from "react";
import "../../assets/css/account.css";
import { useNavigate } from "react-router-dom";
const accounts = [
  {
    id: 1,
    name: "checking (x8349)",
    balance: 2082.79,
    type: "available",
  },
  {
    id: 2,
    name: "savings (x6712)",
    balance: 10928.42,
    type: "available",
  },
  {
    id: 3,
    name: "credit card (x8349)",
    balance: 184.3,
    type: "current",
  },
];

const Account = () => {
  const navigate = useNavigate();

  const handleViewTransactions = () => {
    navigate("/transactions");
  };
  return (
    <>
      {accounts.map((account) => (
        <article key={account.id} className="account">
          <div className="account_description">
            <div className="account_information">
              <div>argent bank {account.name}</div>
              <p className="currency">
                $ {account.balance.toLocaleString("en")}
              </p>
              <p className="available_bank">{account.type} balance</p>
            </div>
            <button
              className="account_btn"
              type="button"
              onClick={handleViewTransactions}
            >
              View transactions
            </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default Account;
