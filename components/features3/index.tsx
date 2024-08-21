import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          
          <Text h2 style={{color: 'orange'}}>Our Values</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
           Coral Consulting Services, we are driven by these core values as we work together towards achieving our mission and vision.
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                
                <Flex direction={"column"}>
                  <Text h5 style={{color: 'orange'}}>Client-centric Approach</Text>
                  <Text span>
                    Our clients are at the heart of everything we do. We listen,
                    understand their unique needs, and provide customized
                    solutions that exceed expectations. We build long-lasting
                    relationships based on trust, collaboration, and a deep
                    commitment to their success
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
               
                <Flex direction={"column"}>
                  <Text h5 style={{color: 'orange'}}>Excellence in Execution</Text>
                  <Text span>
                    We strive for excellence in every project we undertake.
                    Through meticulous planning, efficient execution, and
                    rigorous quality assurance processes, we ensure that our
                    deliverables are of the highest standards. Our attention to
                    detail and focus on continuous improvement set us apart.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
              
                <Flex direction={"column"}>
                  <Text h5 style={{color: 'orange'}}>Innovation and Adaptability</Text>
                  <Text span>
                    We embrace innovation and stay at the forefront of industry
                    trends and technologies. Our team of experts continually
                    expands their knowledge and skills to provide cutting-edge
                    solutions that help our clients stay ahead of the
                    competition. We adapt quickly to changing market dynamics
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
               
                <Flex direction={"column"}>
                  <Text h5 style={{color: 'orange'}}>Integrity and Transparency</Text>
                  <Text span>
                    We conduct ourselves with utmost integrity, honesty, and
                    transparency in all our interactions. We value open
                    communication and foster a culture of trust, both internally
                    and with our clients. Our ethical conduct is the foundation
                    of strong relationships and long-term partnerships
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
