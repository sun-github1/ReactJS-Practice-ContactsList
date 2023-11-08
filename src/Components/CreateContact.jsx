import React from 'react'

const CreateContact = ({addNewContact, selectedContactForEdit}) => {
    const handleAddcontact=(e)=>{
        console.log('e.target.elements',e.target.elements );
        e.preventDefault();
        addNewContact(
            {
                id : selectedContactForEdit ? selectedContactForEdit.id : null,
                name: e.target.elements.name.value.trim(),
                email: e.target.elements.email.value.trim(),
                phone: e.target.elements.phone.value.trim()
            }
        );
    }

    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title h5">Add a new Contact</h5>
                <p className="card-text pb-4">Fill up this form and to create a new contact.</p>
                <form onSubmit={handleAddcontact}>
                    <div className="flex justify-between">
                        <input type="text" className="form-control mr-2  bg-white"
                            placeholder="Name"
                            id="name" name="name"
                            defaultValue={selectedContactForEdit ? selectedContactForEdit.name : null}
                            />
                        <input type="email"
                            placeholder="Email"
                            className="form-control mr-1 bg-white" id="email" name="email"
                            defaultValue={selectedContactForEdit ? selectedContactForEdit.email : null}
                            />
                        <input type="text" className="ml-1 form-control  bg-white"
                            placeholder="Phone" name="phone" id="phone"
                            defaultValue={selectedContactForEdit ? selectedContactForEdit.phone : null}
                            />
                    </div>
                    <div className='w-full flex justify-center'>
                    <button type='submit' className="btn btn-primary mt-3 px-16">Create</button>
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default CreateContact