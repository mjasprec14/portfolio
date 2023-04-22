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
      <div className='my-20 md:my-56 flex flex-col md:px-6 max-w-full justify-center items-center mx-auto'>
        <div className='w-full md:max-w-screen-xl flex overflow-x-scroll space-x-5 md:gap-3 xl:gap-y-10 md:space-x-0 md:grid md:grid-cols-4 xl:grid-cols-4 p-4 md:p-0 md:py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80'>
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
