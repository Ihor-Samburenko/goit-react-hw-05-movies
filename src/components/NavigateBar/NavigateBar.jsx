import { NavLink } from 'react-router-dom';

import scss from '../NavigateBar/navigate-bar.module.scss';

const NavigateBar = () => {
  return (
    <ul className={scss.navigate}>
      <NavLink className={scss.link} to="/">
        Home
      </NavLink>
      <NavLink className={scss.link} to="/movies">
        Movies
      </NavLink>
    </ul>
  );
};

export default NavigateBar;
