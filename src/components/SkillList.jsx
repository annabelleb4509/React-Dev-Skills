import SkillListItem from "./SkillListItem";


function SkillList({ skills }) {

  const skillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s} key={idx} />));
    return (
        <ul className="SkillList">
          {skillListItems}
        </ul>
      );
}

export default SkillList;