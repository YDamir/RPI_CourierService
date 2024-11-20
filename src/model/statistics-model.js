export default class StatisticsModel {
    #statistics = [
      { icon: 'images/icon-engagements.png', alt: 'Meals Delivered Icon', number: '50k+', description: 'Meals Delivered' },
      { icon: 'images/icon-clients.png', alt: 'Happy Customers Icon', number: '10k+', description: 'Happy Customers' },
      { icon: 'images/icon-return-clients.png', alt: 'Repeat Orders Icon', number: '8k+', description: 'Repeat Orders' },
      { icon: 'images/icon-reviews.png', alt: 'Positive Reviews Icon', number: '5k+', description: 'Positive Reviews' },
    ];
  
    getStatistics() {
      return this.#statistics;
    }
  }
  