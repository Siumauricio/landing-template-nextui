import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';

export const Trusted = () => {
   return (
      <>
       
         
         <Flex
            direction={'column'}
            align={'center'}
            css={{  
               'mt': '$10',
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center', color: 'orange'}}>
               We collaborate with Top-Class MNCs
            </Text>

            
           
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                  <img src="warrior.png" />
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                  <img src="turing.png" />
                    
                  </Flex>
               </Grid>

               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                  <img src="highbrow.png" />
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                  <img src="warrior.png" />
                  </Flex>
               </Grid>

               
               
               
               
              
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '-$15'}}
         />
      </>
   );
};
