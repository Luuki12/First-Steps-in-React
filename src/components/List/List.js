import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';


class List extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <Hero />
      </main>
    )
  }
}

export default List;