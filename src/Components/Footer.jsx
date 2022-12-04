import React from "react";
import {
    Box,
    VStack,
    Stack,
    Avatar,
    Text,
} from "@chakra-ui/react";
import me from "../assets/adil.jpeg"

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH="48"
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h="full" alignItems={"center"}>

                <VStack width={"full"} alignItems={["center", "self-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontWeight={"sm"} letterSpacing="widest"
                        textAlign={['center', 'left']} >We are the best crypto trading app in Indiam, we provide our guidance at very reasonable price</Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"20"} mt={["4", "0"]} src={me} />
                    <Text textAlign={"center"}>Our Founder</Text>
                </VStack>

            </Stack>
        </Box>
    );
};

export default Footer;
