import React, { useContext, useState } from 'react';
import { ContactContext } from './ContactContext';
import { useNavigate, useParams } from 'react-router-dom';

const AddContact = () => {
  const { contacts, addContact, updateContact } = useContext(ContactContext);
  const { id } = useParams();
  const navigate = useNavigate();

 
  const contact = id && Array.isArray(contacts) 
    ? contacts.find(contact => contact.id === parseInt(id)) 
    : null;

 
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [address, setAddress] = useState(contact ? contact.address : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contact ? contact.id : Date.now(), 
      name,
      email,
      phone,
      address
    };

    if (contact) {
      updateContact(newContact);
    } else {
      addContact(newContact);
    }

    navigate('/');
  };

  return (
    <div className="container">
      <h1>{contact ? 'Edit Contact' : 'Add Contact'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label>Full Name</label>
          <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group mb-1">
          <label>Email</label>
          <input className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group mb-1">
          <label>Phone</label>
          <input className="form-control" type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group mb-2">
          <label>Address</label>
          <input className="form-control" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        
        <button className="btn btn-primary col-12" type="submit">{contact ? 'Update' : 'Save'}</button>
      </form>
      <a className="text-primary" onClick={() => navigate(-1)}>or get back to contacts</a>
    </div>  
  );
};

export default AddContact;
