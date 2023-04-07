import React from 'react';
import { ProfileProps } from '../Hero/Hero';

type SectionProps = {
  isVisible: boolean;
  component: React.ComponentType<ProfileProps>;
  Props: any;
};

const SectionLayout = ({
  isVisible,
  component: Component,
  Props,
}: SectionProps) => {
  return (
    <div className=''>
      <Component {...Props} />
    </div>
  );
};

export default SectionLayout;
