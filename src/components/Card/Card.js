import React from 'react';
import styles from './Card.scss';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class Card extends React.Component {

  render() {
    const {title} = this.props;
    return (

      <section className={styles.component}>
        {title}
      </section>
    )
  }
}

export default Card;