import PlansComponent from '../view/plans-component.js';
import { render } from '../framework/render.js';

export default class PlansPresenter {
  #container = null;
  #model = null;

  constructor(container, model) {
    this.#container = container;
    this.#model = model;
  }

  init() {
    const plansComponent = new PlansComponent(this.#model.plans);
    render(plansComponent, this.#container);
  }
}
