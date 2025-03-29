import React, { createContext, useState, useEffect } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(() => {
   
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [];
    });

    
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const fetchContacts = async () => {
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Eduardogp/contacts');
            const data = await response.json();
            
            if (Array.isArray(data)) {
                setContacts(data);
            } else if (data.contacts && Array.isArray(data.contacts)) {
                setContacts(data.contacts);
            } else {
                console.error("Unexpected API response format:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const addContact = async (contact) => {
        try {
            
            const newContact = { ...contact, id: Date.now() };
            setContacts(prevContacts => [...prevContacts, newContact]);
            
            
            await fetch('https://playground.4geeks.com/contact/agendas/Eduardogp/contacts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            });
            
           
            fetchContacts();
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };

    const updateContact = async (contact) => {
        try {
            // Primero actualizar localmente
            setContacts(prevContacts => 
                prevContacts.map(c => c.id === contact.id ? contact : c)
            );
            
            
            await fetch(`https://playground.4geeks.com/contact/agendas/Eduardogp/contacts/${contact.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            });
            
            fetchContacts();
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    const deleteContact = async (id) => {
        try {
            
            setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
            
            
            await fetch(`https://playground.4geeks.com/contact/agendas/Eduardogp/contacts/${id}`, {
                method: "DELETE"
            });
            
            fetchContacts();
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

   
    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};