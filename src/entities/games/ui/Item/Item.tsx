import s from './Item.module.sass';
import { useSearchParams } from 'react-router-dom';
import type { IGame } from '../../model/types';
import { BookMarkButton } from '../../../../shared/ui';

type Props = {
  itemData: IGame;
  isSelect: boolean;
};

export function Item(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className={s.item + ' unselectable'}
      data-testid="card-element"
      onClick={() => {
        const starShipId = searchParams.get('item');
        if (!starShipId) {
          setSearchParams((params) => {
            params.set('item', props.itemData.id.toString());
            return params;
          });
        }
      }}
    >
      <div className={s.gameName}>{props.itemData.name}</div>
      <div className={s.releaseDate}>{props.itemData.released}</div>
      <BookMarkButton isSelect={props.isSelect} itemData={props.itemData} />
    </div>
  );
}
