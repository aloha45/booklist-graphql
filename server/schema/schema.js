const graphql = require("graphql");

const { GraphQLOjectType, GraphQLString } = graphql;

const BookType = new GraphQLOjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});


