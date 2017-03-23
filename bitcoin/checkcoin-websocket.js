const WebSocketClient = require('websocket').client;

const connect = (channel, onMessage) => {
  var client = new WebSocketClient();

  client.on('connect', function (connection) {
    connection.on('message', function (message) {
      onMessage(message)
    });

    // send start message
    if (connection.connected) {
      const orderbookStartMessage = JSON.stringify({type: "subscribe", channel: channel})
      connection.send(orderbookStartMessage)
    }
  });

  client.connect('wss://ws-api.coincheck.com/', 'echo-protocol');
}
connect("btc_jpy-orderbook", (message) => {
  console.log("orderbook received: '" + message.utf8Data + "'");
})
connect("btc_jpy-trades", (message) => {
  console.log("trades received: '" + message.utf8Data + "'");
})

