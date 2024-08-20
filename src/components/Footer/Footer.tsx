import Image from 'next/image';
import Link from 'next/link';
import LogoSrc from '../../../public/images/footer-culture-logo.svg';

export function Footer() {
  return (
    <footer className="footer container" id="section-footer" data-pw="footer">
      <Image
        src={LogoSrc}
        className="footer__logo"
        alt="Зоопарк работает при поддержке департамента культуры города Москвы"
        data-pw="footer-logo"
        tabIndex={0}
        id="section-footer-focus"
      />
      <ul className="footer__rules">
        <li
          className="footer__list-item"
        >
          <Link
            href="#"
            data-pw="footer-link"
            aria-label="По щелчку переход на страницу с правилами посещения зоопарка"
          >
            Правила посещения зоопарка
          </Link>
        </li>
        <li
          className="footer__list-item"
        >
          <Link
            href="#"
            data-pw="footer-link"
            aria-label="По щелчку переход на страницу с правовой информацией зоопарка"
          >
            Правовая информация
          </Link>
        </li>
      </ul>
      <a
        className="footer__email"
        tabIndex={0}
        aria-label="Адрес электронной почты для связи"
        aria-hidden="true"
        data-pw="footer-email"
      >
        zoo@gmail.com
      </a>
    </footer>
  );
}
