  import HeaderComponent from '../view/header-component.js';
  import PlansModel from '../mock/plans.js';
  import PlansPresenter from '../presenter/plans-presenter.js';
  import { render } from '../framework/render.js';
  
  const headerContainer = document.getElementById('header-container');
  const plansContainer = document.getElementById('plans-container');
  
  // Рендеринг заголовка
  const headerComponent = new HeaderComponent();
  render(headerComponent, headerContainer);
  
  // Рендеринг планов
  const plansModel = new PlansModel();
  const plansPresenter = new PlansPresenter(plansContainer, plansModel);
  plansPresenter.init();
  