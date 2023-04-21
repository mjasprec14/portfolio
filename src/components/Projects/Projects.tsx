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
      <div className='h-auto w-full flex space-x-5 overflow-x-scroll p-4 md:grid-auto-flow-row md:grid md:grid-cols-4 md:gap-4 md:p-20 md:space-x-0 md:h-screen xl:grid-cols-5 xl:gap-6 my-36 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80'>
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
