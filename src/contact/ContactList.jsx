import React, { useState, useContext } from 'react';
import { ContactContext } from './ContactContext';
import ContactCard from './ContactCard';

   

export const ContactList = () => {
    const { contacts, addContact } = useContext(ContactContext);
    const [newContact, setNewContact] = useState({ name: '', email: '', phone: '', address: '' });
    const [showModal, setShowModal] = useState(false);

    const handleAddContact = () => {
        if (newContact.name && newContact.email && newContact.phone && newContact.address) {
            addContact(newContact);
            setNewContact({ name: '', email: '', phone: '', address: '' });
            setShowModal(false);
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-success" onClick={() => setShowModal(true)}>Add a new contact</button>
            </div>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
            {showModal && (
                <div className="modal show d-flex align-items-center justify-content-center" style={{ display: 'block', height: '100vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-body">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Contact</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control mb-2" placeholder="Name" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
                                <input type="email" className="form-control mb-2" placeholder="Email" value={newContact.email} onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} />
                                <input type="text" className="form-control mb-2" placeholder="Phone" value={newContact.phone} onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} />
                                <input type="text" className="form-control mb-2" placeholder="Address" value={newContact.address} onChange={(e) => setNewContact({ ...newContact, address: e.target.value })} />
                            </div>
                            <div className="">
                                <button className="btn btn-primary col-12" onClick={handleAddContact}>Save</button>
                                <a className="d-flex justify-content-start" onClick={() => setShowModal(false)}>or get back to contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;