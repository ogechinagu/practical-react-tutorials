import { useQuery } from 'react-query';
import axios from 'axios';

export const RQSuperHeroesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
  };
  const { isLoading, data, isError } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  ); // add error if you want to use error.message to render the server error message on if isError

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h1>{`ooops... can't fetch data`}</h1>;
  }
  return (
    <div className='rqoutlet'>
      <h2>Using RQ to get Super Heroes data</h2>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Alter Ego</th>
          </tr>
        </thead>
        <thead>
          {data?.data.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>
              <td>{hero.name}</td>
              <td>{hero.alterEgo}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
