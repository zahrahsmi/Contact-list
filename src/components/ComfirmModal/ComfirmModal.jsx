import "./ComfirmModal.css";

function ComfirmModal({ confirmSave, cancelSave }) {
  return (
    <div className="container">
      <div className="content">
        <h3>{}Are you sure you want to save this contact?</h3>
        <button className="btn save" onClick={confirmSave}>
          Yes
        </button>
        <button className="btn" onClick={cancelSave}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ComfirmModal;
``;
