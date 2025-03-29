import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTrash, faPen, faSquareEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import defaultImage from './telefono.png'; 

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteContact(contact.id);
    }
  };

  const loadImage = (imageName) => {
  
    return imageName ? `/src/assets/images/${imageName}.png` : defaultImage;
  };

  return (
    <div className="card p-1">
      <div className="d-flex">
        <img
          className="imagen col-2"
          src={loadImage(contact.imagen)}
          alt={`Foto de ${contact.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <div className="d-flex">
            <FontAwesomeIcon icon={faSquareEnvelope} />
            <p className="card-text">{contact.email}</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faPhoneFlip} />
            <p className="card-text">{contact.phone}</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="card-text">{contact.address}</p>
          </div>
        </div>
        <div>
          <button className="btn" onClick={() => navigate(`/edit/${contact.id}`)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
