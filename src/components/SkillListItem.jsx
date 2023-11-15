import '../SkillListItem.css'

const SkillListItem = ({ skill }) => {
    return (
      <li className="SkillListItem">
       {skill.name} <div className="level">Level{skill.level} </div> 
      </li>
    );
  };
  
  export default SkillListItem;