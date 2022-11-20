import { useCallback, useState, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PUBLICATION_MUTATION } from "./apollo/query/addPublication.gql";

export const PublicationForm = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [addPublication, { data, loading, error }] = useMutation(
    ADD_PUBLICATION_MUTATION
  );

  const submitForm = useCallback(
    (e) => {
      e.preventDefault();
      addPublication({ variables: { name, url } });
      console.log(name, url);
    },
    [name, url, addPublication]
  );

  const results = useMemo(() => {
    return data?.addPublication;
  }, [data]);

  return (
    <form onSubmit={submitForm}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <legend>Submit a new publication:</legend>
      <input
        type="text"
        placeholder="Publication title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Publication URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Submit</button>
      <div>{results}</div>
    </form>
  );
};
