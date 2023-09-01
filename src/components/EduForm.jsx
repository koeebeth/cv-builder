/* eslint-disable react/prop-types */
import { useState } from 'react'
import uniqid from 'uniqid'

export default function EduForm ({place, active, onSubmit, deleteItem}) {
    const [isActive, setIsActive] = useState(active);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(e.target, place.id);
        setIsActive(!isActive);
    }
    
    if (isActive) {
        return (
            <li>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" defaultValue={place.name || ''} placeholder='Name' required/>
                    <input type="text" name="degree" defaultValue={place.degree || ''} placeholder='Degree' />
                    <input type="text" name="start" defaultValue={place.start || ''} placeholder='Start date' required/>
                    <input type="text" name="end" defaultValue={place.end || ''} placeholder='End date' required/>
                    <div className="buttons">
                        <button>Save</button>
                        <button type='button' onClick={() => deleteItem(place.id)} >Delete</button>
                    </div>
                </form>
            </li>
        )
    }

    else {
        return (
            <li data-selector={place.id || uniqid()} onClick={() => setIsActive(!isActive)}>
                <h4>{place.name}</h4>
            </li>
        )
    }
}

