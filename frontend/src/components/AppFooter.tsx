import { Anchor, Box, Footer, Text } from 'grommet';
import { FacebookOption, Twitter, Github } from 'grommet-icons';

export const AppFooter = () => (
  <Footer
    justify='center'
    align='center'
    flex={false}
    pad={{ vertical: 'xsmall', left: 'medium' }}
    responsive={false}
    background={{ color: 'brand', dark: false }}
    direction='row'
  >
    <Text color='white'>Connect </Text>
    <Box direction='row' gap='small'>
      <Anchor
        a11yTitle='Share feedback on Github'
        href='https://github.com/kluu1/what-the-chuck/'
        icon={<Github color='white' />}
      />
      <Anchor
        a11yTitle='Connect on facebook'
        href='https://www.facebook.com/'
        icon={<FacebookOption color='white' />}
      />
      <Anchor
        a11yTitle='Follow us on Twitter'
        href='https://twitter.com/'
        icon={<Twitter color='white' />}
      />
    </Box>
  </Footer>
);

export default AppFooter;
