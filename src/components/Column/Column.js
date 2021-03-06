import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';



class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
 
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div> 
        

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
        
      </section>
    );
  }
}

export default Column;