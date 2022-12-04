import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoader(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoader(false);
      } catch (error) {
        setError(true);
        setLoader(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent />;

  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack justifyContent={"center"} p="8" spacing={"8"}>
              <Radio value="inr">₹ INR</Radio>
              <Radio value="eur">€ EUR</Radio>
              <Radio value="usd">$ USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((item, index) => {
              return (
                <CoinCard
                  id={item.id}
                  key={index}
                  name={item.name}
                  price={item.current_price}
                  img={item.image}
                  symbol={item.symbol}
                  url={item.url}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>

          <HStack w="full" overflowX={"auto"} p="8" className="x_scrol">
            {btns.map((i, index) => {
              return (
                <Button
                  key={index}
                  bgColor={"blackAlpha.900"}
                  color="white"
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
