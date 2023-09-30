function AddNew(props) {
  return (
    <div className="box">
      <div className="dB-navbar">
        <p>XXX</p>
      </div>
      <div className="dB-content" onClick={props.onClick}>
        <h1>Add new</h1>
      </div>
    </div>
  );
}

export default AddNew;
