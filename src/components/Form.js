import React, { useState, useContext } from 'react';
import { AlertContext } from '../contex/alert/alertContext';
import { FirebaseContext } from '../contex/firebase/firebaseContext';

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note was created', 'succsess')
            }).catch(() => {
                alert.show('Something goes wrong', 'danger')
            })
            alert.show('Was create new note', 'succsess')
            setValue('')
        } else {
            alert.show('Enter new note')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter name of the element"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}