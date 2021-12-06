import "./Home.css";

import { useFirestore } from "../../hooks/useFirebase";

export function TransactionList({ transactions }) {
  const { deleteDocument, updateDocument } = useFirestore("transactions");
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className="name">{transaction.name}</p>
          <p className="amount">${transaction.amount}</p>
          <button className="delete" onClick={()=> deleteDocument(transaction.id)}>
            <i class="fas fa-trash-alt"></i>
          </button>
          <button className="update" onClick={() => updateDocument(transaction.id)}>
            <i class="fas fa-pen"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

// to fix UpdateDoc to render new component with modify-able data to be inserted by user...
// https://firebase.google.com/docs/reference/js/database.md#update