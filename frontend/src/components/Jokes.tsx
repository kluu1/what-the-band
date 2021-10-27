import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE } from '../queries/jokes';

const Jokes: React.FC<{}> = (): JSX.Element => {
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

export default Jokes;
