import {AbstractComponent} from '../framework/view/abstract-component.js';

export default class HeaderComponent extends AbstractComponent {
  get template() {
    return `
      <header class="header">
        <div class="container">
          <h1 class="logo">YumaNow<span>+</span></h1>
          <nav class="nav">
            <a href="#" class="active">Home</a>
            <a href="#">About Us</a>
            <a href="#">Orders</a>
            <a href="#">Blogs</a>
            <a href="#">Contact Us</a>
          </nav>
          <button class="login-btn">Login</button>
        </div>
      </header>
    `;
  }
}
