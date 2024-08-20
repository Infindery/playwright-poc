/* eslint-disable jsx-a11y/tabindex-no-positive */
import Image from 'next/image';
import Link from 'next/link';
import CamelImageSrc from '../../../public/images/camel.svg';
import BearImageSrc from '../../../public/images/bear.svg';
import SnakeImageSrc from '../../../public/images/Snake.svg';
import AlligatorImageSrc from '../../../public/images/Alligator.svg';

export function Cards() {
  return (
    <section className="cards container" id="section-cards" data-pw="cards">
      <ul className="cards__list">
        <li className="cards__list-item">
          <Link
            href="#"
            className="cards__link"
            aria-label="По щелчку переход на страницу о рыбах"
            data-pw="cards-card"
            id="section-cards-focus"
          >
            <Image
              src={CamelImageSrc}
              className="cards__image"
              alt="Изображение рыбы"
              data-pw="cards-image"
            />
          </Link>
        </li>
        <li className="cards__list-item">
          <Link
            href="#"
            className="cards__link"
            aria-label="По щелчку переход на страницу о аллигаторах"
            data-pw="cards-card"
          >
            <Image
              src={AlligatorImageSrc}
              className="cards__image"
              alt="Изображение аллигатора"
              data-pw="cards-image"
            />
          </Link>
        </li>
        <li className="cards__list-item">
          <Link
            href="#"
            className="cards__link"
            aria-label="По щелчку переход на страницу о медведях"
            data-pw="cards-card"
          >
            <Image
              src={BearImageSrc}
              className="cards__image"
              alt="Изображение медведя"
              data-pw="cards-image"
            />
          </Link>
        </li>
        <li className="cards__list-item">
          <Link
            href="#"
            className="cards__link"
            aria-label="По щелчку переход на страницу о быках"
            data-pw="cards-card"
          >
            <Image
              src={SnakeImageSrc}
              className="cards__image"
              alt="Изображение быка"
              data-pw="cards-image"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
