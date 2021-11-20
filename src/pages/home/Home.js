import { TransactionForm } from "./TransactionForm"

// styles
import "./Home.css"

export default function Home() {
    return (
      <div className="container">
        <div className="content">
          transaction list
        </div>
        <div className="sidebar">
          <TransactionForm />
        </div>
      </div>
    )
  }