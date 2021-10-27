import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import AppBar from './components/AppBar';
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
        <AppBar>
          {' '}
          <Heading level='3' margin='none'>
            What the chuck?
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
      </Box>
      <Box>
        <Jokes />
      </Box>
    </Grommet>
  );
}

export default App;
