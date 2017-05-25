/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/

const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
  logger: console
});

broker.createService({
  name: "test",
  actions: {
    hello(ctx) {
      return "Hello " + ctx.params.name
    }
  }
});

broker.createService({
  name: "math",
  actions: {
    add(ctx) {
      return Number(ctx.params.a) + Number(ctx.params.b);
    }
  }
});

module.exports = (context, callback) => {
  console.log(context.params);
  broker.call(context.params.action, context.params)
    .then(res => callback(null, res))
    .catch(callback);

};
