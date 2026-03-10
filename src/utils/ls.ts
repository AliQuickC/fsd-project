export const getFromLSFindWord = (storeKEY: string): string => {
  const LocStor = localStorage.getItem(storeKEY) || '';
  if (!LocStor) {
    localStorage.setItem(storeKEY, '');
  }

  return LocStor;
};
