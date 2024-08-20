export function Form() {
  return (
    <section className="form container" id="section-form">
      <h2
        className="form__title"
        tabIndex={0}
        data-pw="form-title"
        id="section-form-focus"
      >
        Купить билети
      </h2>
      <form className="form__fields" id="form-buy-tickets" data-pw="form">
        <label htmlFor="name" className="form__label" data-pw="form-label-name">Имя:</label>
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder="Имя"
          aria-label="Введите ваше имя"
          data-pw="form-input-name"
          required
        />
        <label htmlFor="count" className="form__label" data-pw="form-label-cout-tickets">Количество билетов:</label>
        <input
          type="number"
          className="form__input"
          id="count"
          placeholder="Количество билетов"
          aria-label="Введите количество необходимых билетов"
          data-pw="form-input-count-tickets"
          required
        />
        <label htmlFor="number" className="form__label" data-pw="form-label-number">Телефон:</label>
        <input
          type="text"
          className="form__input"
          id="number"
          placeholder="Номер телефона"
          aria-label="Введите ваш номер телефона"
          data-pw="form-input-number"
          required
        />
        <label
          htmlFor="checkbox"
          className="form__label form__label--checkbox"
        >
          <input
            type="checkbox"
            className="form__checkbox"
            aria-label="По щелчку установка флажка согласия с обработкой персональных данных"
            data-pw="form-checkbox"
            required
          />
          Даю согласие на обработку персональных данных
        </label>
        <button
          className="form__btn"
          type="submit"
          data-pw="form-button"
        >
          Купить
        </button>
      </form>
    </section>
  );
}
