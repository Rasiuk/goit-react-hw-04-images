import { ButtonStyle } from './Button.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Button = ({ onLoadMore }) => {
  // if (this.props)
  return (
    <ButtonStyle type="button" onClick={onLoadMore}>
      Load more
    </ButtonStyle>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
