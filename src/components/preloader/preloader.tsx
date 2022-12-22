import React from 'react';

export function Preloader(): JSX.Element {
  return (
    <div className="progress">
      <div className="indeterminate" />
    </div>
  );
}
