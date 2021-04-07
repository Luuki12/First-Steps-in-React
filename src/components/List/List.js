import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column'

class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <main className={styles.component}>

        <Hero titleText={this.props.title} imageText={this.props.image} />
        
        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column titleColumn={'Animal'}  />
          <Column titleColumn={'Programer'} />
          <Column titleColumn={'Plants'} />
        </div>
        
      </main>
    )
  }
}

export default List;