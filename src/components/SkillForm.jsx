/* eslint-disable react/prop-types */
import { useState } from 'react'
import uniqid from 'uniqid'

export default function SkillForm ({skill, active, onSubmit, deleteItem}) {
    const [isActive, setIsActive] = useState(active);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(e.target, skill.id);
        setIsActive(!isActive);
    }
    
    if (isActive) {
        return (
            <li>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="skill" defaultValue={skill.name || ''} placeholder='Skill' required/>
                    <div className="buttons">
                        <button>Save</button>
                        <button type='button' onClick={() => deleteItem(skill.id)} >Delete</button>
                    </div>
                </form>
            </li>
        )
    }

    else {
        return (
            <li data-selector={skill.id || uniqid()} onClick={() => setIsActive(!isActive)}>
                <h4>{skill.name}</h4>
            </li>
        )
    }
}