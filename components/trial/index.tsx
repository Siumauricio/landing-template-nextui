import {Button, Divider, Text,  Link as NextLink} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h2 style={{color: 'orange'}}>Get in touch with us</Text> 
            <Text h5> start a conversation with us that drives success!</Text>
          
            <NextLink href="/contact">
               <Button style={{ marginTop: 20, background: 'orange' }}>Contact us</Button> 
            </NextLink>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
