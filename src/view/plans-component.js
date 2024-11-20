import {AbstractComponent} from '../framework/view/abstract-component.js';

export default class PlansComponent extends AbstractComponent {
  #plans = null;

  constructor(plans) {
    super();
    this.#plans = plans;
  }

  get template() {
    return `
      <section class="package-plans">
        <h2>Meal Plans</h2>
        <p>Choose the perfect plan that fits your lifestyle and taste buds!</p>
        <div class="plan-cards">
          ${this.#plans.map(plan => `
            <div class="plan-card">
              <h3>${plan.name}</h3>
              <p>${plan.price}</p>
              <span>${plan.description}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}
