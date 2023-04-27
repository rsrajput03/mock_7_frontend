import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box visibility={{base:"hidden",sm:"hidden",md:"hidden",lg:"visible"}} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={"100%"}>
    <Flex width={"80%"} m="auto"  alignItems={"center"} justifyContent={"center"} p={"10px"} marginTop={"10px"} >
      <Box>
        <img
          src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png"
          alt=""
        />
      </Box>
      <Spacer/>
      <Flex justifyContent={"space-between"} gap={"25px"} alignItems={"center"} >
        <Text color={"#43428f"} fontWeight={"bold"}>Home</Text>
        <Text color={"#43428f"} fontWeight={"bold"}>Class</Text>
        <Text color={"#43428f"} fontWeight={"bold"}>About</Text>
        <Text color={"#43428f"} fontWeight={"bold"}>Blog</Text>
        <Text color={"#43428f"} fontWeight={"bold"}>Contact</Text>
        <Button backgroundColor={"#12d9df"} color={"white"} borderRadius={"20px"} >Enroll Now</Button>
      </Flex>
    </Flex>
    </Box>
  );
};

export default Navbar;
