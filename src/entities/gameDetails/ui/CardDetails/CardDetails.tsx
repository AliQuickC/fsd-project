import s from './CardDetails.module.sass';
import { useSearchParams } from 'react-router-dom';
import { getErrorInfo } from '../../../../shared/utils/utils';
import { notDataMessage } from '../../../../shared/const/const';
import { useCardList } from '../../../../app/useAppSelector';
import useClickOutside from '../../../../shared/hooks/useClickOutside';
import { useGetGameDetailsQuery } from '../../api/gameDetailsApi';
import { Loader } from '../../../../shared/ui';

type Props = {
  item: string;
};

export default function CardDetails(props: Props) {
  const clickHandler = () => {
    setDetailsParam((params) => {
      params.delete('item');
      return params;
    });
  };

  const ref = useClickOutside(clickHandler);

  const [, setDetailsParam] = useSearchParams();
  const { enableCacheGameDetails } = useCardList();

  const { data, error, isLoading } = useGetGameDetailsQuery(props.item, {
    refetchOnMountOrArgChange: !enableCacheGameDetails,
  });

  return (
    <>
      <div ref={ref} className={s.cardDetails} data-testid="detail-element">
        <button
          className={s.closeButton + ' app-button'}
          onClick={clickHandler}
        >
          close
        </button>
        <div className={s.detailsDataPanel}>
          {error ? (
            <div className={'error-data'}>{getErrorInfo(error)}</div>
          ) : isLoading ? (
            <Loader />
          ) : data ? (
            <div className={s.detailsData}>
              <img
                className={s.gameImage}
                src={data.detailData?.background_image}
                alt="game image"
              />
              <p>
                <span>Name: </span>
                <span>{data.detailData?.name}</span>
              </p>
              <p>
                <span>Ganres: </span>
                <span>{data.detailData?.genres}</span>
              </p>
            </div>
          ) : (
            <div className={'error-data'}>{notDataMessage}</div>
          )}
        </div>
      </div>
    </>
  );
}
