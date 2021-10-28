import { useState } from 'react';
import { Spinner, Box, Button, Select, Text } from 'grommet';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE } from '../queries/jokes';
import { IJoke } from '../interfaces/IJoke';

const options = [
  'random',
  'animal',
  'career',
  'celebrity',
  'dev',
  'explicit',
  'fashion',
  'food',
  'history',
  'money',
  'movie',
  'music',
  'political',
  'religion',
  'science',
  'sport',
  'travel',
];

const Jokes: React.FC<{}> = (): JSX.Element => {
  const [value, setValue] = useState('random');

  const { data, loading, error, refetch } = useQuery(GET_RANDOM_JOKE, {
    variables: { category: value },
  });

  const randomJoke: IJoke = data?.randomJoke;

  if (loading) return <Spinner message='Loading...' size='xlarge' />;
  if (error) return <p>{error.message}</p>;

  return (
    <Box gap='small' flex='grow' margin='medium' align='center'>
      <h2>Chuck Norris Facts</h2>
      <pre>{JSON.stringify(randomJoke, null, '  ')}</pre>

      <Text size='large'>Category:</Text>
      <Select
        options={options}
        value={value}
        onChange={({ option }) => setValue(option)}
      />
      <Button primary label='Get New Joke!' onClick={() => refetch()} />
    </Box>
  );
};

export default Jokes;
