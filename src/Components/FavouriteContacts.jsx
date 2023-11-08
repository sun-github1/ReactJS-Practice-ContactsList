import React from 'react'
import ContactCard from './ContactCard';

const FavouriteContacts = ({favoriteContacts, removeFromFavorite, selectIdForEdit, deleteContact}) => {

    console.log('favoriteContacts: ',favoriteContacts);

  return (
    <div className="card my-3 bg-slate-600">
            <div className="card-body">
                <h5 className="card-title h5 self-center">Favourite</h5>
                {favoriteContacts && favoriteContacts.map(item=>(
                    <ContactCard bgColor='bg-slate-600'
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        phone={item.phone}
                        addRemoveFavorite={removeFromFavorite}
                        selectIdForEdit={selectIdForEdit} 
                        deleteContact={deleteContact}
                        isFavorite/>
                ))}
                
              
            </div>
        </div>
  )
}

export default FavouriteContacts