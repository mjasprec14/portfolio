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
      <div className='h-screen flex flex-col text-left overflow-hidden md:flex-row max-w-full md:px-10 justify-evenly items-center mx-auto'>
        <div className='w-full flex space-x-5 overflow-x-scroll md:grid md:grid-flow-col md:overflow-x-auto p-4 md:p-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80'>
          {myArr.map((item) => (
            <ProjectCard
              key={item}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
