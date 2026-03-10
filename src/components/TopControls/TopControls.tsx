import s from './TopControls.module.sass';
import Search from '../Search/Search';
import type { JSX } from 'react';
import { CacheControl } from '../CacheControl/CacheControl';

interface IProps {
  lsWord: string;
}

function TopControls(props: IProps): JSX.Element {
  return (
    <header className={s.header} data-testid="header-element">
      <div className={`container ${s.headerContainer} `}>
        <Search lsWord={props.lsWord} />
        <CacheControl />
      </div>
    </header>
  );
}

export default TopControls;
