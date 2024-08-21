import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { QuotesIcon } from '../icons/QuotesIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Testimonials = () => {
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
               'flexDirection': 'column',
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
            <Flex direction="column" css={{ gap: '1.5rem', flex: 1, alignItems: 'center' }}>
               <Card css={{ width: "100%", maxWidth: "500px" }}>
                  <Card.Body>
                     <Flex css={{ gap: "0.5rem" }}>
                        <Flex direction={"column"}>
                           <Text h5 style={{ color: 'orange' }}>Our Mission</Text>
                           <Text span>
                              Empowering businesses through innovative solutions and exceptional talent, Coral Consulting Services is committed to delivering top-notch staff augmentation, professional services, software development, and application lifecycle support. We strive to be the trusted partner that enables our clients to achieve their goals, drive growth, and stay ahead in a rapidly evolving digital landscape.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card css={{ width: "100%", maxWidth: "500px" }}>
                  <Card.Body>
                     <Flex css={{ gap: "0.5rem" }}>
                        <Flex direction={"column"}>
                           <Text h5 style={{ color: 'orange' }}>Our Vision</Text>
                           <Text span>
                              To be the leading provider of technology solutions globally, recognized for our unwavering commitment to excellence, client satisfaction, and transformative impact. We aim to be the go-to partner for businesses seeking cutting-edge expertise, exceptional talent, and tailored solutions that drive innovation, productivity, and success.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>

            <Flex
               align={'start'}
               direction={'column'}
               css={{
                  'alignItems': 'center',
                  flex: 1,
                  '@sm': {
                     alignItems: 'start',
                  },
               }}
            >
               <Box
                  css={{
                     '& img': {
                        width: '100%', // Use 100% to make it responsive
                        maxWidth: '500px',
                        objectFit: 'contain',
                        borderRadius: '12px'
                     },
                  }}
               >
                  <img src="mission.jpg" alt="Mission" />
               </Box>
            </Flex>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
