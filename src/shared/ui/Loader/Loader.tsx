import type { JSX } from 'react';

export function Loader(): JSX.Element {
  return (
    <div>
      <img src="./loader.gif" alt="loader..." />
    </div>
  );
}
