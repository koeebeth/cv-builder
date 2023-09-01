/* eslint-disable react/prop-types */
export default function GeneralForm ({onInput, info}) {
    return (
        <div className="general-info-form">
            <label>
                <div>First name:</div>
                <input type="text" name="firstName" onInput={onInput} defaultValue={info.firstName}/>
            </label>
            <label>
                <div>Last name:</div>
                <input type="text" name="lastName" onInput={onInput} defaultValue={info.lastName}/>
            </label>
            <label>
                <div>Position:</div>
                <input type="text" name="position" onInput={onInput} defaultValue={info.position}/>
            </label>
            <label>
                <div>Phone number:</div>
                <input type="tel" name="phone" onInput={onInput} defaultValue={info.phone}/>
            </label>
            <label>
                <div>E-mail:</div>
                <input type="email" name="email" onInput={onInput} defaultValue={info.email}/>
            </label>
            <label>
                <div>Location:</div>
                <input type="text" name="location" onInput={onInput} defaultValue={info.location}/>
            </label>
        </div>
    )
}