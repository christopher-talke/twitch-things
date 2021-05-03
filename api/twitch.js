const tmi = require("tmi.js");
const config = require("./config");
const db = require("./db");

function twitch() {
  const opts = {
    identity: {
      username: "Eklat_",
      password: config.TWITCH_SECRET,
    },
    channels: ["eklat_"],
  };

  const client = new tmi.client(opts);

  client.on("message", onMessageHandler);

  client.on("connected", function (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  });

  client.connect();

  async function onMessageHandler(_, { username }, msg) {
    await db("messages").insert({
      username: username,
      msg: msg.trim(),
    });
  }
}

module.exports = twitch;
