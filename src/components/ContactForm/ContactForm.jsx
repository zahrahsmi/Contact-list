import { useState } from "react";
import inputs from "../constant/inputs";
import "./ContactForm.css";

const ContactForm = ({ onClose, comfirmModalHandler, contact, setContact }) => {
  const [alert, setAlert] = useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.lastName || !contact.phone) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");

    comfirmModalHandler(contact);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{contact.id ? "Edit Contact" : "Add Contact"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputdiv">
            {inputs.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={contact[input.name]}
                onChange={changeHandler}
              />
            ))}
          </div>

          <div className="alert"> {alert && <p>{alert}</p>}</div>

          <div className="form-actions">
            <button className="formbtn add" type="submit">
              {contact.id ? "Save Changes" : "Add Contact"}
            </button>
            <button className="formbtn" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
