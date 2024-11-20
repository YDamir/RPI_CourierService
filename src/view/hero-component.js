import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class HeroComponent extends AbstractComponent {
  get template() {
    return `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h2>Delicious Meals Delivered<br><span class="highlight">The Easy Way</span></h2>
            <p>Enjoy fresh, tasty dishes brought straight to your door. Convenient, fast, and always satisfying — your favorite meals are just a click away!</p>
            <div class="hero-buttons">
              <button class="btn-primary">Order Now</button>
              <button class="btn-secondary">Explore Menu</button>
            </div>
          </div>
          <img src="images/hero.png" alt="Hero Image" class="hero-image">
        </div>
      </section>
    `;
  }
}
