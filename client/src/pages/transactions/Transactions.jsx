import React from "react";
import Footer from "../../components/footer/Footer";
import "../../assets/css/transactions.css";
import Navbar from "../../components/navBar/NavBar";
import Collapse from "../../components/collapse/Collapse";
import { useSelector } from "react-redux";

const transactions = [
  {
    id: 1,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$5.00",
    balance: "$2082.79",
  },
  {
    id: 2,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$10.00",
    balance: "$2087.79",
  },
  {
    id: 3,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$20.00",
    balance: "$2097.79",
  },
  {
    id: 4,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$30.00",
    balance: "$2117.79",
  },
  {
    id: 5,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$40.00",
    balance: "$2157.79",
  },
  {
    id: 6,
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "$50.00",
    balance: "$2187.79",
  },
];
const accountTransactions = [
  {
    id: 1,
    name: "checking (x8349)",
    balance: 2082.79,
    type: "Available",
  },
];
const Transactions = () => {
  const accountTransaction = accountTransactions[0];
  const profile = useSelector((state) => state.user.profile);
  if (!profile) {
    return null;
  }
  const displayName = `${profile.body?.firstName || profile?.firstName} ${
    profile.body?.lastName || profile?.lastName
  }`;

  return (
    <>
      <Navbar displayName={displayName} />
      <main className="main bg-dark">
        <article className="account">
          <div className="account_description_transactions">
            <h3>argent bank {accountTransaction.name}</h3>
            <p className="balance">
              $ {accountTransaction.balance.toLocaleString("en")}
            </p>
            <p className="balance_price">{accountTransaction.type} balance</p>
          </div>
        </article>
        <div className="transaction-headers">
          <div className="transaction-header">Date</div>
          <div className="transaction-header">Description</div>
          <div className="transaction-header">Amount</div>
          <div className="transaction-header">Balance</div>
        </div>
        {transactions.map((transaction) => (
          <Collapse
            key={transaction.id}
            title={
              <div className="transaction-summary">
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>{transaction.amount}</p>
                <p>{transaction.balance}</p>
              </div>
            }
          >
            <div className="transaction-details">
              <p>
                <strong>Date:</strong> {transaction.date}
              </p>
              <p>
                <strong>Description:</strong> {transaction.description}
              </p>
              <p>
                <strong>Amount:</strong> {transaction.amount}
              </p>
              <p>
                <strong>Balance:</strong> {transaction.balance}
              </p>
            </div>
          </Collapse>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Transactions;
