import React from 'react';
import '../../styles/formInput.css';

const ListItem = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  const text = input.value.choice;
  const str1 = text.substr(0, 40);
  const str2 = text.substr(40, 50);
  return (
    <span>
      <span>{str1}</span>
      <span className="textExcess">{str2}</span>
    </span>
  );
};
export default ListItem;
