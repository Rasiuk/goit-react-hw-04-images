import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

import {
  ButtonLabel,
  Input,
  SearchBar,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';

import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [nameImage, setNameImage] = useState('');

  const onInputChange = evt => {
    setNameImage(evt.currentTarget.value);
  };
  const onSubmitForm = evt => {
    evt.preventDefault();
    if (nameImage === '') {
      return toast('Enter image name to search');
    } else {
      onSubmit(nameImage);
      setNameImage('');
    }
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchButton type="submit">
          <FcSearch />
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <Input
          value={nameImage}
          onChange={onInputChange}
          className="input"
          type="text"
          autoomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
