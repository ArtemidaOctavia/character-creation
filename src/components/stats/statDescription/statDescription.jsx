import React from 'react';

export const StatDescription = ({ stat }) => (
  <div>
    <div>{stat.getBonus().map((item, index) => <div key={index}>{item}</div>)}</div>
    {stat.description}
  </div>
);
