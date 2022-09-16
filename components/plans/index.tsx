import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Plans = () => {
   return (
      <>
         <Flex
            css={{py: '$20', gap: '1rem', px: '$6'}}
            justify={'center'}
            wrap={'wrap'}
            direction={'column'}
            align={'center'}
         >
            <Flex direction={'column'} align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text>
               <Text h2>Flexible Plans</Text>
            </Flex>

            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'wrap'}
               justify={'center'}
            >
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Free
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              elit
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $0{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Get Started</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              1 Team Members
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              1 Website
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              1 GB Storage
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              1 TB Transfer
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Email Support
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Premiun
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              elit
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $19{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Get Started</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              5 Team Members
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              5 Website
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              5 GB Storage
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              5 TB Transfer
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Email Support
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Startup
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              elit
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $99{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Get Started</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              30 Team Members
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              30 Website
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              30 GB Storage
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              30 TB Transfer
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Email Support
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Entreprise
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              elit
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $199{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Get Started</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              100 Team Members
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              100 Website
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              100 GB Storage
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              100 TB Transfer
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Email Support
                           </Text>
                        </Flex>
                     </Box>
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
