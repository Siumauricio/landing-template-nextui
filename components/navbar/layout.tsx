import {Box} from '../styles/box';
import {Content} from './content';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => (
   <Box
      css={{
         maxW: '100%',
         background: '$background',
      }}
   >
      {children}
   </Box>
);
