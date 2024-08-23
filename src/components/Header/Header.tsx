import Image from 'next/image';
import Link from 'next/link';
import MainLogoSrc from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header className="header container" data-pw="header">
      <Link
        href="/"
        className="header__link"
        aria-label="На главную страницу"
        data-pw="header-logo-link"
      >
        <Image
          src={MainLogoSrc}
          className="header__logo"
          alt="Логотип московского зоопарка"
          data-pw="header-logo"
        />
      </Link>
      <nav
				className="header__nav"
				data-pw="header-nav"
			>
        <ul
          className="header__list"
        >
          <li className="header__list-item">
            <Link
              href="#"
              data-pw="header-list-item"
            >
              О нас
            </Link>
          </li>
          <li className="header__list-item">
            <Link
              href="#"
              data-pw="header-list-item"
            >
              Галерея
            </Link>
          </li>
          <li className="header__list-item">
            <Link
              href="#"
              data-pw="header-list-item"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        type="button"
        className="header__btn"
        href="#"
        data-pw="header-button"
      >
        Купить билеты
      </Link>
    </header>
  );
}
