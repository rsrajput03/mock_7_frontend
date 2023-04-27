import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Teacher = () => {
  return (
    <Box mt={"25px"} w={"100%"} padding={"15px"}>
      <Center>
        <Box w={{ base: "100%",sm:"100%",md:"70%",lg:"70%" }} m={"auto"} textAlign={"center"}>
          <Heading marginTop={"15px"} color={"#423f8d"}>
            Expert Teachers
          </Heading>
        </Box>
      </Center>
      <Center
        w={{ base: "100%",sm:"100%", md: "80%", lg: "60%" }}
        m={"auto"}
        textAlign={"center"}
      >
        <Text color={"#4c4995"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </Text>
      </Center>
      <Grid
        w={{base:"100%", sm: "100%", md: "100%", lg: "80%" }}
        m={"auto"}
        marginTop={"25px"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={"15px"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box>
          <Box>
            <Image
              width="100%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png"
              alt=""
            />
          </Box>
          <Box textAlign={"center"}>
            <Text color={"#4c4995"} fontWeight={"750"} >Amilia Kohly</Text>
            <Text>Sports Instructor</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              width="100%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png"
              alt=""
            />
          </Box>
          <Box textAlign={"center"}>
            <Text color={"#4c4995"} fontWeight={"750"}>Amilia Kohly</Text>
            <Text>Sports Instructor</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              width="100%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png"
              alt=""
            />
          </Box>
          <Box textAlign={"center"}>
            <Text color={"#4c4995"} fontWeight={"750"}>Amilia Kohly</Text>
            <Text>Sports Instructor</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              width="100%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png"
              alt=""
            />
          </Box>
          <Box textAlign={"center"}>
            <Text color={"#4c4995"} fontWeight={"750"}>Amilia Kohly</Text>
            <Text>Sports Instructor</Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Teacher;
