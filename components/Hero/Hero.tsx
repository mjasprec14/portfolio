import React from 'react';

export type ProfileProps = {
  name: string;
  title: string;
};

const Hero = ({ name, title }: ProfileProps) => {
  return (
    <div>
      {name} Hero {title}
    </div>
  );
};

export default Hero;
