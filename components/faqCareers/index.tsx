import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import { QuotesIcon } from '../icons/QuotesIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const FaqCareers = () => {
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
              
               <Text h2 style={{color: 'orange'}}>FAQ - Careers</Text>
              
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
                     What is the company&rsquo;s stance on career advancement and promotions?
                     </Text>
                     <Text
                        span
                       
                     >
                       Company policies regarding career growth and promotions can vary, and it&apos;s advisable to check the company&apos;s official documentation, employee handbook, or reach out to their HR department for the most accurate and current information. It&apos;s common for companies in the IT industry to prioritize professional development, continuous learning, and career advancement opportunities, but the specifics would depend on the company&apos;s organizational culture and policies.
                     </Text>
                    
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                 
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}>
                     What is the company&rsquo;s approach to work-life balance?
                     </Text>
                     <Text
                        span
                       
                     >
                       Companies in the IT industry often recognize the importance of work-life balance, especially in roles related to staffing, immigration, outsourcing, remote infrastructure management, application management, cloud management, and system management. Many IT companies aim to create a supportive work environment by offering flexible work schedules, remote work options, and initiatives that promote employee well-being.
                     </Text>
                    
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
              
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}>
                     How does your company foster innovation and creativity among software development teams?  
                     </Text>
                     <Text
                        span
                     
                     >
                       In fostering innovation and creativity within our software development teams, our company embraces a multifaceted approach. We encourage a culture of continuous learning through regular training sessions and workshops, ensuring our teams are exposed to cutting-edge technologies. Cross-functional collaboration is promoted to leverage diverse perspectives, and dedicated time for personal projects encourages exploration of novel ideas. Our open communication channels provide a platform for team members to share insights and propose innovative solutions. By recognizing and rewarding inventive contributions, we aim to inspire a dynamic and creative environment that drives excellence in software development.
                     </Text>
                    
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
              
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3 style={{color: 'orange'}}>
                     What roles are available for individuals interested in working in outsourcing services?
                     </Text>
                     <Text
                        span
                      
                     >
                        Individuals interested in working in our outsourcing services can explore diverse roles within our company. These roles span project management, client relations, quality assurance, and technical support. Opportunities also exist in areas such as business analysis, process optimization, and team leadership. We value a collaborative and dynamic workforce, and our outsourcing services provide a platform for professionals to contribute to the success of our clients while honing their skills in a global business environment.
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
