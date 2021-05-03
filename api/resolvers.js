const db = require("./db");

const resolvers = {
  Query: {
    messages: async function () {
      const data = await db("messages").orderBy("id", "desc").limit(5);
      return data;
    },
  },
};

module.exports = resolvers;
