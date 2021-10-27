import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import Header from './components/Header';
import Jokes from './components/Jokes';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box>
        <Header>
          {' '}
          <Heading level='3' margin='none'>
            What the chuck?
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </Header>
      </Box>
      <Box>
        <Jokes />
      </Box>
    </Grommet>
  );
}

export default App;
