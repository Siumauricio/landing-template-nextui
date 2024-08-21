import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface Services1Props {
   id?: string;
 }

export const Services1: React.FC<Services1Props> = ({ id }) => {
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
                  <Text h2 style={{color: 'orange'}}> IT Services </Text>
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
                              Our IT Services help you find the right talent to meet your business needs. We specialize in providing experienced professionals for various IT roles such as software engineers, project managers, database administrators, and more. We understand the unique requirements of your business and work closely with you to find the best-fit candidates to help you achieve your goals. Our staffing works, not only fills the blanks that are empty in the sentence but also finds a right and suitable word that gives complete sentence along with rightfull meaning. And also remember that we give guarantee for the support that we are providing to you.
                           </Text>
                        
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

              
            </Flex>
            <Box
               css={{
                  '& img': {
                     width: '500px',
                     objectFit: 'contain', 
                     borderRadius: '12px'
                  },
               }} 
               
            >
             <img src="server.jpg" />
            </Box>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
