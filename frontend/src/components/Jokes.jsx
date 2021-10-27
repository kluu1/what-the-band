import { useQuery } from '@apollo/client';
import { GET_JOKES } from '../queries/getJokes';

export default function Jokes() {
  const { data, loading, error } = useQuery(GET_JOKES);

  const jokes = data?.getJokes;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <pre>{JSON.stringify(jokes, null, '  ')}</pre>
    </>
  );
};


