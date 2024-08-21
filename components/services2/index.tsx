import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
 
interface Services2Props {
   id?: string;
} 
 
export const Services2: React.FC<Services2Props> = ({ id }) => {
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
                  <Text h2 style={{color: 'orange'}}> LLM Services </Text>
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
                            Our LLM Services help you harness the power of advanced language models to meet your business needs. We specialize in providing tailored solutions for various applications such as natural language processing, text generation, sentiment analysis, and more. We understand the unique challenges of your industry and work closely with you to develop the most effective models to drive your success. Our expertise not only bridges the gaps in your projects but also enhances your outcomes with precision and impact. And rest assured, we stand behind the quality and reliability of the support we provide you.
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
             <img src="ai.jpg" />
            </Box>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
