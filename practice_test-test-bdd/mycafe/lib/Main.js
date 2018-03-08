

this.order = this.orderStorage.alreadyContains(order.withItems({
    title: '1 Expresso and 2 Mocaccino',
    items: [
        {beverage: 'expresso', quantity: 1},
        {beverage: 'mocaccino', quantity: 2}
    ],
    expectedTotalPrice: 6.10
}));


console.log(this.order);