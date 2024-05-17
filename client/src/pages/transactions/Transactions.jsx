import React from "react";
import Footer from "../../components/footer/Footer";
import "../../assets/css/transactions.css";
import Navbar from "../../components/navBar/NavBar";

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

const Transactions = () => {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default Transactions;
