/* eslint-disable jsx-a11y/accessible-emoji */
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
          <h2>yataxipro</h2>
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Домой</Link>
            </li>
            <li>
              <Link href="/bio">О нас</Link>
            </li>
            <li>
              <Link href="/portfolio">Партнёры</Link>
            </li>
            <li>
              <Link href="/posts">Блог</Link>
            </li>
            <li>
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
          <p className="copyright">
          <Link href="https://suyxhs-portfolio.vercel.app">👨🏻‍💻 Разработано - «suyxhs»</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
