import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface Services4Props {
   id?: string;
 }
 
 export const Services4: React.FC<Services4Props> = ({ id }) => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '0rem',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               'py': '$20',
               'flexDirection': 'column-reverse',
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
            <Flex direction="column" css={{gap: '1rem'}}>
               <Card style={{padding: 20}}>
                  <Card.Body> 
                  <Text h2 style={{color: 'orange'}}> Outsourcing </Text>
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
                            Our outsourcing services provide cost-effective solutions to help you manage your business processes more efficiently. We offer a range of outsourcing services, including data entry, customer support, finance and accounting, and more. Our experienced team of professionals ensures that your business processes are managed efficiently, allowing you to focus on your core business activities.
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
             <img src="outsourcing.jpg" />
            </Box>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
