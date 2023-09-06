/* eslint-disable */
import React from "react"
import ContactRow from './ContactRow';
import { useState, useEffect } from 'react';

export default function SelectedContact({selectedContactId, setSelectedContactId})  {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                setContact(result)

            } catch(error) {
                console.error(error)
            } 
        }
        fetchContact()
    }, [])

    
return (

    <>

    <table>
    <thead>
        <tr>
            <th colSpan="3">Contact List</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>
        <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
    </tbody>
    </table>
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>

    </>
)
}