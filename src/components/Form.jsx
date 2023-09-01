/* eslint-disable react/prop-types */
import './Form.scss'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import SkillForm from './SkillForm'
import GeneralForm from './GeneralForm'

export default function Form ({info, onInput, onSubmit, onDelete}) {

    return (
        <>
            <fieldset>
                <legend>General Info</legend>
                <GeneralForm onInput={onInput} info={info} />
            </fieldset>
            <fieldset className='education-form'>
                <legend>Education</legend>
                <ul>
                    {info.education.map((place) => 
                        <EduForm key={place.id} place={place} onSubmit={onSubmit.onEduSubmit} deleteItem={onDelete.deleteEdu}/>
                    )}
                    <EduForm active={true} place={{}} key={0} onSubmit={onSubmit.onEduSubmit} deleteItem={onDelete.deleteEdu}/>
                </ul>
            </fieldset>
            <fieldset className='experience-form'>
                <legend>Experience</legend>
                <ul>
                    {info.experience.map((place) => 
                        <ExpForm place={place} key={place.id} onSubmit={onSubmit.onExpSubmit} deleteItem={onDelete.deleteExp}/>
                    )}
                    <ExpForm active={true} place={{}} key={0} onSubmit={onSubmit.onExpSubmit} deleteItem={onDelete.deleteExp}/>
                </ul>
            </fieldset>
            <fieldset className='skills-form'>
                <legend>Skills</legend>
                <ul>
                    {info.skills.map((skill) => 
                        <SkillForm key={skill.id} skill={skill} onSubmit={onSubmit.onSkillSubmit} deleteItem={onDelete.deleteSkill}/>
                    )}
                    <SkillForm active={true} skill={{}} key={0} onSubmit={onSubmit.onSkillSubmit} deleteItem={onDelete.deleteSkill}/>
                </ul>
            </fieldset>
        </>
    )
}