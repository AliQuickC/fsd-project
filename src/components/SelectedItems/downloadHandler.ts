import type { IGame } from '../../Types/types';
import { prepareSelectData } from '../../utils/prepareSelectData';

export const downloadHandler = (items: IGame[]) => {
  const downloadCsv = (filename: string, array: string[][]) => {
    const csvContent = array
      .map((row) =>
        row
          .map((field) => `"${field.toString().replace(/"/g, '""')}"`)
          .join(',')
      )
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportArray = prepareSelectData(items);
  downloadCsv(
    `${exportArray.length - 1 + ''}_game${exportArray.length > 2 ? 's' : ''}.csv`,
    exportArray
  );
};
