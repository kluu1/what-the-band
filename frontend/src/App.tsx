import {
  Box,
  Heading,
  Grommet,
  Clock,
  Card,
  CardBody,
  CardFooter,
} from 'grommet';
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
          <Card background='light-2'>
            <CardBody pad='medium'>
              <Jokes />
            </CardBody>
            <CardFooter
              pad={{ horizontal: 'small' }}
              background='light-2'
            ></CardFooter>
          </Card>
        </Box>
        <AppFooter />
      </Box>
    </Grommet>
  );
};

export default App;
