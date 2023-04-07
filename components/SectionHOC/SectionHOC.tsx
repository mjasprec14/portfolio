import React from 'react';

type Props = {
  component: React.ComponentType;
  componentId: string;
  componentCustomClass: string;
};

const SectionHOC = ({
  componentId,
  componentCustomClass,
  component: Component,
}: Props) => {
  const NewComponent = () => {
    let customClass = componentCustomClass;
    let id = componentId;
    return (
      <section
        className={customClass}
        id={id}
      >
        <Component />
      </section>
    );
  };

  return NewComponent;
};

export default SectionHOC;
