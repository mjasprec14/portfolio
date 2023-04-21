import { VscGithubAlt } from 'react-icons/vsc';
import { BiLinkExternal } from 'react-icons/bi';
import { CiFolderOn } from 'react-icons/ci';

import { Skill } from '@/src/typings/typings';
import { urlFor } from '@/src/sanity/sanity.utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  skills: Skill[];
};

const ProjectCard = ({ skills }: Props) => {
  const reactIcon = skills?.filter(
    (skill) => skill.title.toLowerCase() === 'react'
  )[0];

  return (
    <div className='group h-58 w-58 rounded-lg shadow-lg px-6 py-8 flex flex-col justify-between dark:bg-[#292929] cursor-pointer hover:-translate-y-1 transition ease-in-out '>
      <div>
        <div className='flex flex-row items-start justify-between'>
          <CiFolderOn className='h-12 w-12' />

          <div className='flex space-x-3'>
            <Link href=''>
              <VscGithubAlt className='h-6 w-6 hover:text-[#F7AB0A]/80' />
            </Link>
            <Link href=''>
              <BiLinkExternal className='h-6 w-6 hover:text-[#F7AB0A]/80' />
            </Link>
          </div>
        </div>
      </div>

      <div className='space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-2xl text-gray-500 font-semibold tracking-wide dark:text-neutral-200 group-hover:bg-gradient-to-r from-blue-600  via-red-500 to-[#F7AB0A]/80 group-hover:bg-clip-text group-hover:text-transparent '>
            Project Name
          </h1>
          <p className='text-sm dark:text-neutral-200'>
            Fugiat Lorem elit amet duis excepteur voluptate tempor eu deserunt
            sit. Dolore ipsum aliquip do ad eiusmod elit officia exercitation
            consectetur cillum commodo nulla Lorem. Ut pariatur exercitation
            dolor labore elit deserunt eu fugiat qui ex ea.
          </p>
        </div>

        <div className='flex space-x-2'>
          <Image
            src={urlFor(reactIcon?.image).url()}
            className='h-6 w-6 rounded-full'
            alt={`${reactIcon?.title} icon`}
            width={100}
            height={100}
          />
          <Image
            src={urlFor(reactIcon?.image).url()}
            className='h-6 w-6 rounded-full'
            alt={`${reactIcon?.title} icon`}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
