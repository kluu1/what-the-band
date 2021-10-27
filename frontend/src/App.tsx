import { Box, Heading, Grommet, Clock } from 'grommet';
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
          <Heading level='3' margin='none'>
            What the chuck?
          </Heading>
          <Clock type='digital' />
        </AppBar>
      </Box>
      <Box align='center'>
        <Jokes />
      </Box>
    </Grommet>
  );
}

export default App;
