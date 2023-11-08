import React from 'react'
import ContactCard from './ContactCard';

const OtherContacts = ({ otherContacts, addToFavorite, selectIdForEdit, deleteContact }) => {
    console.log('otherContacts: ', otherContacts);
    return (
        <div className="card my-3 bg-slate-900">
            <div className="card-body">
                <h5 className="card-title h5 self-center">Other contacts</h5>
                {otherContacts && otherContacts.map(item=>(
                    <ContactCard bgColor='bg-slate-900'
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        phone={item.phone}
                        addRemoveFavorite={addToFavorite}
                        selectIdForEdit={selectIdForEdit} 
                        deleteContact={deleteContact}/>
                ))}
            </div>
        </div>
    )
}

export default OtherContacts