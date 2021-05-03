const schema = `#graphql
  type Messages {
    id: Int
    username: String
    msg: String
  }

  type Query {
    messages(limit: Int = 5): [Messages]
  }
`;

module.exports = schema;
