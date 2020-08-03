import React from 'react';
import styles from '../description.module.css';

export const DescriptionElement = ({
  valueName, field, type, toggleField, fieldName, setValue, value,
}) => (
  <div className={styles.element}>
    {`${valueName}: `}
    {field
      ? (
        <input
          autoFocus
          type={`${type}`}
          onMouseOut={() => toggleField(`${fieldName}`)}
          onChange={(event) => setValue(event.target.value)}
        />
      )
      : <span onClick={() => toggleField(`${fieldName}`)}>{value}</span>}
  </div>
);
