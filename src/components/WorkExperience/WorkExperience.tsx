'use client';
import { Experience } from '@/src/typings/typings';
import ExperienceCard from './ExperienceCard/ExperienceCard';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <section id='experience'>
      <div className='min-h-screen flex flex-col text-left justify-evenly items-center mx-auto max-w-full mb-48 md:flex-row md:px-10 '>
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
