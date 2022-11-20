import { gql } from "@apollo/client";

export const PUBLICATIONS_QUERY = gql`
  {
    publications @client {
      name
      url
    }
  }
`;
