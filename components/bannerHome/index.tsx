import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const BannerHome = () => {
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
            <Text
                     
                     css={{
                        display: 'inline', 
                       
               }} 
               style= {{textShadow: ' 0px 4px 4px lightgrey', fontSize: '4rem'}}
                     color="orange"
                  >
                  CORAL Consulting Services
                  </Text>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
