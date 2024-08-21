import { Button, Card, Divider, Input, Text, Textarea } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const ContactUsForm = () => {
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
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{gap: '2rem', maxWidth: '800px', width: '100%'}}>
               <Card style={{padding: 20}}>
                  <Card.Body> 
                     <Text h2 style={{color: 'orange'}}>Contact Us</Text>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5', 
                        }}
                     >
                        <Flex direction={'column'} css={{gap: '1.5rem', width: '100%'}}>
                           <Input 
                              label="Name" 
                              placeholder="Enter your name" 
                              fullWidth 
                              required
                           />
                           <Input 
                              label="Email" 
                              placeholder="Enter your email" 
                              fullWidth 
                              required 
                           />
                           <Input 
                              label="Subject" 
                              placeholder="Enter the subject" 
                              fullWidth 
                           />
                           <Textarea 
                              label="Message" 
                              placeholder="Enter your message" 
                              fullWidth 
                              required 
                              rows={6} 
                           />
                           <Button 
                              auto 
                              style={{backgroundColor: 'orange'}}
                           >
                              Submit
                           </Button>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
       
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
