"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");

const config = require("./config");
const twitch = require("./twitch");
const schema = require("./schema");
const resolvers = require("./resolvers");

const app = Fastify();
twitch();

app.register(require("fastify-cors"), {
  origin: (origin, cb) => {
    if (/localhost/.test(origin)) {
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed"));
  },
});

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: config.IS_DEV ? "playground" : false,
});

app.listen(3000);
