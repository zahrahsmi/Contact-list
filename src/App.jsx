import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBar from "./components/Search/SearchBar";
import ComfirmModal from "./components/ComfirmModal/ComfirmModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import Message from "./components/Message/Message";
import "./App.css";

const initialContact = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  phone: "",
};

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "zahra",
      lastName: "hesami",
      email: "zahrahesami026@gmail.com",
      phone: "09366760939",
    },
  ]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState();
  const [form, setForm] = useState({
    selectedItem: null,
    modal: null, // 'new' | 'edit' | 'delete' | 'confirm-save'
  });

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  const deleteSelectedContacts = (ids) => {
    setContacts(contacts.filter((contact) => !ids.includes(contact.id)));
  };

  const openModal = (contact) => {
    if (contact) {
      setForm({
        selectedItem: contact,
        modal: "edit",
      });
    } else {
      setForm({
        selectedItem: initialContact,
        modal: "new",
      });
    }
  };

  const clearForm = () => {
    setForm({
      selectedItem: null,
      modal: null,
    });
  };

  const handleSearch = (query) => {
    setSearch(query);
  };

  const confirmSave = () => {
    const id = Math.random();
    // const contact = { ...form.selectedItem, id: form.selectedItem?.id || id };
    const currentContact = contacts.findIndex(
      ({ id }) => form.selectedItem.id === id
    );
    if (currentContact > -1) {
      contacts[currentContact] = form.selectedItem;
    } else {
      contacts.push({ ...form.selectedItem, id });
    }
    setContacts(contacts);
    setMessage(
      currentContact
        ? "Contact Added successfully"
        : "Contact Edited successfully"
    );
    setShowMessage(true);
    clearForm();
  };

  const confirmDelete = () => {
    setContacts(contacts.filter(({ id }) => id !== form.selectedItem.id));
    setMessage("Contact Deleted successfully");
    setShowMessage(true);
    clearForm();
  };

  const setShowDeleteModal = (contact) => {
    setForm({
      modal: "delete",
      selectedItem: contact,
    });
  };

  const cancelSave = () => {
    clearForm();
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }, [message]);

  return (
    <div className="app">
      <Message message={message} showMessage={showMessage} />
      <div className="search-and-add">
        <button className="add-contact" onClick={() => openModal()}>
          Add Contact +
        </button>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <ContactList
        contacts={filteredContacts ?? filteredContacts}
        openModal={openModal}
        onDeleteSelected={deleteSelectedContacts}
        setShowDeleteModal={setShowDeleteModal}
      />
      {["new", "edit"].includes(form.modal) && (
        <ContactForm
          contact={form.selectedItem}
          setContact={(contact) =>
            setForm((prev) => ({ ...prev, selectedItem: contact }))
          }
          onClose={clearForm}
          comfirmModalHandler={() =>
            setForm((prev) => ({ ...prev, modal: "confirm-save" }))
          }
        />
      )}
      {form.modal === "confirm-save" && (
        <ComfirmModal confirmSave={confirmSave} cancelSave={cancelSave} />
      )}
      {form.modal === "delete" && (
        <DeleteModal closeModal={clearForm} confirmDelete={confirmDelete} />
      )}
    </div>
  );
};

export default App;
