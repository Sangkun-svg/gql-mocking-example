import { useQuery } from "@apollo/client";
// 1. here is imported the publications query
import { PUBLICATIONS_QUERY } from "./apollo/query/publications.gql";

export const Publications = () => {
  // 2. here the query is used
  const { loading, error, data } = useQuery(PUBLICATIONS_QUERY);

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (!data?.publications?.length) {
    return "No publications found";
  }

  const { publications } = data;

  return (
    <>
      <h1>Publications</h1>
      <ol>
        {publications?.map((publication) => (
          <li key={publication.name}>
            <a href={publication.url}>{publication.name}</a>
          </li>
        ))}
      </ol>
    </>
  );
};
