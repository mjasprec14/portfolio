import React from 'react';
import { Project, Skill } from '@/src/typings/typings';
import ProjectCard from './ProjectCard/ProjectCard';

type Props = {
  projects: Project[];
  skills: Skill[];
};

const Project = ({ projects, skills }: Props) => {
  const myArr = [1, 2, 3, 4, 5, 6];

  return (
    <section id='project'>
      <div className='h-screen w-full grid grid-cols-4 gap-4 p-20'>
        {myArr.map((item) => (
          <ProjectCard
            key={item}
            skills={skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
