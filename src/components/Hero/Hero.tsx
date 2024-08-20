import Image from 'next/image';
import PandSrc from '../../../public/images/hero-pand.png';

export function Hero() {
  return (
    <section className="hero container" data-pw="hero">
      <h2
        className="hero__title"
        tabIndex={0}
        data-pw="hero-title"
      >
        Неделя панд в московском зоопарке!
      </h2>
      <p
        className="hero__description"
        tabIndex={0}
        data-pw="hero-description"
      >
        Панды являются символом Всемирного фонда дикой природы (<abbr title="World Wildlife Fund" data-pw="hero-abbr">WWF</abbr>).
        В последние годы усилия по сохранению видов, такие как Программа по восстановлению
        популяций (<abbr title="Программа по Восстановлению Популяций" data-pw="hero-abbr">ПВП</abbr>),
        способствовали увеличению числа панд в дикой природе. Панды также часто участвуют в
        международных программах обмена животных (<abbr title="Международная Программа Обмена Животных" data-pw="hero-abbr">МПОЖ</abbr>),
        что помогает распространять знания о сохранении этих замечательных существ.
      </p>
      <Image
        src={PandSrc}
        className="hero__image"
        alt="Изображение панды"
        data-pw="hero-image"
        priority
      />
    </section>
  );
}
