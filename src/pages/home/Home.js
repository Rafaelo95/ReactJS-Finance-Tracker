import { TransactionForm } from "./TransactionForm";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

// styles
import "./Home.css";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="content">transaction list</div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
