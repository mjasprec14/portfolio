import { FaDev, FaLaptopCode, FaPaperPlane } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineHistory } from 'react-icons/md';

export interface NavItem {
  label: string;
  section: string;
  icon: React.ComponentType<{}>;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    section: '/',
    icon: AiFillHome,
  },
  {
    label: 'About',
    section: 'about',
    icon: BsPersonFill,
  },
  {
    label: 'Experience',
    section: 'experience',
    icon: MdOutlineHistory,
  },
  {
    label: 'Projects',
    section: 'projects',
    icon: FaLaptopCode,
  },
  {
    label: 'Skills',
    section: 'skills',
    icon: FaDev,
  },
  {
    label: 'Contact',
    section: 'contact',
    icon: FaPaperPlane,
  },
];
