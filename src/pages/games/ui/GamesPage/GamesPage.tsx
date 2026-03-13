import { useEffect, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../../../shared/hooks/useLocalStorage';
import { storeKEY } from '../../../../shared/const/const';
import { useActions } from '../../../../app/useActions';
import { Footer } from '../../../../widgets/Footer';
import GamesContent from '../GamesContent/GamesContent';
import { Header } from '../../../../widgets/Header';

export default function GamesPage(): JSX.Element {
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);
  const { setCardDetails } = useActions();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const item = searchParams.get('item');

  useEffect(() => {
    setCardDetails(item);
  }, [item, setCardDetails]);

  useEffect(() => {
    if (lsWord !== (search || '')) {
      setLSWord(search || '');
    }
  }, [lsWord, search, setLSWord]);

  return (
    <>
      <Header lsWord={lsWord} />
      <GamesContent />
      <Footer />
    </>
  );
}
