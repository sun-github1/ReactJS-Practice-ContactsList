import React from 'react'

const ContactActions = ({addRandomContact, removeAllContacts}) => {
  return (
    <div className='flex justify-between'>
        <div className='w-full mr-2'>
        <button type="button" className="btn btn-success w-full" onClick={()=> addRandomContact()}>Add Random Contact</button>
        </div>
        <div className='w-full ml-2'>
        <button type="button" className="btn btn-danger w-full" onClick={()=> removeAllContacts()}>Remove All Contacts</button>
        </div>
    </div>
  )
}

export default ContactActions