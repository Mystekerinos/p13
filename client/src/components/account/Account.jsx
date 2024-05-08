import React from "react";
import "../../assets/css/account.css";

const Account = ({ title, accountNumber, amount, description }) => {
  return (
    <div className="AccountWrapper">
      <div className="AccountContentWrapper">
        <h3 className="AccountTitle">
          {title} ({accountNumber})
        </h3>
        <p className="AccountAmount">{amount}</p>
        <p className="AccountAmountDescription">{description}</p>
      </div>
      <div className="AccountContentWrapperCta">
        <button className="TransactionButton">View transactions</button>
      </div>
    </div>
  );
};

export default Account;
