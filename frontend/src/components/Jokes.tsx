import { Spinner, Box, Main, Text } from 'grommet';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE } from '../queries/jokes';
import { IJoke } from '../interfaces/IJoke';

const Jokes: React.FC<{}> = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_RANDOM_JOKE);

  const randomJoke: IJoke = data?.randomJoke;

  if (loading) return <Spinner message='Loading...' size='xlarge' />;
  if (error) return <p>{error.message}</p>;

  return (
    <Box flex={false} direction='row-responsive' wrap>
      <Box gap='large' flex='grow' margin='medium' align='center'>
        <h2>Random joke from Chuck Norris!</h2>
        <pre>{JSON.stringify(randomJoke, null, '  ')}</pre>
      </Box>
    </Box>
  );
};

export default Jokes;
