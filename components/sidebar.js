import React, { useState, useEffect } from 'react';
import style from '../styles/Sidebar.module.css';
import Icon from './icon';
import { useRouter } from 'next/router';

const Sidebar = ({ children }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setExpanded(false);
  }, [router.query.slug]);

  return (
    <div
      className={
        style.sidebar + (expanded === true ? ' ' + style.expanded : '')
      }
    >
      <Icon
        className={style.burger}
        lib='boostrap'
        icon={expanded === true ? 'x-square' : 'list'}
        onClick={() => setExpanded(!expanded)}
      />
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Sidebar;
