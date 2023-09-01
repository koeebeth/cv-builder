import { useState } from 'react'
import Resume from './components/Resume'
import Form from './components/Form'
import './index.scss'
import defaultInfo from './defaultInfo'
import uniqid from 'uniqid'
import savePDF from './utils/savePDF'

function App() {
  let [info, setInfo] = useState(defaultInfo);
  
  function onInputChange (event) {
      setInfo({...info, [event.currentTarget.name]: event.currentTarget.value});
  }

  function onEduSubmit (form, id) {
    const newEdu = {
      id: id || uniqid(),
      name: form.name.value,
      degree: form.degree.value || '',
      start: form.start.value,
      end: form.end.value,
    }

    setInfo( prevInfo => {
      let newInfo = {...prevInfo};
      const index = newInfo.education.findIndex((elm) => elm.id === newEdu.id);
      if (index > -1) {
        newInfo.education[index] = newEdu;
      }
      else {
        newInfo.education = [...newInfo.education, newEdu]
      }
      return newInfo;
    })
  }

  function deleteEdu (id) {
    setInfo( prevInfo => {
      return {
        ...prevInfo,
        education: prevInfo.education.filter((elm) => elm.id !== id)
      }
    })
  }
  function onExpSubmit (form, id) {
    const newExp = {
      id: id || uniqid(),
      position: form.position.value,
      company: form.company.value,
      description: form.description.value,
      start: form.start.value,
      end: form.end.value,
    }

    setInfo( prevInfo => {
      let newInfo = {...prevInfo};
      const index = newInfo.experience.findIndex((elm) => elm.id === newExp.id);
      if (index > -1) {
        newInfo.experience[index] = newExp;
      }
      else {
        newInfo.experience = [...newInfo.experience, newExp]
      }
      return newInfo;
    })
  }

  function deleteExp (id) {
    setInfo( prevInfo => {
      return {
        ...prevInfo,
        experience: prevInfo.experience.filter((elm) => elm.id !== id)
      }
    })
  }

  function onSkillSubmit (form, id) {
    const skill = {
      id: id || uniqid(),
      name: form.skill.value
    }
    setInfo( prevInfo => {
      let newInfo = {...prevInfo};
      const index = newInfo.skills.findIndex((elm) => elm.id === skill.id);
      if (index > -1) {
        newInfo.skills[index] = skill;
      }
      else {
        newInfo.skills = [...newInfo.skilss, skill]
      }
      return newInfo;
    })
  }

  function deleteSkill (id) {
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        skills: prevInfo.skills.filter(skill => skill.id !== id)
      }
    })
  }

  const submitFns = {onEduSubmit, onExpSubmit, onSkillSubmit}
  const deleteItemFns = {deleteEdu, deleteExp, deleteSkill}

  return <div className='main'>
    <div>
      <div className='form'>
        <button type='button' onClick={() => savePDF('resume')}>Save as PDF</button>
        <Form onInput={onInputChange} info={info} onSubmit={submitFns} onDelete={deleteItemFns} />
      </div>
    </div>
    <div className='resume'>
      <Resume info={info} />
    </div>
  </div>
}

export default App
