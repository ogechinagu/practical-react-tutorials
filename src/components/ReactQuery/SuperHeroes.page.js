import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`ooops... can't fetch data`);
        setIsLoading(false);
      }); // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className='rqoutlet'>
      <h2>Using normal method to get Super Heroes</h2>

      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Alter Ego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>
              <td>{hero.name}</td>
              <td>{hero.alterEgo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
