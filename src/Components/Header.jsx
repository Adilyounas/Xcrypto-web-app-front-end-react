import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor="blackAlpha.900" >
      <Button variant={"unstyled"} color="white">
        <NavLink to={"/"}>Home</NavLink>
      </Button>

      <Button variant={"unstyled"} color="white">
        <NavLink to={"/exchanges"}>Exchanges</NavLink>
      </Button>

      <Button variant={"unstyled"} color="white">
        <NavLink to={"/coins"}>Coins</NavLink>
      </Button>
      
    </HStack>
  );
};

export default Header;
