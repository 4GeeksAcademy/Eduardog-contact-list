
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactContext } from "../contact/ContactContext";
import { useContext } from "react";

export const Demo = () => {
  const { store } = useGlobalReducer();
  const { contacts } = useContext(ContactContext);

  return (
    <div className="container">
      <h2>Contact List</h2>
      <ul className="list-group">
        {contacts?.map((contact) => (
          <li
            key={contact.id}
            className="list-group-item d-flex justify-content-between"
          >
            <Link to={`/single/${contact.id}`}>
              {contact.name} - {contact.email}
            </Link>
            <span>{contact.phone}</span>
          </li>
        ))}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
