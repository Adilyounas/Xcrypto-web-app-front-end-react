import React from "react";
import {
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import imgb from "../assets/btc.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{ height: "80vh" }}
        animate={{ translateY: "20px" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          filter={"grayScale(1)"}
          src={imgb}
          w={"full"}
          height="full"
          objectFit={"contain"}
        />
      </motion.div>
      <Text
        mt={"-20"}
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight="thin"
        color={"whiteAlpha.700"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
