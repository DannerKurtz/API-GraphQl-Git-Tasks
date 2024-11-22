const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

// Carregar todos os arquivos .gql (tipos GraphQL)
const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));

// Carregar todos os resolvers
const allResolvers = loadFilesSync(
  join(__dirname, "modules", "**", "resolvers.js")
);

// Mesclar os tipos e resolvers
const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
