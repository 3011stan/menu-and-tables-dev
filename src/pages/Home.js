import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

function Home(props) {
  const handleClick = (route) => {
    const { history } = props;
    history.push(route);
  };

  return (
    <>
      <div className="menu">
      <h1>MENU</h1>
      <ButtonGroup vertical>
        <Button className='font-starjedi' color="secondary" onClick={ () => handleClick('/posts') }
        >
          <h5>POSTAGENS</h5>
        </Button>
        <Button className='font-starjedi' color="secondary" onClick={ () => handleClick('/albuns')}>
          <h5>ALBUNS</h5>
        </Button>
        <Button className='font-starjedi' color="secondary" onClick={ () => handleClick('/todos')}>
          <h5>TO-DOs</h5>
        </Button>
      </ButtonGroup>
      </div>
      <p className='font-starjedi copyright'>© Copyright Stans 2021. All rights reserved</p>
    </>
  )
}

Home.propTypes = {
  history: PropTypes.array,
}
export default Home;
