import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Mission {
    sponsors: [String]
  }
`;
