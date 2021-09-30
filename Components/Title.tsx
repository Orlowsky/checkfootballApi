import React, { FC } from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
