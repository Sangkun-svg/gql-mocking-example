import { useQuery } from "@apollo/client";
import { MISSIONS_QUERY } from "./apollo/query/mission.query";

export const Mission = () => {
  const { loading, error, data } = useQuery(MISSIONS_QUERY);
  return (
    <>
      <h1>Missions</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data?.missions.map((mission) => {
        return (
          <div className="mission" key={mission.id}>
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
            <h3>Manufacturers:</h3>
            <ol>
              {mission.manufacturers?.map((manufacturer) => (
                <li key={`${mission.id}-${manufacturer}`}>{manufacturer}</li>
              ))}
            </ol>
            <h3>Links:</h3>
            <ul>
              {mission.twitter?.length && (
                <li>
                  <a href={mission.twitter}>{mission.twitter}</a>
                </li>
              )}
              {mission.website?.length && (
                <li>
                  <a href={mission.website}>{mission.website}</a>
                </li>
              )}
              {mission.wikipedia?.length && (
                <li>
                  <a href={mission.wikipedia}>{mission.wikipedia}</a>
                </li>
              )}
              <h3>Sponsors:</h3>
              <ol>
                {mission?.sponsors?.map((sponsor) => (
                  <li key={`${mission.id}-${sponsor}`}>{sponsor}</li>
                ))}
              </ol>
            </ul>
          </div>
        );
      })}
    </>
  );
};
