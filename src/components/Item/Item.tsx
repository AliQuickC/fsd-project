import type { JSX } from 'react';
import type { IGame } from '../../Types/types';
import s from './Item.module.sass';
import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { useActions } from '../../redux/useActions';
import SelectIcon from './SelectedBookmarkIcon';
import UnSelectIcon from './UnSelectedBookmarkIcon';

type Props = {
  itemData: IGame;
  isSelect: boolean;
};

export function Item(props: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectItem, unSelectItem } = useActions();

  const selectItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (props.isSelect) {
      unSelectItem(props.itemData.id);
    } else {
      selectItem(props.itemData);
    }
  };

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
      <button className={s.selectItemButton} onClick={selectItemHandler}>
        <svg
          className={s.buttonIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
        >
          {props.isSelect ? <SelectIcon /> : <UnSelectIcon />}
        </svg>
      </button>
    </div>
  );
}
