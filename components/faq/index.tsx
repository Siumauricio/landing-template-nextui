import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                  aliquet
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed condimentum, nisl ut aliquam
                        lacinia, nisl nisl aliquet aliquet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed condimentum, nisl
                        ut aliquam lacinia, nisl nisl aliquet aliquet Lorem
                        ipsum dolor sit amet, aliquam lacinia, nisl nisl aliquet
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing adipiscing elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, aliquet
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
