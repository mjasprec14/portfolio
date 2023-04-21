'use client';
import { Experience } from '@/src/typings/typings';
import ExperienceCard from './ExperienceCard/ExperienceCard';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <section id='experience'>
      <div className='h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full md:px-10 justify-evenly items-center mx-auto'>
        <div className='w-full flex space-x-5 overflow-x-scroll p-4 md:p-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80'>
          {experiences?.map((experience) => (
            <div key={experience?._id}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
