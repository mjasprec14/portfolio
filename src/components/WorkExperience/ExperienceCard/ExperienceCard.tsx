import { Experience } from '@/src/typings/typings';
import { motion } from 'framer-motion';
import { urlFor } from '@/src/sanity/sanity.utils';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[320px] md:w-[600px] xl:w-[900px]  min-h-[650px] shadow-lg dark:bg-[#292929] p-4 md:p-10 opacity-60 hover:opacity-100 transition-opacity duration-200'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} company logo`}
        className='h-24 w-24 md:h-36 md:w-36 rounded-full object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-xl md:text-4xl font-light'>
          {experience?.jobTitle}
        </h4>
        <p className='md:text-2xl font-semibold md:mt-1 tracking-wider'>
          {experience?.company}
        </p>

        <div className='flex flex-wrap space-x-2 my-4'>
          {experience?.technologies.map((tech) => (
            <motion.img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              className='h-6 w-6 md:h-10 md:w-10 rounded-full'
            />
          ))}
        </div>

        <p className='text-xs md:text-sm uppercase pb-1 font-bold text-gray-300'>
          {experience?.dateStarted} - {experience?.dateEnded}
        </p>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='h-1 w-4/5 bg-gradient-to-r from-blue-600  via-red-500 to-[#F7AB0A]/80 rounded-xl mb-4'
        />

        <ul className='text-xs h-1/4 list-disc space-y-4 ml-4 md:text-lg md:h-44 overflow-y-scroll scrollbar-thin md:px-6'>
          {experience?.points.map((point: string, idx: number) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
