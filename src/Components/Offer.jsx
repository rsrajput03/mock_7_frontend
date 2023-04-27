import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Offer = () => {
  return (
    <Box w={"100%"} m={"auto"} mt={"25px"} bg={"#fff2f9"} paddingBottom={"20px"}>
      <Center>
        <Center w={{ base: "100%",sm:"100%",md:"70%",lg:"70%" }} m={"auto"} >
          <Heading marginTop={"15px"} color={"#423f8d"}>
            Classes We Offer
          </Heading>
        </Center>
      </Center>
      <Box
        w={{ base: "100%", md: "80%", lg: "60%" }}
        m={"auto"}
        textAlign={"center"}
      >
        <Text>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </Text>
      </Box>
      <Grid w={"90%"} m={"auto"} marginTop={"25px"}  templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={"10px"}>
        <Box paddingBottom={"10px"}  bg={"white"} borderRadius={"30px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          <img width={"100%"}
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
            alt=""
          />
          <Box >
            <Heading paddingLeft={"15px"} as={"h6"} color={"#6663a2"} fontSize={"25px"}>Intelligent Challenge</Heading>
            <Text paddingLeft={"15px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              minus!
            </Text>
          </Box>
          <Flex gap={"15px"} alignItems={"center"} justifyContent={"center"}>
            <Box paddingLeft={"15px"} textAlign={"center"}>
              <Text fontWeight={"700"} color={"#ed078b"}>3-5</Text>
              <Text>Age Group</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#fdcd0f"}>30</Text>
              <Text>Classes</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#36a1d8"}>10/h</Text>
              <Text>Class Price</Text>
            </Box>
          </Flex>
        </Box>
        <Box bg={"white"} borderRadius={"30px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          <img width={"100%"}
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
            alt=""
          />
          <Box>
            <Heading paddingLeft={"15px"} as={"h6"} color={"#6663a2"} fontSize={"25px"}>Intelligent Challenge</Heading>
            <Text paddingLeft={"15px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              minus!
            </Text>
          </Box>
          <Flex gap={"15px"} alignItems={"center"} justifyContent={"center"}>
            <Box paddingLeft={"15px"} textAlign={"center"}>
              <Text fontWeight={"700"} color={"#ed078b"}>3-5</Text>
              <Text>Age Group</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#fdcd0f"}>30</Text>
              <Text>Classes</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#36a1d8"}>10/h</Text>
              <Text>Class Price</Text>
            </Box>
          </Flex>
        </Box>
        <Box bg={"white"} borderRadius={"30px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
          <img width={"100%"}
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png"
            alt=""
          />
          <Box>
            <Heading paddingLeft={"15px"} as={"h6"} color={"#6663a2"} fontSize={"25px"}>Intelligent Challenge</Heading>
            <Text paddingLeft={"15px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              minus!
            </Text>
          </Box>
          <Flex paddingLeft={"15px"} gap={"15px"} alignItems={"center"} justifyContent={"center"}>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"}  color={"#ed078b"}>3-5</Text>
              <Text>Age Group</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#fdcd0f"}>30</Text>
              <Text>Classes</Text>
            </Box>
            <Box textAlign={"center"}>
              <Text fontWeight={"700"} color={"#36a1d8"}>10/h</Text>
              <Text>Class Price</Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Offer;
