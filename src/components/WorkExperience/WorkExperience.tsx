'use client';
import { Experience } from '@/src/typings/typings';
import ExperienceCard from './ExperienceCard/ExperienceCard';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  console.log(experiences);
  return (
    <section id='experience'>
      <div className='h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>

        <div>
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
