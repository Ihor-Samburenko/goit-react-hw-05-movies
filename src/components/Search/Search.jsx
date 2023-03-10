import { useState } from 'react';
import PropTypes from 'prop-types';

import { HiSearch } from 'react-icons/hi';
import scss from '../Search/Search.module.scss';

export const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={scss.searchbar}>
      <form onSubmit={handleSubmit} className={scss.form}>
        <button type="submit" className={scss.button}>
          <HiSearch />
        </button>

        <input
          name="query"
          value={query}
          onChange={handleChange}
          className={scss.input}
          type="text"
          placeholder="Search movies"
        />
      </form>
    </header>
  );
};

Search.prototype = {
  onSubmit: PropTypes.func,
};
