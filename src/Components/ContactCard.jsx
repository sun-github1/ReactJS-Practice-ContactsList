import React, { useState } from 'react'

const ContactCard = ({ bgColor, isFavorite, id, name, email, phone, addRemoveFavorite, selectIdForEdit, deleteContact }) => {
    const [selectedId, setSelectedId] = useState(id);
    return (
        <div className={`card my-2 ${bgColor}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-1">
                        <span className="badge text-bg-light text-xl">KP</span>
                    </div>
                    <div className="col-4">
                        <div className='text-yellow-600 h3'>{name || 'Kathy Patrick'}</div>
                        <div className=''>{email || 'kathy.patrick@gmail.com'}</div>
                        <div className=''>{phone || '111-222-0000'}</div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning" onClick={() => addRemoveFavorite(selectedId)}><i className={isFavorite?"bi bi-star-fill": "bi bi-star"}></i></button>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary mr-3" onClick={() => selectIdForEdit(selectedId)}><i className="bi bi-pencil-square"></i></button>
                        <button className="btn btn-danger" onClick={() => deleteContact(selectedId)}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard