import React from 'react'
import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
const CoinCard = ({ id, name, keys, img, symbol, price, currencySymbol = "₹" }) => {

    return (
        <NavLink to={`/coin/${id}`} key={keys} >

            <VStack w={"52"}
                shadow={"lg"}
                p="8"
                borderRadius={"lg"}
                transition="0.5s"
                m="4"
            
                key={id}
                css={
                    {
                    "&:hover": {
                        transform: "scale(1.1)"
                    }
                }
                }

            >
                <Image src={img} w="100" h={"100"} objectFit="contain" alt='Exchange' />
                <Heading noOfLines={1} size="md" >{symbol}</Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : "NA"}</Text>

            </VStack>

        </NavLink>
    )
}

export default CoinCard