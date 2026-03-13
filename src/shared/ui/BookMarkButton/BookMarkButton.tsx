import s from './BookMarkButton.module.sass';
import SelectIcon from '../BookmarkIcon/SelectedBookmarkIcon';
import UnSelectIcon from '../BookmarkIcon/UnSelectedBookmarkIcon';
import { useActions } from '../../../app/useActions';
import type { IGame } from '../../../entities/games/model/types';

type Props = {
  isSelect: boolean;
  itemData: IGame;
};

export function BookMarkButton({ isSelect, itemData }: Props) {
  const { selectItem, unSelectItem } = useActions();

  const selectItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (isSelect) {
      unSelectItem(itemData.id);
    } else {
      selectItem(itemData);
    }
  };
  return (
    <button className={s.selectItemButton} onClick={selectItemHandler}>
      <svg
        className={s.buttonIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        viewBox="0 0 48 48"
      >
        {isSelect ? <SelectIcon /> : <UnSelectIcon />}
      </svg>
    </button>
  );
}
