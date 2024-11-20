import StatisticsComponent from '../view/statistics-component.js';
import { render } from '../framework/render.js';

export default class StatisticsPresenter {
  #container = null;
  #model = null;

  constructor(container, model) {
    this.#container = container;
    this.#model = model;
  }

  init() {
    const statistics = this.#model.getStatistics();
    const statisticsComponent = new StatisticsComponent(statistics);
    render(statisticsComponent, this.#container);
  }
}
