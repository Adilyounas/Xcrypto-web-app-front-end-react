import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from "../index"
import { Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from "./ErrorComponent"

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(false)



  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoader(false)
        
      } catch (error) {
        setError(true)
        setLoader(false)

      }
    }
    fetchExchanges()
  }, [])

if(error) return <ErrorComponent />

  return (
    <Container maxW={"container.xl"}>
      {
        loader ? <Loader /> : (
          <>
            <HStack wrap={"wrap"} justifyContent="center">
              {
                exchanges.map((item, index) => {
                  return (
                    <ExchangeCard
                      key={item.id}
                      name={item.name}
                      img={item.image}
                      rank={item.trust_score_rank}
                      url={item.url} />
                  )
                })
              }
            </HStack>
          </>
        )
      }
    </Container>
  )
}

export default Exchanges