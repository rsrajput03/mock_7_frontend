import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Welcome = () => {
  return (
    <Box>
      <Center>
        <Box w={{ base: "100%",sm:"100%",md:"50%",lg:"50%" }} m={"auto"} textAlign={"center"}>
          <Heading textAlign={"center"} marginTop={"15px"} color={"#423f8d"}>
            Welcome to our{" "}
            <Heading textAlign={"center"} as={"span"} color="#ee1a94">
              Kindergarten
            </Heading>{" "}
          </Heading>
        </Box>
      </Center>

      <Center w={{ base: "100%",sm:"100%",md:"50%",lg:"70%" }} m={"auto"} textAlign={"center"}>
        <Text textAlign={"center"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue fowl male signs.
        </Text>
      </Center>
      <Grid  w={"80%"} m={"auto"} mt={"25px"} gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}  gap={"15px"} marginTop={"15px"}  alignItems={"center"}>
        <Flex flexDirection={"column"} gap="25px" w={{ base: "100%",md:"80%" ,lg:"80%" }} >
          <Box>
            <Flex  gap={"15px"} justifyContent={"space-between"} alignItems={"center"} >
              <Box>
                <img width={"120px"}
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Heading as={"h6"} color={"#519ad4"} fontSize={"25px"}>Inter School Sports</Heading>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex  gap={"15px"} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <img width={"120px"}
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Heading as={"h6"}  color={"#519ad4"} fontSize={"25px"}>Inter School Sports</Heading>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex  gap={"15px"} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <img width={"120px"}
                  src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Heading as={"h6"} color={"#519ad4"} fontSize={"25px"}>Inter School Sports</Heading>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box>
            <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png" alt="" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Welcome;
