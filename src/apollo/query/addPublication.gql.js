import { gql } from "@apollo/client";

export const ADD_PUBLICATION_MUTATION = gql`
  mutation addPublication($name: String!, $url: String!) {
    addPublication(name: $name, url: $url) @client
  }
`;
