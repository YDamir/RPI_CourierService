export default class PlansModel {
    #plans = [
      { id: 1, name: 'Starter Plan', price: '$9.99/week', description: 'Ideal for light eaters' },
      { id: 2, name: 'Family Plan', price: '$19.99/week', description: 'Perfect for families' },
      { id: 3, name: 'Gourmet Plan', price: '$29.99/week', description: 'For fine dining lovers' },
    ];
  
    get plans() {
      return this.#plans;
    }
  }