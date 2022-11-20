import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Mission {
    sponsors: [String]
  }

  type Query {
    publications: [Publication]
  }

  type Publication {
    name: String!
    url: String!
  }
`;
