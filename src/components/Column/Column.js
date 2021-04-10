import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card'
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node.isRequired,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.titleColumn}<span className={styles.icon}><Icon name={this.props.icon} /></span></h3>

        <div>
          {this.state.cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        
      </section>
    )
  }
}

export default Column;