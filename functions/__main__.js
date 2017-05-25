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
})

module.exports = (name = 'world', context, callback) => {

  broker.call("test.hello", { name })
    .then(res => callback(null, res))
    .catch(callback);

};
