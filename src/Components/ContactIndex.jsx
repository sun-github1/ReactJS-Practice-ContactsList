import React, { useState } from 'react';
import ContactActions from './ContactActions'
import CreateContact from './CreateContact';
import FavouriteContacts from './FavouriteContacts';
import OtherContacts from './OtherContacts';
import { getRandomUser } from '../Utilities/api';
import Spinner from './Spinner';

const _ = require("lodash");
const contactList = [
    {
        id: 1,
        name: "Ben Parker",
        phone: "666-666-7770",
        email: "ben@dotnetmastery.com",
        isFavorite: false,
    },
    {
        id: 2,
        name: "Kathy Patrick",
        phone: "111-222-0000",
        email: "kathy@dotnetmastery.com",
        isFavorite: true,
    },
    {
        id: 3,
        name: "Paul Show",
        phone: "999-222-1111",
        email: "paul@dotnetmastery.com",
        isFavorite: true,
    },
];

const ContactIndex = () => {
    const [contacts, setContacts] = useState(contactList);
    const [selectedContactForEdit, setSelectedContactForEdit] = useState(null);
    const [loading, setLoading] = useState(false);

    const addNewContactInList = (newContact) => {
        const maxId = _.maxBy(contacts, 'id') ? Number(_.maxBy(contacts, 'id').id) : 0;
        const contactToAdd = {
            ...newContact,
            id: maxId + 1
        };
        setContacts(prevList => _.concat(prevList, contactToAdd))
    }

    const updateContactInList = (updatedContact) => {
        setContacts(_.map(contacts, e => {
            if (e.id === updatedContact.id) {
                e.name = updatedContact.name;
                e.email = updateContactInList.email;
                e.phone = updateContactInList.phone;
            }
            return e;
        }));

    }

    const UpdateCreateContact = (contact) => {
        console.log('contact', contact);
        if (selectedContactForEdit)
            updateContactInList(contact);
        else
            addNewContactInList(contact);

        setSelectedContactForEdit(null);
    };

    const AddRandomContact = async () => {
        setLoading(true);
        const randomContact = await getRandomUser();
        addNewContactInList({
            name: randomContact.first_name,
            phone: randomContact.phone_number,
            email: randomContact.email,
            isFavorite: false
        });
        setSelectedContactForEdit(null);
        setLoading(false);
    }

    const RemoveAllContacts = () => {
        setContacts([]);
    }

    const DeleteContactFromList = (idToRemove) => {
        setContacts(prevList => _.filter(prevList, i => i.id !== idToRemove));
    }

    const SelectContactForEdit = (idToEdit) => {
        setSelectedContactForEdit(_.find(contacts, item => item.id === idToEdit));
    }

    const AddOrRemoveToFavorite = (idToAddOrRemoveToFav, addOrRemove) => {
        console.log('idToAddOrRemoveToFav', idToAddOrRemoveToFav);
        setContacts(prevList => _.map(prevList, (i) => {
            if (i.id === idToAddOrRemoveToFav)
                i.isFavorite = addOrRemove;
            return i;
        }));
    }

    const RemoveFromFavorite = (idToRemoveFromFav) => {
        AddOrRemoveToFavorite(idToRemoveFromFav, false);
    }
    const AddToFavorite = (idToAddToFav) => {
        AddOrRemoveToFavorite(idToAddToFav, true);
    }

    return (
        <>
            {loading && <Spinner />}
            <ContactActions addRandomContact={AddRandomContact} removeAllContacts={RemoveAllContacts} />
            <CreateContact addNewContact={UpdateCreateContact} selectedContactForEdit={selectedContactForEdit} />
            <FavouriteContacts favoriteContacts={_.filter(contacts, ['isFavorite', true])} removeFromFavorite={RemoveFromFavorite} selectIdForEdit={SelectContactForEdit} deleteContact={DeleteContactFromList} />
            <OtherContacts otherContacts={_.filter(contacts, e => !e.isFavorite)} addToFavorite={AddToFavorite} selectIdForEdit={SelectContactForEdit} deleteContact={DeleteContactFromList} />
        </>
    )
}

export default ContactIndex