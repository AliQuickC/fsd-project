import s from './ErrorButton.module.sass';
import React, { useState } from 'react';

function ErrorButton(): React.JSX.Element {
  const [isError, setIsError] = useState<boolean>(false);

  if (isError) {
    throw new Error('Wrong!!!');
  }

  return (
    <div className={s.errorButton}>
      <button
        className={s.trowButton}
        onClick={() => {
          setIsError(true);
        }}
      >
        generate throw
      </button>
    </div>
  );
}

export default ErrorButton;
