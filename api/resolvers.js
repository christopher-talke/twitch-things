const db = require("./db");

const resolvers = {
  Query: {
    messages: async function () {
      const data = await db("messages").orderBy("id", "desc").limit(20);
      return data;
    },
  },
};

module.exports = resolvers;
