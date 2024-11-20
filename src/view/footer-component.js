import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class FooterComponent extends AbstractComponent {
  get template() {
    return `
      <footer>
        <div class="container">
          <p>&copy; 2024 YumaNow+. All Rights Reserved.</p>
          <nav class="footer-nav">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact</a>
          </nav>
          <div class="social-icons">
            <a href="#"><img src="images/VK Logo.png" alt="VK"></a>
            <a href="#"><img src="images/mail_icon_130883.png" alt="Mailru"></a>
            <a href="#"><img src="images/telegram.png" alt="Tg"></a>
          </div>
        </div>
      </footer>
    `;
  }
}
