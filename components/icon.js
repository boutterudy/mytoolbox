import React from 'react';

const Icon = ({ lib, icon, className, onClick }) => {
  let iconClass;
  switch (lib) {
    case 'boostrap':
      if (icon === undefined) {
        iconClass = className + ' bi';
      } else {
        iconClass = className + ' bi bi-' + icon;
      }
      break;
    default:
  }
  return <i className={iconClass} onClick={onClick}></i>;
};

export default Icon;
