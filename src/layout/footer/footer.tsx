import React from 'react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="footer-copyright">
        <div className="container">
          ©
          {' '}
          {currentYear}
          {' '}
          limestormrage
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/limestormrage"
            target="_blank"
            rel="noreferrer"
          >
            Git Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
