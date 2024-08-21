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
               
               <Text h2 style={{color: 'orange'}}>FAQ - About us</Text>
             
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
                
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}>
                     What industries does the company serve?
                     </Text>
                     <Text
                        span
                      
                     >
                       Coral Consulting Services serves a diverse range of industries, providing comprehensive IT services, software development, professional training, outsourcing, and support solutions. Their expertise spans various sectors, including but not limited to finance, healthcare, technology, manufacturing, and more. By offering a broad spectrum of services, Warrior Tech Solutions aims to cater to the unique needs of businesses across different industries, helping them optimize their IT infrastructure, enhance software capabilities, and empower their workforce through training and support services.
                     </Text>
                    
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}>
                     Can you provide an overview of the company&rsquo;s mission and values?
                     </Text>
                     <Text
                        span
                        
                     >
                      Mission may revolve around delivering high-quality, innovative solutions to clients, fostering continuous learning and development through professional training, ensuring client satisfaction through reliable support services, and promoting excellence in software development. Values may emphasize integrity, collaboration, customer-centricity, and a commitment to staying at the forefront of technological advancements to provide cutting-edge solutions to their clients.
                     </Text>
                     
                  </Flex>
               </Flex>

               

               <Flex css={{gap: '$5'}} justify={'center'}>
                
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}> 
                     What is the company&rsquo;s commitment to customer satisfaction?
                     </Text>
                     <Text
                        span
                       
                     >
                      Our commitment to customer satisfaction is paramount. We strive to deliver excellence in IT services, software development, training, outsourcing, and support. By prioritizing client needs, maintaining open communication, and ensuring the highest quality in all our offerings, we aim to exceed expectations. Our customer-centric approach is geared towards building lasting partnerships, where client success and satisfaction are at the forefront of our business ethos.
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
