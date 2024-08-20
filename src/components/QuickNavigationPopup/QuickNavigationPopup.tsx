import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const sections = [
  {
    id: 'section-cards',
    label: 'Карточки',
    targetFocusId: 'section-cards-focus',
    ariaLabel: 'По щелчку переход к карточкам о разных животных',
  },
  {
    id: 'section-form',
    label: 'Форма',
    targetFocusId: 'section-form-focus',
    ariaLabel: 'По щелчку переход к форме покупки билетов',
  },
  {
    id: 'section-footer',
    label: 'Контакты',
    targetFocusId: 'section-footer-focus',
    ariaLabel: 'По щелчку переход к концу сайта',
  },
];

export function QuickNavigationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFocusIn = () => {
    setIsVisible(true);
  };

  const handleFocusOut = () => {
    setIsVisible(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const setFocusToSection = (targetFocusId: string) => {
    document.getElementById(targetFocusId)?.focus();
  };

  return (
    <nav
      className={`quick-navigation ${isVisible ? 'visible' : ''}`}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className="quick-navigation__link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section.id);
            setFocusToSection(section.targetFocusId);
          }}
          data-pw="quick-navigation-item"
          aria-label={section.ariaLabel}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
