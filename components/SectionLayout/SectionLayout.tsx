import React, { useState } from 'react';

type ExtraInfoType = {
  extraInfo: string;
};

export default function SectionLayout<P>(
  WrappedComponent: React.ComponentType<P & ExtraInfoType>
) {
  const [extraInfo, setExtraInfo] = useState('');

  const ComponentWithExtraInfo = (props: P) => {
    return (
      <section>
        <WrappedComponent
          {...props}
          extraInfo={extraInfo}
        />
      </section>
    );
  };

  return ComponentWithExtraInfo;
}
