import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center', 

                  }} 
                  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20}}
               >
                  <Text h1 style={{color: 'orange'}}>10,000+ </Text> Happy Customers
               </Text>
               <Text
                  span 
                  h4
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                we strive to make exceptional technology better. We help to ensure complete satisfaction by providing complete solutions to accompany our software requirements, which helps for future growth and strong reference sources
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h1 css={{color: 'orange'}}>
                     $500K+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Revenue
                  </Text>
               </Flex>
              
               <Flex direction={'column'}>
                  <Text h1 css={{color: 'orange'}}>
                     150+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Professionals
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h1 css={{color: 'orange'}}>
                     15+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Teams
                  </Text>
               </Flex> 
               <Flex direction={'column'}>
                  <Text h1 css={{color: 'orange'}}>
                     10+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Products
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
