import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
  ButtonLabel,
  Input,
  SearchBar,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    nameImage: '',
  };

  onInputChange = evt => {
    this.setState({ nameImage: evt.currentTarget.value });
  };
  onSubmitForm = evt => {
    evt.preventDefault();
    if (this.state.nameImage === '') {
      return alert('Enter image name to search');
    } else {
      this.props.onSubmit(this.state.nameImage);
      this.setState({ nameImage: '' });
    }
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchButton type="submit">
            <FcSearch />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <Input
            value={this.state.nameImage}
            onChange={this.onInputChange}
            className="input"
            type="text"
            autoomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
