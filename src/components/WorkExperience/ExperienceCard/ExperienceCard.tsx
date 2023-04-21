import { Experience } from '@/src/typings/typings';
import { motion } from 'framer-motion';
import { urlFor } from '@/src/sanity/sanity.utils';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} company logo`}
        className='h-32 w-32 rounded-full object-cover object-center'
      />
    </article>
  );
};

export default ExperienceCard;
