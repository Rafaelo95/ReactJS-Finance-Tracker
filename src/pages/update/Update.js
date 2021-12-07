import "./Update.css";

function Update() {
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
            <input type="text"></input>
          </div>

          <div>
            <label>Enter new amount</label>
            <input type="number"></input>
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
