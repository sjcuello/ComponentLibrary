import React from 'react';

interface NewComponentProps {
  name: string;
}

const NewComponent = ({ name }: NewComponentProps) => {
  console.log('name', name);
  return <div>New</div>;
};

export default NewComponent;
