import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE } from '../queries/jokes';

export default function Jokes() {
  const { data, loading, error } = useQuery(GET_RANDOM_JOKE);

  const jokes = data?.randomJoke;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <pre>{JSON.stringify(jokes, null, '  ')}</pre>
    </>
  );
};


