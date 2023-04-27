import { Box, Flex, Grid, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
// BsFacebook
// AiFillTwitterCircle
// BsLinkedin
// BsPinterest

const Footer = () => {
  return (
    <Box mt={"25px"} bg={"#4255a4"} overscrollBehaviorX={"none"}>
    <Box  m={"25px"} w={"100%"}  p={"15px"}>
      <Grid
        w={"100%"}
        m={"auto"}
        mt="25px"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="15px"
      >
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}>
          <Box>
            <Heading
              as="h5"
              fontSize={"35px"}
              marginTop={"15px"}
              color="#1a9bca"
            >
              Kin
              <Heading
                fontSize={"35px"}
                marginTop={"15px"}
                color="#e90887"
                as={"span"}
              >
                der
              </Heading>
              <Heading
                as={"span"}
                fontSize={"35px"}
                marginTop={"15px"}
                color="#fdcd0f"
              >
                gar
              </Heading>
              <Heading
                as={"span"}
                fontSize={"35px"}
                marginTop={"15px"}
                color="#1dcbd8"
              >
                ten
              </Heading>
            </Heading>
          </Box>
          <Box mt={"25px"} color={"white"} fontSize={"18px"}>
            <Text>
              Users and submit their own items. You can create different
              packages and by connecting with your PayPal or Stripe account
              charge users for registration.
            </Text>
          </Box>
          <Flex gap={"20px"} mt={"25px"} color={"white"}>
            <Box>
              <BsFacebook fill="white" size={"25px"} />
            </Box>
            <Box>
              <AiFillTwitterCircle fill="white" size={"25px"} />
            </Box>
            <Box>
              <BsPinterest fill="white" size={"25px"} />
            </Box>
            <Box>
              <BsLinkedin fill="white" size={"25px"} />
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Flex
          gap={"45px"}
          flexDirection={{ lg: "row", md: "row", base: "column" }}
        >
          <Box>
            <Heading as={"h6"} fontSize={"25px"} color={"white"}>
              Quick Links
            </Heading>
            <Box mt={"25px"} color={"white"} fontSize={"15px"}>
              <Text>Classes</Text>
              <Text>Join With us</Text>
              <Text>About</Text>
              <Text>Blog</Text>
              <Text>Events</Text>
            </Box>
          </Box>
          <Box>
            <Heading as={"h6"} fontSize={"25px"} color={"white"}>
              About Us
            </Heading>
            <Box mt={"25px"} color={"white"} fontSize={"15px"}>
              <Text>Our Team</Text>
              <Text>Privacy Policy</Text>
              <Text>Testimonial</Text>
              <Text>Programming</Text>
              <Text>User Stories</Text>
            </Box>
          </Box>
        </Flex>
      </Grid>
    </Box>
    </Box>
  );
};

export default Footer;
