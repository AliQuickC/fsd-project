import s from './SelectedItems.module.sass';
import { useActions } from '../../redux/useActions';
import { useCardList } from '../../redux/useAppSelector';
import { downloadHandler } from './downloadHandler';

type Props = {
  selectedElements: number;
};

export function SelectedItems(props: Props) {
  const { unSelectAllItems } = useActions();
  const { selectItems } = useCardList();

  return (
    <div className={s.selectedItems}>
      <button
        className={'app-button'}
        onClick={() => {
          unSelectAllItems();
        }}
      >
        Unselect all
      </button>
      <p>
        <span>Selected elements: </span>
        <span data-testid="select-item-count">{props.selectedElements}</span>
      </p>
      <button
        className={'app-button'}
        onClick={() => {
          downloadHandler(selectItems);
        }}
      >
        Download
      </button>
    </div>
  );
}
