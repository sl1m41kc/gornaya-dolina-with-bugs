import React from 'react';
import classes from './footer.module.css';
import Link from 'next/link';
import clsx from 'clsx';

const Footer = () => {
  return (
    <div className="container">
      <footer className={classes.footer}>
        <p className={classes.text}>&copy;&nbsp;2024, Горная долина</p>
        <Link
          href={'https://axonix.ru/'}
          className={clsx(classes.text, classes.link)}
        >
          Разработка сайтов
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
