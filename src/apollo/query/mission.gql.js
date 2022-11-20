import { gql } from "@apollo/client";

// export const MISSIONS_QUERY = gql`
//   {
//     missions(limit: 10) {
//       description
//       id
//       manufacturers
//       name
//       twitter
//       website
//       wikipedia
//     }
//   }
// `;
export const MISSIONS_QUERY = gql`
  {
    missions(limit: 10) {
      description
      id
      manufacturers
      name
      twitter
      website
      wikipedia
      sponsors @client
    }
  }
`;
