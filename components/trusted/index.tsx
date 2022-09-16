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
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               Trusted by over 10000+ customers
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  <Flex align={'center'} justify={'center'}>
                     <AcmeLogo />
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 1
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 2
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 3
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 4
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 5
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 6
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 7
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 8
                     </Text>
                  </Flex>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
