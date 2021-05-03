"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");

const config = require("./config");
const twitch = require("./twitch");
const schema = require("./schema");
const resolvers = require("./resolvers");

const app = Fastify();
twitch();

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: config.IS_DEV ? "playground" : false,
});

app.listen(3000);
