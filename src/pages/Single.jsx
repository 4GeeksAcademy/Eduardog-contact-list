
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ContactContext } from "../contact/ContactContext";
import { useContext } from "react";

export const Single = (props) => {
  const { contacts } = useContext(ContactContext);
  const { theId } = useParams();
  const contact = contacts.find(c => c.id === parseInt(theId));

  return (
    <div className="container text-center">
      <h1 className="display-4">Contact: {contact?.name}</h1>
      <p>Email: {contact?.email}</p>
      <p>Phone: {contact?.phone}</p>
      <p>Address: {contact?.address}</p>
      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object
};