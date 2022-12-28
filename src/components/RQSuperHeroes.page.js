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
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
