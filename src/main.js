import HeaderComponent from './view/header-component.js';
import HeroComponent from './view/hero-component.js';
import StatisticsModel from './model/statistics-model.js';
import StatisticsPresenter from './presenter/statistics-presenter.js';
import PlansModel from './mock/plans.js';
import PlansPresenter from './presenter/plans-presenter.js';
import FooterComponent from './view/footer-component.js';
import { render } from './framework/render.js';

// Контейнеры
const headerContainer = document.getElementById('header-container');
const heroContainer = document.getElementById('hero-container');
const statisticsContainer = document.getElementById('statistics-container');
const plansContainer = document.getElementById('plans-container');
const footerContainer = document.getElementById('footer-container');

// Рендеринг заголовка
const headerComponent = new HeaderComponent();
render(headerComponent, headerContainer);

// Рендеринг Hero Section
const heroComponent = new HeroComponent();
render(heroComponent, heroContainer);

// Рендеринг статистики
const statisticsModel = new StatisticsModel();
const statisticsPresenter = new StatisticsPresenter(statisticsContainer, statisticsModel);
statisticsPresenter.init();

// Рендеринг планов
const plansModel = new PlansModel();
const plansPresenter = new PlansPresenter(plansContainer, plansModel);
plansPresenter.init();

// Рендеринг подвала
const footerComponent = new FooterComponent();
render(footerComponent, footerContainer);
