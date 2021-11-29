import "./Home.css";

export function TransactionList({ transactions }) {
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className="name">{transaction.name}</p>
          <p className="amount">${transaction.amount}</p>
          <button className="delete"><i class="fas fa-trash-alt"></i></button>
          <button className="update"><i class="fas fa-pen"></i></button>
        </li>
      ))}
    </ul>
  )
}