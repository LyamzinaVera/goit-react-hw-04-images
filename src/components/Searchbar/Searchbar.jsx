import { useState } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searcheQuery, setSearcheQuery] = useState('');

  const handleImageGhange = event => {
    setSearcheQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searcheQuery.trim() === '') {
      toast.info('Please enter your query in the search field', {
        autoClose: 1000,
        hideProgressBar: true,
        theme: 'colored',
      });
      return;
    }
    onSubmit(searcheQuery);
    setSearcheQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          Search
        </button>
        <input
          className={css.input}
          value={searcheQuery}
          onChange={handleImageGhange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };