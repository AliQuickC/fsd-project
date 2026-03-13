import s from './Footer.module.sass';
import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorButton } from '../../../features/ErrorButton';

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
