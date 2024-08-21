import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface Services3Props {
   id?: string;
 }
 
 export const Services3: React.FC<Services3Props> = ({ id }) => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               'py': '$20',
               'flexDirection': 'column-reverse',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row-reverse',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{gap: '1.5rem'}}>
               <Card style={{padding: 20}}>
                  <Card.Body> 
                  <Text h2 style={{color: 'orange'}}> Software Development </Text>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5', 
                        }}
                     >
                      
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                             We offer comprehensive software development services to help you build custom software solutions tailored to your specific needs. Our team of experienced developers follows a proven methodology to deliver high-quality software solutions on time and within budget. We specialize in developing web applications, mobile apps, and enterprise software solutions for businesses of all sizes.
                           </Text>
                        
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

              
            </Flex>
            <Box
               css={{
                  '& img': {
                     width: '600px',
                     objectFit: 'contain', 
                     borderRadius: '12px'
                  },
               }} 
               
            >
             <img src="sde.jpg" />
            </Box>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
