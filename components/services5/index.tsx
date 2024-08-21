import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface Services5Props {
   id?: string;
 }
 
 export const Services5: React.FC<Services5Props> = ({ id }) => {
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
                  <Text h2 style={{color: 'orange'}}> Support </Text>
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
                             Our support services provide end-to-end assistance to help you resolve any technical issues that may arise. We offer a range of support services, including help desk support, network support, and system maintenance. Our experienced support technicians are available round the clock to provide prompt and reliable support to ensure that your business operations run smoothly.
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
             <img src="support.jpg" />
            </Box>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
