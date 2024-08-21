import { Button, Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features2 = () => {
  return (
    <> 
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 45}}> 
        <Text h2 style={{color: 'orange'}}>Our Strengths</Text>
 </div>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
        
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "0rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      > 
      
        <Flex direction="column" style={{ justifyContent: "center" }}>
          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$15",
              gap: "$20",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
                maxWidth: "500px", // Set a consistent width for each flex
              }}
            >
              <Card >
                <Card.Body>
                  <Flex css={{ gap: "0.5rem" }}>
                    <Flex direction={"column"}>
                      <Text h3 style={{color: 'orange'}}>Innovation</Text>
                      <Text span>
                        We stay at the forefront of technology trends and
                        leverage the latest tools and techniques to deliver
                        innovative solutions that give you a competitive edge.
                        Our team is constantly learning and adapting to ensure
                        we deliver the best outcomes for your business.
                      </Text>
                    </Flex>
                  </Flex>
                </Card.Body>
              </Card>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
                maxWidth: "500px", // Same width as above
              }}
            >
              <Card >
                <Card.Body>
                  <Flex css={{ gap: "0.5rem" }}>
                    <Flex direction={"column"}>
                      <Text h3 style={{color: 'orange'}}>Experience</Text>
                      <Text span>
                        With years of industry experience, we have a deep
                        understanding of the challenges businesses face and the
                        solutions needed to overcome them. We bring this
                        expertise to every project we undertake, ensuring
                        exceptional results.
                      </Text>
                    </Flex>
                  </Flex>
                </Card.Body>
              </Card>
            </Flex>
          </Flex>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "-$15",
              gap: "$20",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
                maxWidth: "500px", // Same width as above
              }}
            >
              <Card>
                <Card.Body>
                  <Flex css={{ gap: "0.5rem" }}>
                    <Flex direction={"column"}>
                      <Text h3 style={{color: 'orange'}}>Client Focus</Text>
                      <Text span>
                        We believe in building strong, long-term relationships
                        with our clients. Your success is our success, and we
                        are committed to providing personalized service, open
                        communication, and prompt support to meet your evolving
                        needs.
                      </Text>
                    </Flex>
                  </Flex>
                </Card.Body>
              </Card>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
                maxWidth: "500px", // Same width as above
              }}
            >
              <Card >
                <Card.Body>
                  <Flex css={{ gap: "0.5rem" }}>
                    <Flex direction={"column"}>
                      <Text h3 style={{color: 'orange'}}>Quality Assurance</Text>
                      <Text
                        span
                        css={{
                          maxWidth: "100%",
                        }}
                      >
                        We have a rigorous quality assurance process in place to
                        ensure that our deliverables meet the highest standards
                        of quality and reliability. We take pride in our work
                        and strive for excellence in everything we do.
                      </Text>
                    </Flex>
                  </Flex>
                </Card.Body>
              </Card>
            </Flex>
          </Flex>
        </Flex>

        {/* <Box
          css={{
            "& img": {
              width: "600px",
              objectFit: "contain",
              borderRadius: "12px",
            },
          }}
        >
          <img src="four.jpg" />
        </Box> */}
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
