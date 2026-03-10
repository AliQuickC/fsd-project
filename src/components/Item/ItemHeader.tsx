import type { JSX } from 'react';
import s from './Item.module.sass';

type Props = {
  itemData: {
    description: string;
    released: string;
  };
};

export function ItemHeader(props: Props): JSX.Element {
  return (
    <div className={s.item + ' unselectable'}>
      <div className={s.gameName}>{props.itemData.description}</div>
      <div className={s.releaseDate}>{props.itemData.released}</div>
    </div>
  );
}
