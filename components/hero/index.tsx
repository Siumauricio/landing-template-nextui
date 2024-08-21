import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$15',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }} 
                     style={{color: 'orange'}}
                  >
               Coral Consulting Services
                  </Text>
                  <br/>
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                  >
             A modern way to transform your organization with {" "}
                  </Text>
                
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                     color="orange"
                  >
                   Elite IT Talent
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                 At CCS, we are not just in the business of IT staffing; we are in the business of transforming your organization with top-tier IT professionals who drive innovation and success.
               </Text>

              
               
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '700px',
                     objectFit: 'contain', 
                     borderRadius: '12px'
                  },
               }} 
               
            >
               <img src="mock.jpg" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
