import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMoviesByName } from '../../API/MoviesAPI';
import FilmGallery from '../FilmGallery';
import { Oval } from 'react-loader-spinner';

import s from './FilmStatus.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function FilmsStatus({ filmName, queryURL }) {
  const [status, setStatus] = useState(Status.IDLE);
  const [films, setFilms] = useState([]);

  const fetchFilms = name => {
    fetchMoviesByName(name)
      .then(newFilms => {
        if (newFilms.total_results > 0) {
          setFilms(newFilms.results);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setStatus(Status.REJECTED);
      });
  };

  useEffect(() => {
    if (filmName === '' && queryURL !== null) {
      fetchFilms(queryURL);
      return;
    }
    if (filmName) {
      fetchFilms(filmName);
    }
  }, [filmName, queryURL]);

  if (status === Status.IDLE) {
    return <p className={s.message}>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <Oval wrapperClass="Loader" arialLabel="loading-indicator" />;
  }

  if (status === Status.REJECTED) {
    return <p>Sorry, something went wrong</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <FilmGallery films={films} />
      </>
    );
  }
}

FilmsStatus.propTypes = {
  filmName: PropTypes.string.isRequired,
  queryURL: PropTypes.string,
};

export default FilmsStatus;
