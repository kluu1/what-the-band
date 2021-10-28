import { Box, Heading, Grommet, Clock } from 'grommet';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
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

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <Grommet theme={theme} full>
      <Box fill background='light-3'>
        <AppBar>
          <Heading level='3' margin='none'>
            WHAT THE CHUCK?
          </Heading>
          <Clock type='digital' />
        </AppBar>
        <Box flex overflow='auto' gap='medium' pad='medium' align='center'>
          <Box
            flex={false}
            overflow='auto'
            round='large'
            background={{ color: 'dark-5', opacity: 'weak' }}
            direction='row'
            align='center'
            pad={{ horizontal: 'medium', vertical: 'small' }}
            margin={{ horizontal: 'medium', top: 'medium' }}
          >
            <Jokes />
          </Box>
        </Box>
        <AppFooter />
      </Box>
    </Grommet>
  );
};

export default App;
