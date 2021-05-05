import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './SearchResults.scss';
import Container from '../Container/Container';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>Search results<span className={styles.icon}><Icon name={'search'} /></span></h3>
 
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div> 
        
        </section>
      </Container>
    );
  }
}

export default SearchResults;