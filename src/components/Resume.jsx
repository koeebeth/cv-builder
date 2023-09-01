/* eslint-disable react/prop-types */
import './Resume.scss'
import Call from '../assets/call.svg'
import Mail from '../assets/mail.svg'
import Location from '../assets/location.svg'

export default function Resume ({info}) {
    return (
        <div id='resume'>
            <div className="general-info">
                <h1>{info.firstName} {info.lastName}</h1>
                {info.position && <h2 className='position'>{info.position }</h2>}
                <div className='contact-info'>
                    {info.location && <h3 className='location'><img src={Location} /> {info.location}</h3>}
                    {info.phone && <h3 className='phone'><img src={Call} /> {info.phone}</h3>}
                    {info.email && <h3 className='email'><img src={Mail} /> {info.email}</h3>}
                </div>
            </div>
            <div className='education list'>
                <h2>Education</h2>
                <ul>
                    {info.education.map((place) => <Edu {...place} key={place.id} />)}
                </ul>
            </div>
            <div className='experience list'>
                <h2>Experience</h2>
                <ul>
                    {info.experience.map((place) => <Exp {...place} key={place.id} />)}
                </ul>
            </div>
            <div className='skills list'>
                <h2>Skills</h2>
                <ul>
                    {info.skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

function Edu (props) {
    return (
        <li>
            <h3>{props.name}</h3>
            {props.degree && <h4>{props.degree}</h4>}
            <div className='date'>{props.start} - {props.end}</div>
        </li>
    )
}

function Exp (props) {
    return (
        <li>
            <h3>{props.position}</h3>
            <h4>{props.company}</h4>
            <p>{props.description}</p>
            <div className='date'>{props.start} - {props.end}</div>
        </li>
    )
}
