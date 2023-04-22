import Icon from './Icon/Icon';
import { Skill } from '@/src/typings/typings';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  console.log(skills);
  return (
    <section>
      <div>
        {skills.map((skill, idx) => (
          <Icon
            key={idx}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
