import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [filmName, setFilmName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (filmName.trim() === '') {
      toast.error(`Please enter your search term`);
      return;
    }

    onSubmit(filmName);

    setFilmName('');
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <input
            value={filmName}
            onChange={event => setFilmName(event.currentTarget.value.toLowerCase())}
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button type="submit" className={s.searchFormButton}>
            <ImSearch />
          </button>
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
