import React from 'react';
import styles from '../description.module.css';

export const DescriptionElement = (props) => (
  <div className={styles.element}>
    {`${props.valueName}: `}
    {props.field
      ? (
        <input
          autoFocus
          type={`${props.type}`}
          onMouseOut={() => props.toggleField(`${props.fieldName}`)}
          onChange={(event) => props.setValue(event.target.value)}
        />
      )
      : <span onClick={() => props.toggleField(`${props.fieldName}`)}>{props.value}</span>}
  </div>
);
