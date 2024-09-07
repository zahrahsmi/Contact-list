import "./DeleteModal.css";

function DeleteModal({ closeModal, confirmDelete }) {
  return (
    <div className="container">
      <div className="content">
        <h3>{}Are you sure you want to DELETE this contact?</h3>
        <button className="modal-btn delete" onClick={confirmDelete}>
          Yes
        </button>
        <button className="modal-btn" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
