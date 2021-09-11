import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer-style">
        <Link to="/" className="btn-home">
          <Button color="secondary">
            Home
          </Button>
        </Link>
      <p className='font-starjedi copyright'>© Copyright Stans 2021. All rights reserved</p>
    </footer>
  )
}

export default Footer;
