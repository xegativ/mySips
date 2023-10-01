// function AddNew({ onClick, onClickAdd2 }) {
function AddNew({ onClickAdd }) {
  const handleSubmit = () => {
    onClickAdd();
  };

  return (
    <div className="box">
      {/* <div className="dB-navbar">
        <p>XXX</p>
      </div> */}
      <div className="add-new" onClick={handleSubmit}>
        <h1>+</h1>
      </div>
    </div>
  );
}

export default AddNew;
