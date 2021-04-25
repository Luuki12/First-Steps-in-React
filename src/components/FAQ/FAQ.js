import React from 'react';
import Hero from '../Hero/Hero';
import {faqData} from './../../data/dataStore';
import Container from '../Container/Container';


const FAQ = () => (

  <Container>
    <h2><Hero titleText={faqData.title} imageText={faqData.image}/></h2>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;