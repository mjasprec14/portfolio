'use client';
import Icon from './Icon/Icon';
import { Skill } from '@/src/typings/typings';
import { motion } from 'framer-motion';
import { quote } from '../About/About.utils';
import { iconParent } from './Skills.utils';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <section id='skills'>
      <div className='min-h-screen max-w-7xl flex flex-col justify-center items-center mx-auto'>
        <motion.div
          variants={iconParent}
          initial='initial'
          whileInView='animate'
          className='grid px-6 grid-cols-4 gap-3 md:px-0 md:grid-cols-6 md:gap-6'
        >
          {skills.map((skill, idx) => (
            <Icon
              key={idx}
              skill={skill}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
