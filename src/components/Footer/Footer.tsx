import s from './Footer.module.sass';
import type { JSX } from 'react';
import ErrorButton from '../ErrorButton/ErrorButton';
import { NavLink } from 'react-router-dom';

function Footer(): JSX.Element {
  return (
    <footer className={'footer'} data-testid="footer-element">
      <div className={`container ${s.footerContainer}`}>
        <ErrorButton />
        <NavLink className={'app-button'} to="/about">
          {' '}
          About page
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
