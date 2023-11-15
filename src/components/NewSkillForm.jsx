import { useState } from 'react';
import '../NewSkillForm.css'

function NewSkillForm({addSkill}) {
    const [formData, setFormData] = useState({
        name: "",
        level: 3
    });

    function handleAddSkill(event){
        event.preventDefault();
        const newFormData = {
          ...formData,
          [event.target.name]: event.target.value
        }
        addSkill(newFormData);
        setFormData({ name: "", level: 3 })
      }

    function _handleChange (event) {
        const newFormData = {
            ...formData,
            [event.target.name]: event.target.value 
        };
        setFormData(newFormData)
    }

    return (
        <form onSubmit={handleAddSkill} className="NewSkillForm">
            <label>Skill</label>
            <input 
                type="text" 
                name='name'
                value={formData.name}
                onChange={_handleChange}
            />
            <label>Level</label>
            <select 
                name="level"
                value={formData.level}
                onChange={_handleChange}
            > 
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type='submit'>ADD SKILL</button>
        </form>
      );
}

export default NewSkillForm;