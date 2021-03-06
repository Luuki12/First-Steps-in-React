import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({variant = '', ...otherProps}) => (

  Button.propTypes = {
    variant: PropTypes.node,
  },

  <button 
    {...otherProps}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />

);

export default Button;
