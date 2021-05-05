import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import {withRouter} from 'react-router';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    history: PropTypes.node,
  }

  static defaultProps = {
    text: settings.search.defaultText,
  }

  state = {
    value: '',
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`);
  }

  render() {
    const {text} = this.props;
    const {value} = this.state;
    const {icon} = settings.search;
    return (
      <Container>
        <div className={styles.component}>
          <input
            type='text'
            placeholder={text}
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
          </div>

        </div>
      </Container>
    );
  }
}

export default withRouter(Search);