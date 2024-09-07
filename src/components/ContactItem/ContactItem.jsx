const ContactItem = ({
  data,
  openModal,
  onSelect,
  isSelected,
  setShowDeleteModal,
}) => {
  const { id, name, lastName, email, phone } = data;
  return (
    <div className={`contact-item ${isSelected ? "selected" : ""}`}>
      <li>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(id)}
        />

        <p>
          {name} {lastName}
        </p>
        <p>{email}</p>
        <p>{phone}</p>

        <div className="contact-actions">
          <button onClick={() => openModal(data)}>🖊</button>
          <button onClick={() => setShowDeleteModal(data)}>🗑</button>
        </div>
      </li>
    </div>
  );
};

export default ContactItem;
