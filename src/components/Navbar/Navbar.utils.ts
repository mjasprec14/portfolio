import { FaDev, FaLaptopCode, FaPaperPlane } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';

export interface NavItem {
  label: string;
  section: string;
  icon: React.ComponentType<{}>;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    section: 'home',
    icon: AiFillHome,
  },
  {
    label: 'About',
    section: 'about',
    icon: BsPersonFill,
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
