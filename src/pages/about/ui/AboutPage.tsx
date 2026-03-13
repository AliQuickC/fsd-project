import s from './AboutPage.module.sass';
import { type JSX } from 'react';
import { NavLink } from 'react-router-dom';

function AboutPage(): JSX.Element {
  return (
    <div>
      <div className={`container `}>
        <h2>About</h2>
        <p>
          <span>Author: </span>
          <span className={s.authorName}>Alekhin Aleksandr</span>
        </p>
        <p>
          <span>Course: </span>
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noreferrer"
          >
            RS School React
          </a>
        </p>
        <NavLink className={`${s.homeButton} app-button`} to="/">
          Home page
        </NavLink>
      </div>
    </div>
  );
}

export default AboutPage;
