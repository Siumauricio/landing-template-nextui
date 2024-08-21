import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

export const Plans = () => {
  const jobs = [
    {
      title: "Software Engineer",
      description: "Develop cutting-edge software solutions for our clients. Work with a dynamic team in a fast-paced environment.",
    },
    {
      title: "Product Manager",
      description: "Lead the development and launch of innovative products. Collaborate across teams to ensure success.",
    },
    {
      title: "UX Designer",
      description: "Design intuitive user interfaces and enhance the user experience across our digital and marketing platforms.",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to derive actionable insights. Work with large-scale data in a collaborative environment.",
    },
    {
      title: "DevOps Engineer",
      description: "Maintain and optimize our infrastructure. Work closely with the development team to ensure smooth deployment.",
    },
    {
      title: "Marketing Specialist",
      description: "Create and implement marketing strategies that drive growth. Engage with our audience through various channels.",
    },
    {
      title: "Customer Support",
      description: "Provide top-tier support to our clients. Resolve a wide range of issues and queries to ensure customer satisfaction.",
    },
    {
      title: "HR Manager",
      description: "Manage the recruitment process and ensure a positive work environment. Support employee development and satisfaction.",
    },
  ];

  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6',  }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text h2 style={{color: 'orange'}}>Embark on a journey of success together with us!</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%', mt: '$16' }}
          wrap={'wrap'}
          justify={'center'}
        >
          {jobs.map((job, index) => (
            <Card key={index} css={{ p: '$6', mw: '400px', height: '260px' }}>
              <Card.Header>
                <Grid.Container css={{ pl: '$6' }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: '$xs' }}>
                      {job.title}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: '$accents8' }}>
                      {job.description}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: '$4' }}>
                <Button css={{ mt: '$7', mb: '$12', background: 'orange', fontWeight: 'bolder' }}>
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
