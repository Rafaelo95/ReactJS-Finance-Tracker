import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useCollection } from "../../hooks/useCollection";

import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionList";

// styles
import "./Home.css";

export default function Home() {
  const { user } = useContext(AuthContext);
  const { documents, error } = useCollection(
    'transactions', 
    ["uid", "==", user.uid], 
    ['createdAt', 'desc']
    );

  console.log(user.uid)
  return (
    <div className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {documents && <TransactionList  transactions={documents}/>}
      </div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
