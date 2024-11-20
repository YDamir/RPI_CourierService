import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class StatisticsComponent extends AbstractComponent {
  #statistics = null;

  constructor(statistics) {
    super();
    this.#statistics = statistics;
  }

  get template() {
    return `
      <section class="statistics">
        <div class="container">
          ${this.#statistics.map(stat => `
            <div class="stat-item">
              <img src="${stat.icon}" alt="${stat.alt}" class="stat-icon">
              <div>
                <span class="stat-number">${stat.number}</span>
                <p>${stat.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}
