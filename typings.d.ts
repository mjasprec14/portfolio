interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Social extends SanityBody {
  _type: 'social';
  url: string;
  title: string;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  title: string;
  progress: number;
  image: Image;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  summary: string;
  linkToBuild: string;
  image: Image;
  technologies: Technology[];
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  name: string;
  phoneNumber: string;

  heroImage: Image;
  profilePic: Image;
  socials: Social;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}