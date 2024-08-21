import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
              
               <Text h2 style={{color: 'orange'}}>Empowering Your Team with us</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     
                  }}
               >
                 At Coral Consulting Services, we believe that the power of technology can transform businesses and drive them towards success. As a leading staff augmenting company, we specialize in providing top-notch IT professionals to help organizations reach their full potential.


               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                 
                  <Flex direction={'column'}>
                     <Text h4 weight={'bold'} style={{color: 'orange'}}>
                       Understanding
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                          
                        }}
                     >
                       What sets us apart is our commitment to understanding your business needs and goals. We take the time to listen and collaborate with you, allowing us to provide tailored solutions that align with your organization’s vision. Whether you need short-term assistance for a specific project or long-term support for ongoing operations, we have the right talent to meet your needs.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                 
                  <Flex direction={'column'}>
                     <Text h4 weight={'bold'} style={{color: 'orange'}}>
                        Flexibility
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                          
                        }}
                     >
                      We pride ourselves on our ability to provide seamless integration of our staff into your existing team. Our professionals are not just skilled in their respective domains, but they also possess excellent communication and collaboration skills. They will seamlessly blend with your team, ensuring a smooth workflow and maximizing productivity.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                
                 
               </Flex>
            </Flex>
            <Flex align={'center'}>
            <Box
               css={{
                  '& img': {
                     width: '700px',
                     objectFit: 'contain', 
                     borderRadius: '12px'
                  },
               }} 
               
            >
               <img src="understand.jpg" />
            </Box>
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
