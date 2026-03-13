import s from './ItemsList.module.sass';
import { type JSX } from 'react';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit/react';
import type { GamesData, IGame } from '../../../entities/games/model/types';
import { useCardList } from '../../../app/useAppSelector';
import {
  notDataMessage,
  responseErrorMessage,
} from '../../../shared/const/const';
import { Item } from '../../../entities/games';
import { Loader } from '../../../shared/ui';
import { getErrorInfo } from '../../../shared/utils/utils';
import { ItemHeader } from '../../../entities/games/ui/Item/ItemHeader';

interface Props {
  data: GamesData | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching: boolean;
}

function ItemsList(props: Props): JSX.Element {
  const { selectItems } = useCardList();

  let gameItems: React.JSX.Element[] | React.JSX.Element;

  if (props.error) {
    gameItems = <div className={'error-data'}>{getErrorInfo(props.error)}</div>;
  } else if (props.isFetching) {
    return <Loader />;
  } else if (props.data) {
    if (props.data.results.length === 0) {
      gameItems = <div className={s.errorData}>{notDataMessage}</div>;
    } else {
      gameItems = props.data.results.map((game: IGame) => {
        return (
          <Item
            key={game.id}
            itemData={game}
            isSelect={
              selectItems.findIndex((element) => element.id === game.id) !== -1
            }
          />
        );
      });
    }
  } else {
    gameItems = <div className={'error-data'}>{responseErrorMessage}</div>;
  }

  return (
    <div className={s.itemsList} data-testid="item-list-element">
      <ItemHeader
        itemData={{ description: 'Game', released: 'Release date' }}
      />
      {gameItems}
    </div>
  );
}

export default ItemsList;
