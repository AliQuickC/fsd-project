import s from './Header.module.sass';
import { CacheControl } from '../../../features/CacheControl';
import { Search } from '../../../features/Search';

interface IProps {
  lsWord: string;
}

function Header(props: IProps) {
  return (
    <header className={s.header} data-testid="header-element">
      <div className={`container ${s.headerContainer} `}>
        <Search lsWord={props.lsWord} />
        <CacheControl />
      </div>
    </header>
  );
}

export default Header;
