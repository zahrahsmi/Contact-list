import { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

const ContactList = ({
  contacts,
  openModal,
  onDeleteSelected,
  setShowDeleteModal,
}) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const toggleSelectContact = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id)
        ? prev.filter((contactId) => contactId !== id)
        : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    onDeleteSelected(selectedContacts);
    setSelectedContacts([]);
  };

  return (
    <div className="contact-list">
      <h1>Contact List</h1>
      {contacts.length ? (
        <ul className="contacts">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              openModal={openModal}
              setShowDeleteModal={setShowDeleteModal}
              onSelect={toggleSelectContact}
              isSelected={selectedContacts.includes(contact.id)}
            />
          ))}
        </ul>
      ) : (
        <p className="message">No Data!</p>
      )}

      {selectedContacts.length > 0 && (
        <button className="delete-selected" onClick={handleDeleteSelected}>
          Delete Selected 🗑
        </button>
      )}
    </div>
  );
};

export default ContactList;
