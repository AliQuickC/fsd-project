import type { JSX } from 'react';
import s from './NotFoundPage.module.sass';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={s.errorSection}>
      <div className={`container ${s.errorPageContainer}`}>
        <h2 className="visually-hidden">Error 404</h2>
        <div>
          <span>return to: </span>
          <NavLink className={s.backToHomeButton} to="/">
            {' '}
            Home page
          </NavLink>
        </div>
        <img className={s.img404} src="./error404.jpg" alt="error404" />
      </div>
    </div>
  );
}
