describe('AvailabilityTests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  it('AltTests', () => {
    cy.getByData('header-logo')
      .should('have.attr', 'alt', 'Логотип московского зоопарка');

    cy.getByData('hero-image')
      .should('have.attr', 'alt', 'Изображение панды');

    cy.getByData('footer-logo')
      .should('have.attr', 'alt', 'Зоопарк работает при поддержке департамента культуры города Москвы');

    cy.getByData('cards-image')
      .eq(0)
      .should('have.attr', 'alt', 'Изображение рыбы');

    cy.getByData('cards-image')
      .eq(1)
      .should('have.attr', 'alt', 'Изображение аллигатора');

    cy.getByData('cards-image')
      .eq(2)
      .should('have.attr', 'alt', 'Изображение медведя');

    cy.getByData('cards-image')
      .eq(3)
      .should('have.attr', 'alt', 'Изображение быка');
  });

  it('TitleTests', () => {
    cy.getByData('hero-abbr')
      .eq(0)
      .should('have.attr', 'title', 'World Wildlife Fund');

    cy.getByData('hero-abbr')
      .eq(1)
      .should('have.attr', 'title', 'Программа по Восстановлению Популяций');

    cy.getByData('hero-abbr')
      .eq(2)
      .should('have.attr', 'title', 'Международная Программа Обмена Животных');
  });

  it('PlaceholderTests', () => {
    cy.getByData('form-input-name')
      .should('have.attr', 'placeholder', 'Имя');

    cy.getByData('form-input-count-tickets')
      .should('have.attr', 'placeholder', 'Количество билетов');

    cy.getByData('form-input-number')
      .should('have.attr', 'placeholder', 'Номер телефона');
  });

  it('AriaAttrsTests', () => {
    cy.getByData('form-input-name')
      .should('have.attr', 'aria-label', 'Введите ваше имя');

    cy.getByData('form-input-count-tickets')
      .should('have.attr', 'aria-label', 'Введите количество необходимых билетов');

    cy.getByData('form-input-number')
      .should('have.attr', 'aria-label', 'Введите ваш номер телефона');
  });

  it('RE-TabTests', () => {
    const expectedTabOrder = [
      'quick-navigation-item',
      'quick-navigation-item',
      'quick-navigation-item',
      'header-logo-link',
      'header-list-item',
      'header-list-item',
      'header-list-item',
      'header-button',
      'hero-title',
      'hero-description',
      'cards-card',
      'cards-card',
      'cards-card',
      'cards-card',
      'form-title',
      'form-input-name',
      'form-input-count-tickets',
      'form-input-number',
      'form-checkbox',
      'form-button',
      'footer-logo',
      'footer-link',
      'footer-link',
      'footer-email',
    ];

    // Перед маршрутом выше необходимо пройти url-бар
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);
    cy.realPress('Tab');
    cy.wait(1000);

    for (const element of expectedTabOrder) {
      cy.realPress('Tab');
      cy.wait(1000);
      cy.focused().should('have.attr', 'data-pw', element);
    }
  });

  it('RE-ClickTests', () => {
    cy.getByData('form-label-name').click();
    cy.focused().should('have.attr', 'data-pw', 'form-input-name');
  });

  it('AxeCoreTests', () => {
    cy.injectAxe();
    cy.checkA11y(undefined, {
      runOnly: {
        type: 'rule',
        values: ['color-contrast'],
      },
    }, (violations: any) => {
      const results = violations.map((violation: any) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help: violation.help,
        nodes: violation.nodes.map((node: any) => ({
          html: node.html,
          target: node.target,
          failureSummary: node.failureSummary,
        })),
      }));

      cy.writeFile('cypress-tests-results/cypress-contrast-test.json', results);
    });
  });
});
