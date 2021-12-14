import { useState } from "react";
import "./Update.css";

// https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference#update

function Update() {
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  console.log(window.location.href);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h4 className="updateTransaction">Update your transaction</h4>

      <div className="divForm">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Enter new name</label>
            <input
              type="text"
              required
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
            />
          </div>

          <div>
            <label>Enter new amount</label>
            <input
              type="number"
              required
              onChange={(e) => setNewAmount(e.target.value)}
              value={newAmount}
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
