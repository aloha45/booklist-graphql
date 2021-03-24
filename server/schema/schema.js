const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLOjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data

let books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Sci-Fi", id: "2" },
  { name: "The Long Earth", genre: "Fantasy", id: "3" },
];

const BookType = new GraphQLOjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLOjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
